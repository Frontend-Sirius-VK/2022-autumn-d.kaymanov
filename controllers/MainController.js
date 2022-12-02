import {MainView} from "../views/MainView.js";
import {ProductCarData} from "../models/productCarData.js";

export class MainController {
    process() {
        const view = new MainView();
        view.render();

        const carCards = new ProductCarData();
        carCards.fetchData();
    }
}
