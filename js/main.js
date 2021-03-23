import personalCustomisation from './modules/personalCustomisation.js';
import personalCustomisers from './settings/personalCustomisers.js';

import readerMode from './modules/readerMode.js';

personalCustomisers.map(
    ({ name, defaultVal }) => {
        personalCustomisation.init(
            name,
            defaultVal
        );
    }
);

const articleElem = document.querySelector("article.article");

readerMode.init(articleElem);