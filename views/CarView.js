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
        if (!data || !Array.isArray(data) || data.length === 0) {
            return;
        }
        this.carSheet.update(data);
    }
}
