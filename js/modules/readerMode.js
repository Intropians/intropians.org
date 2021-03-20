const readerMode = (function() {

    function setClickEvent(node, callback) {
        node.addEventListener(
            'click',
            event => callback(node)
        );
    }

    function checkForTextNodeIn(node) {
        var whitespace = /^\s*$/;
        for (var i = 0; i < node.childNodes.length; i++) {
            let childNode = node.childNodes[i];
            if (childNode.nodeType == 3) {
                if (!whitespace.test(childNode.nodeValue)) return true
            }
        }
        return false;
    }

    function getTextNodesIn(node) {
        var textNodes = []; 
    
        function getTextNodes(node) {
            if (node.nodeType == 1 && checkForTextNodeIn(node)) {
                    textNodes.push(node);
            } else {
                for (var i = 0, len = node.childNodes.length; i < len; ++i) {
                    getTextNodes(node.childNodes[i]);
                }
            }
        }
    
        getTextNodes(node);
        return textNodes;
    }

    function obfuscateNode(node) {
        node.classList.add("obfuscate");
    }

    function revealNode(node) {
        node.classList.remove("obfuscate");
    }

    function init(elem) {
        const textNodes = getTextNodesIn(elem);
        for (var i = 0; i < textNodes.length; i++) {
            obfuscateNode(textNodes[i]);
            setClickEvent(textNodes[i], revealNode)
        }
        console.log(textNodes);
    }

    return {
        init: init
    }

})();

export default readerMode;