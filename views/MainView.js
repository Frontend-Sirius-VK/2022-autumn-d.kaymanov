import {Categories} from "../components/Categories/Categories.js";
import {Header} from "../components/Header/Header.js";
import {ProductCardsRender} from "../components/ProductCardsRender/productCardsRender.js";
import EventBus from "../utils/eventBus.js";


export class MainView {
    constructor() {
        this.categories = null;
        this.header = null;
        this.carsCards = null;
        this.container = null;
        EventBus.on('getCarSpec', this.update.bind(this));
    }

    render() {
        const root = document.querySelector('#root');
        this.container = document.createElement('div');

        const headerElement = document.createElement('div');
        headerElement.classList.add('header');
        this.header = new Header(headerElement);

        const categoriesElement = document.createElement('div');
        this.categories = new Categories(categoriesElement);

        const carContainer = document.createElement('div');
        this.carsCards = new ProductCardsRender(carContainer);
        carContainer.append(this.carsCards);

        this.container.append(headerElement, categoriesElement, carContainer);
        root.append(this.container);
        this.header.render(headerElement);
        this.categories.render(categoriesElement);
    }

    update(data = {}) {
        if (!data || !Array.isArray(data) || data.length === 0) {
            return;
        }

        this.carsCards.update(data);
    }
}
