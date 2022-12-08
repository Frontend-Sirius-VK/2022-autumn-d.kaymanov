export class CarSheet {
    constructor(parent) {
        this.parent = parent;
        this.container = null;
    }

    render(data) {
        const {id, altimg, srcimg, namecar, spec, price, yearcar, mileage} = data[0];
        this.container = document.createElement('div');
        this.container.classList.add('productCard')

        const idCar = id;

        const image = document.createElement('img');
        image.alt = altimg;
        image.src = srcimg;
        image.classList.add('product-card-photo');
        this.container.append(image);

        const carSpec = document.createElement('div');

        const headText = document.createElement('div');
        const headTextLink = document.createElement('a');
        headTextLink.textContent = namecar;
        headText.append(headTextLink);
        carSpec.append(headText);
        headText.classList.add('product-card-name');
        headTextLink.classList.add('product-card-name-link')

        const specPrice = document.createElement('div');

        const specifications = document.createElement('div');
        specifications.textContent = spec;
        specPrice.append(specifications);
        specifications.classList.add('product-card-spec')

        const priceCar = document.createElement('div');
        priceCar.textContent = `${price} ₽`;
        specPrice.append(priceCar);
        priceCar.classList.add('product-card-price')

        const yearCar = document.createElement('div');
        yearCar.textContent = `${yearcar} г.`;
        specPrice.append(yearCar);
        yearCar.classList.add('product-card-year')

        const mileageCar = document.createElement('div');
        mileageCar.textContent = `${mileage} км.`;
        specPrice.append(mileageCar);
        mileageCar.classList.add('product-card-mileage')

        specPrice.classList.add('product-card-spec-main');
        carSpec.classList.add('product-card-text');
        carSpec.append(specPrice);

        this.container.append(carSpec);
        this.parent.append(this.container);
    }

    update(data) {
        if (this.container) {
            this.container.innerHTML = '';
        }
        this.render(data);
    }
}
