import {Categories} from '../components/Categories/Categories.js';
import {Header} from '../components/Header/Header.js';
import {ProductCardsRender} from '../components/ProductCardsRender/productCardsRender.js';
import EventBus from '../utils/eventBus.js';


export class MainView {
    constructor() {
        this.categories = null;
        this.header = null;
        this.carsCards = null;
        this.container = null;
        this.root = document.querySelector('#root');
        EventBus.on('product-car-data:got-data', this.update.bind(this));
        EventBus.on('product-car-data:not-found', this.errorUpdate.bind(this));
        EventBus.on('product-car-data:bad-request', this.errorUpdate.bind(this));
        EventBus.on('product-car-data:server-error', this.errorUpdate.bind(this));
    }

    render() {
        this.container = document.createElement('div');

        const headerElement = document.createElement('div');
        headerElement.classList.add('header');
        this.header = new Header(headerElement);

        const categoriesElement = document.createElement('div');
        this.categories = new Categories(categoriesElement);

        const carContainer = document.createElement('div');
        carContainer.classList.add('test');
        this.carsCards = new ProductCardsRender(carContainer);

        this.container.append(headerElement, categoriesElement, carContainer);
        this.root.append(this.container);
        this.header.render(headerElement);
        this.categories.render(categoriesElement);
    }

    update(data = {}) {
        if (!data || !Array.isArray(data) || data.length === 0) {
            return;
        }

        this.carsCards.update(data);
    }

    renderError(data) {
        this.container.innerHTML = '';

        const headerElement = document.createElement('div');
        headerElement.classList.add('header');
        this.header = new Header(headerElement);

        const categoriesElement = document.createElement('div');
        this.categories = new Categories(categoriesElement);

        const errorContainer = document.createElement('div');
        errorContainer.classList.add('error-container__div');

        const errorStatus = document.createElement('p');
        errorStatus.classList.add('error-container-error-status__p');
        errorStatus.textContent = data.title;

        const errorText = document.createElement('p');
        errorText.classList.add('error-container-error-text__p');
        errorText.textContent = data.description;

        errorContainer.append(errorStatus, errorText);

        this.container.append(headerElement, categoriesElement, errorContainer);
        this.root.append(this.container);
        this.header.render(headerElement);
        this.categories.render(categoriesElement);
    }

    errorUpdate(data) {
        if (this.carsCards) {
            this.carsCards.innerHTML = '';
        }
        this.renderError(data);
    }
}
