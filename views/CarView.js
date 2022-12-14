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
        EventBus.on('one-car-spec:got-data', this.update.bind(this));
        EventBus.on('one-car-spec:not-found', this.errorUpdate.bind(this));
        EventBus.on('one-car-spec:bad-request', this.errorUpdate.bind(this));
        EventBus.on('one-car-spec:server-error', this.errorUpdate.bind(this));
    }

    render() {
        const root = document.querySelector('#root');
        root.innerHTML = '';
        this.containerCar = document.createElement('div');

        const headerElement = document.createElement('div');
        headerElement.classList.add('header');
        this.header = new Header(headerElement);

        const categoriesElement = document.createElement('div');
        this.categories = new Categories(categoriesElement);

        const carContainer = document.createElement('div');
        this.carSheet = new CarSheet(carContainer);

        this.containerCar.append(headerElement, categoriesElement, carContainer);
        root.append(this.containerCar);
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
        const root = document.querySelector('#root');
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
        errorStatus.textContent = data[0];

        const errorText = document.createElement('p');
        errorText.classList.add('error-container-error-text__p');
        errorText.textContent = data[1];

        errorContainer.append(errorStatus, errorText);

        this.container.append(headerElement, categoriesElement, errorContainer);
        root.append(this.container);
        this.header.render(headerElement);
        this.categories.render(categoriesElement);
    }

    errorUpdate(data) {
        if (this.containerCar) {
            this.containerCar.innerHTML = '';
        }
        this.renderError(data);
    }
}
