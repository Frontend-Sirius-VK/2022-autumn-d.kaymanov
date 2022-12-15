import {Categories} from '../components/Categories/Categories.js';
import {Header} from '../components/Header/Header.js';
import EventBus from '../utils/eventBus.js';
import {CarSheet} from '../components/CarSheet/CarSheet.js';

export class CarView {

    constructor() {
        this.categories = null;
        this.header = null;
        this.containerCar = null;
        this.carSheet = null;
        this.root = document.querySelector('#root');
        EventBus.on('one-car-spec:got-data', this.update.bind(this));
        EventBus.on('one-car-spec:not-found', this.renderError.bind(this));
        EventBus.on('one-car-spec:bad-request', this.renderError.bind(this));
        EventBus.on('one-car-spec:server-error', this.renderError.bind(this));
    }

    render() {
        this.root.innerHTML = '';
        this.containerCar = document.createElement('div');

        const headerElement = document.createElement('div');
        headerElement.classList.add('header');
        this.header = new Header(headerElement);

        const categoriesElement = document.createElement('div');
        this.categories = new Categories(categoriesElement);

        const carContainer = document.createElement('div');
        this.carSheet = new CarSheet(carContainer);

        this.containerCar.append(headerElement, categoriesElement, carContainer);
        this.root.append(this.containerCar);
        this.header.render(headerElement);
        this.categories.render(categoriesElement);
    }


    update(data = {}) {
        if (!data) {
            return;
        }
        this.carSheet.update(data);
    }

    renderError(data) {
        if (this.containerCar) {
            this.containerCar.innerHTML = '';
        }
        this.container = document.createElement('div');

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
}
