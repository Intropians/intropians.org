const personalCustomisation = (function() {

    function setClickEvent(callback, dataKey, buttonClass, defaultVal) {
        const buttons = document.querySelectorAll(buttonClass);

        buttons.forEach(button => {
            button.addEventListener('click', event => {
                callback(button.textContent.trim(), dataKey, defaultVal);
            });
        });
    }

    function getButtonClass(name) {
        return `.${name}-button`;
    };
    
    function getDataKey(name) {
        return `data-${name}-preference`;
    };

    function getPreference(dataKey, defaultVal) {
        return localStorage.getItem(dataKey) || defaultVal;
    }

    function setPreference(label, dataKey, defaultVal) {
        if (label == defaultVal) {
            localStorage.removeItem(dataKey);
            document.documentElement.removeAttribute(dataKey);
        } else {
            localStorage.setItem(dataKey, label); 
            document.documentElement.setAttribute(dataKey, label);
        }
    }

    function init(name, defaultVal) {
        const dataKey = getDataKey(name);
        const buttonClass = getButtonClass(name);
        const preference = getPreference(dataKey, defaultVal);
        setPreference(preference, dataKey, defaultVal);
        setClickEvent(setPreference, dataKey, buttonClass, defaultVal);
    }

    return {
        init: init
    }

})();

export default personalCustomisation;