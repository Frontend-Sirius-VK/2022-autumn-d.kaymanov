import template from './productcard.handlebars'
export class ProductCard {
    constructor(parent) {
        this.parent = parent;
        this.container = null;
    }

    render(product) {
        const {id, altimg, srcimg, namecar, spec, price, yearcar, mileage} = product;
        const context = {id, altimg, srcimg, namecar, spec, price, yearcar, mileage};
        const html = template(context);

        this.parent.innerHTML += html;
    }
}

