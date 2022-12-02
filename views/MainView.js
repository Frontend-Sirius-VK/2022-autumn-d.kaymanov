import {Categories} from "../components/Categories/Categories.js";
import {Header} from "../components/Header/Header.js";
import {ProductCard} from "../components/ProductCard/ProductCard.js";
import EventBus from "../utils/eventBus.js";


export class MainView {
    constructor() {
        this.categories = null;
        this.header = null;
        // this.productCardOne = null;
        // this.productCardTwo = null;
        // this.productCardThree = null;
        this.container = null;
        EventBus.on('getCarSpec', this.renderCars.bind(this));
    }
    render(data) {
        const root = document.querySelector('#root');
        this.container = document.createElement('div');

        const headerElement = document.createElement('div');
        headerElement.classList.add('header');
        this.header = new Header(headerElement);

        const categoriesElement = document.createElement('div');
        this.categories = new Categories(this.container);

        // const carContainer = document.createElement('div');
        // carContainer.append(this.renderCars(data));
        // this.container.append(carContainer);

        // const productCardOne = document.createElement('div');
        // this.productCardOne = new ProductCard(container);
        //
        // const productCardTwo = document.createElement('div');
        // this.productCardTwo = new ProductCard(container);
        //
        // const productCardThree = document.createElement('div');
        // this.productCardThree = new ProductCard(container);
        // this.productCardThree.fetchData();

        // this.renderCars(data);

        this.container.append(headerElement, categoriesElement);
        root.append(this.container);
        this.header.render(headerElement);
        this.categories.render(categoriesElement);
        // this.productCardOne.render('Mercedes', './components/Photos/mb_amg_gt.jpg', 'Мерседес AMG GT', '2.0л/235 л.с./Дизель' + 'Автомат' + 'Спорткар 5 дв.', '3 000 000 ₽', '2020', '4000 км');
        // this.productCardTwo.render('BMW', './components/Photos/bmw_m8.jpg', 'БМВ M8', '2.0л/235 л.с./Дизель' + 'Автомат' + 'Спорткар 5 дв.', '3 000 000 ₽', '2020', '4000 км');
        // this.productCardThree.render('Tesla', './components/Photos/tesla_s.jpg', 'Тесла модель S', '2.0л/235 л.с./Дизель' + 'Автомат' + 'Спорткар 5 дв.', '3 000 000 ₽', '2020', '4000 км');
    }

    renderCars(data) {
        console.log(data.rows);
        data.forEach(data => {
            this.productCard = document.createElement('div');
            this.productCard = new ProductCard(this.container);
            this.productCard.render(data.namecar, data.spec, data.price, data.yearcar, data.mileage);
            });
    }
}
