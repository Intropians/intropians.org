import personalCustomisation from './modules/personalCustomisation.js';
import personalCustomisers from './settings/personalCustomisers.js';

personalCustomisers.map(
    ({ dataAttribute, defaultLabel, buttonClass }) => {
        personalCustomisation.init(
            dataAttribute,
            defaultLabel,
            buttonClass
        );
    }
);