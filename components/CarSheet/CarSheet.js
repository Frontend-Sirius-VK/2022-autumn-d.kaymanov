import EventBus from '../../utils/eventBus.js';
import {Loader} from '../loader/loader.js';
import template from './carsheet.handlebars';

export class CarSheet {
    constructor(parent) {
        const container = document.createElement('div');
        this.parent = parent;
        this.container = container;
        this.messeage = 'Написать';
        this.specifications = 'Характеристики:';
        this.commentHeader = 'Комментарий продавца';
        EventBus.on('carsheet:loading', this.render.bind(this));
    }

    render(data) {
        if (!data) {
            this.container.innerHTML = '';
            const loader = new Loader(this.container);
            loader.render();
            this.parent.prepend(this.container);
            return;
        }

        const {messeage, specifications, commentHeader} = this
        const {id, altimg, srcimg, namecar, spec, price, yearcar, mileage, nameowner, numberowner, descriptioncar} = data;
        const context = {id, altimg, srcimg, namecar, spec, price, yearcar, mileage, nameowner, numberowner, descriptioncar, messeage, specifications, commentHeader};
        const html = template(context);

        this.parent.innerHTML += html;
    }

    update(data) {
        if (this.container) {
            this.container.innerHTML = '';
        }
        this.render(data);
    }
}
