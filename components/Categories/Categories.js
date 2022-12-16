import template from './categories.handlebars';

export class Categories {

    constructor(parent) {
        this.parent = parent;
        this.passengerCars = 'Легковые';
        this.commercialCars = 'Коммерческие';
        this.motorcyclesCars = 'Мото';
        this.electricCars = 'Электромобили';
    }

    render() {

        const {passengerCars, commercialCars, motorcyclesCars, electricCars} = this;
        const context = {passengerCars, commercialCars, motorcyclesCars, electricCars};
        const html = template(context);

        this.parent.innerHTML += html;
    }
}
