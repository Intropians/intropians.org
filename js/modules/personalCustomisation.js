const personalCustomisation = (function() {

    function setClickEvent(callback, dataAttribute, defaultLabel, buttonClass) {
        const buttons = document.querySelectorAll(buttonClass);

        buttons.forEach(button => {
            button.addEventListener('click', event => {
                callback(button.textContent.trim(), dataAttribute, defaultLabel);
            });
        });
    }

    function getPreference(dataAttribute, defaultLabel) {
        return localStorage.getItem(dataAttribute) || defaultLabel;
    }

    function setPreference(label, dataAttribute, defaultLabel) {
        if (label == defaultLabel) {
            localStorage.removeItem(dataAttribute);
            document.documentElement.removeAttribute(dataAttribute);
        } else {
            localStorage.setItem(dataAttribute, label); 
            document.documentElement.setAttribute(dataAttribute, label);
        }
    }

    function init(dataAttribute, defaultLabel, buttonClass) {
        const preference = getPreference(dataAttribute, defaultLabel);
        setPreference(preference, dataAttribute, defaultLabel);
        setClickEvent(setPreference, dataAttribute, defaultLabel, buttonClass);
    }

    return {
        init: init
    }

})();

export default personalCustomisation;