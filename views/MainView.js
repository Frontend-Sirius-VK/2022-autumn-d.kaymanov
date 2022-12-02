import {Categories} from "../components/Categories/Categories.js";
import {Header} from "../components/Header/Header.js";
import {ProductCardsRender} from "../components/ProductCardsRender/productCardsRender.js";
import EventBus from "../utils/eventBus.js";



export class MainView {
    constructor() {
        this.categories = null;
        this.header = null;
        // this.productCardOne = null;
        // this.productCardTwo = null;
        // this.productCardThree = null;
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

        this.container.append(headerElement, categoriesElement, carContainer);
        root.append(this.container);
        this.header.render(headerElement);
        this.categories.render(categoriesElement);
        // this.productCardOne.render('Mercedes', './components/Photos/mb_amg_gt.jpg', 'Мерседес AMG GT', '2.0л/235 л.с./Дизель' + 'Автомат' + 'Спорткар 5 дв.', '3 000 000 ₽', '2020', '4000 км');
        // this.productCardTwo.render('BMW', './components/Photos/bmw_m8.jpg', 'БМВ M8', '2.0л/235 л.с./Дизель' + 'Автомат' + 'Спорткар 5 дв.', '3 000 000 ₽', '2020', '4000 км');
        // this.productCardThree.render('Tesla', './components/Photos/tesla_s.jpg', 'Тесла модель S', '2.0л/235 л.с./Дизель' + 'Автомат' + 'Спорткар 5 дв.', '3 000 000 ₽', '2020', '4000 км');
    }

    update(data = {}) {
        if (!data || !Object.keys(data).length) {
            return;
        }

        this.carsCards.update(data);
    }
}
