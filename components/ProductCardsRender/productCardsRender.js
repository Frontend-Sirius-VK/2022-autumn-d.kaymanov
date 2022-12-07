import {ProductCard} from '../ProductCard/ProductCard.js';

export class ProductCardsRender {
    constructor(parent) {
        this.parent = parent;
        this.container = null;
    }

    render(data) {
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
