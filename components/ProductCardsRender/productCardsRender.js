import {ProductCard} from "../ProductCard/ProductCard.js";

export class ProductCardsRender {
    constructor(parent, data) {
        this.parent = parent;
        this.data = data;
        this.container = null;
    }
    render(data) {
        console.log(data.rows);
        data.rows.map(dataFunc => {
            this.container = document.createElement('div');
            this.productCard = new ProductCard(this.container);
            this.productCard.render(data.namecar, data.spec, data.price, data.yearcar, data.mileage);
        });
    }

    update(data) {
        this.container.innerHTML = '';
        this.render(data);
    }
}
