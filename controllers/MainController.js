import {MainView} from '../views/MainView.js';
import {ProductCarsData} from '../models/productCarsData.js';

export class MainController {
    process() {
        const view = new MainView();
        view.render();

        const carCards = new ProductCarsData();
        carCards.fetchData();
    }
}
