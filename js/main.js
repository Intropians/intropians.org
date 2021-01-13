import personalCustomisation from './modules/personalCustomisation.js';
import personalCustomisers from './settings/personalCustomisers.js';

personalCustomisers.map(
    ({ name, defaultVal }) => {
        personalCustomisation.init(
            name,
            defaultVal
        );
    }
);