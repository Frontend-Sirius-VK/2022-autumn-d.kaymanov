import {router} from '../routing/Router.js';

import './main.css';

router.start();

window.addEventListener('popstate', (event) => {
    router.invokeController();
});

