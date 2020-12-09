
const COLOUR_THEME_MEDIA_QUERY =          '(prefers-color-scheme: dark)';
const COLOUR_THEME_PREFERENCE_DATA_ATTRIBUTE_LABEL = 'data-theme-preference';
const COLOUR_THEME_DATA_ATTRIBUTE_LABEL = 'data-theme';
const COLOUR_THEME_DARK_LABEL =           'dark';
const COLOUR_THEME_LIGHT_LABEL =          'light';
const COLOUR_THEME_AUTO_LABEL =           'auto';

const rootNode = document.documentElement;
const themeButtons = document.querySelectorAll('.theme-button');

window.matchMedia(COLOUR_THEME_MEDIA_QUERY).addEventListener('change', event => {
    if (getThemePreference() === COLOUR_THEME_AUTO_LABEL) setTheme();
});

themeButtons.forEach(themeButton => {
    themeButton.addEventListener('click', event => {
        setThemePreference(themeButton.textContent.trim());
    });
});

function getThemePreference() {
    return localStorage.getItem(COLOUR_THEME_DATA_ATTRIBUTE_LABEL) || COLOUR_THEME_AUTO_LABEL;
}

function setThemePreference(theme) {
    localStorage.setItem(COLOUR_THEME_DATA_ATTRIBUTE_LABEL, theme); 
    setTheme();
}

function getOSTheme() {
    if (window.matchMedia && window.matchMedia(COLOUR_THEME_MEDIA_QUERY).matches) {
        return COLOUR_THEME_DARK_LABEL;
    } else {
        return COLOUR_THEME_LIGHT_LABEL;
    }
}

function setTheme() {
    const themePreference = getThemePreference();
    if (themePreference === COLOUR_THEME_AUTO_LABEL) {
        rootNode.setAttribute(COLOUR_THEME_DATA_ATTRIBUTE_LABEL, getOSTheme());
    } else {
        rootNode.setAttribute(COLOUR_THEME_DATA_ATTRIBUTE_LABEL, themePreference);
    }

    rootNode.setAttribute(COLOUR_THEME_PREFERENCE_DATA_ATTRIBUTE_LABEL, themePreference);
}

setTheme();