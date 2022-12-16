import {MainView} from '../views/MainView.js';
import {ProductCarsData} from '../models/productCarsData.js';
import EventBus from '../utils/eventBus.js';

export class MainController {
    process() {
        const view = new MainView();
        view.render();

        const carCards = new ProductCarsData();
        EventBus.emit('main:loading');
        carCards.fetchData();
    }
}
