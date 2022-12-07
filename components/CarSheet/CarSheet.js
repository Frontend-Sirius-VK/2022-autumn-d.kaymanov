export class CarSheet {
    constructor(parent) {
        this.parent = parent;
        this.container = null;
    }

    render(data) {
        const container = document.createElement('div');
        container.classList.add('productCard')

        const image = document.createElement('img');
        image.alt = data.alt;
        image.src = data.src;
        image.classList.add('product-card-photo');
        container.appendChild(image);

        const carSpec = document.createElement('div');

        const headText = document.createElement('div');
        const headTextLink = document.createElement('a');
        headTextLink.textContent = data.name;
        headText.append(headTextLink);
        carSpec.append(headText);
        headText.classList.add('product-card-name');
        headTextLink.classList.add('product-card-name-link')

        const specPrice = document.createElement('div');

        const specifications = document.createElement('div');
        specifications.textContent = data.spec;
        specPrice.append(specifications);
        specifications.classList.add('product-card-spec')

        const priceCar = document.createElement('div');
        priceCar.textContent = `${data.price} ₽`;
        specPrice.append(priceCar);
        priceCar.classList.add('product-card-price')

        const yearCar = document.createElement('div');
        yearCar.textContent = `${data.year} г.`;
        specPrice.append(yearCar);
        yearCar.classList.add('product-card-year')

        const mileageCar = document.createElement('div');
        mileageCar.textContent = `${data.mileage} км.`;
        specPrice.append(mileageCar);
        mileageCar.classList.add('product-card-mileage')

        specPrice.classList.add('product-card-spec-main');
        carSpec.classList.add('product-card-text');
        carSpec.append(specPrice);

        container.append(carSpec);
        this.parent.append(container);
    }



    update(data) {
        if (this.container) {
            this.container.innerHTML = '';
        }
        this.render(data);
    }
}
