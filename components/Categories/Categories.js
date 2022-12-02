export class Categories {

    constructor(parent) {
        this.parent = parent;
    }

    render() {
        const container = document.createElement('div');
        container.classList.add('categories')

        const passengerCars = document.createElement('div')
        passengerCars.textContent = 'Легковые';
        container.append(passengerCars);
        passengerCars.classList.add('сategory')

        const commercialCars = document.createElement('div')
        commercialCars.textContent = 'Коммерческие';
        container.append(commercialCars);
        commercialCars.classList.add('сategory')

        const motorcyclesCars = document.createElement('div')
        motorcyclesCars.textContent = 'Мото';
        container.append(motorcyclesCars);
        motorcyclesCars.classList.add('сategory')

        const electricCars = document.createElement('div')
        electricCars.textContent = 'Электромобили';
        container.append(electricCars);
        electricCars.classList.add('сategory')

        this.parent.append(container);
    }
}
