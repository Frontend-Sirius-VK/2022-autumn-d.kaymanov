import {ProductCard} from '../ProductCard/ProductCard.js';
import EventBus from '../../utils/eventBus.js';
import {Loader} from '../loader/loader.js';

export class ProductCardsRender {
    constructor(parent) {
        const container = document.createElement('div');
        this.parent = parent;
        this.container = container;
        EventBus.on('main:loading', this.render.bind(this));
    }

    render(data) {

        if (!data) {
            this.container.innerHTML = '';
            const loader = new Loader(this.container);
            loader.render();
            this.parent.prepend(this.container);
            return;
        }

        this.container = document.createElement('div');
        data.forEach((product) => {
            const productCard = new ProductCard(this.container);
            productCard.render(product);
        });
        this.parent.append(this.container);
    }

    update(data) {
        if (this.container) {
            this.container.innerHTML = '';
        }
        this.render(data);
    }
}
