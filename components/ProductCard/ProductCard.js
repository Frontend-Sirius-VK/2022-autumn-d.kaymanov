export class ProductCard {
    constructor(parent) {
        this.parent = parent;
    }

    render(alt, src, name, spec, price, year, mileage) {
        const container = document.createElement('div');
        container.classList.add('productCard')

        const image = document.createElement('img');
        image.alt = alt;
        image.src = src;
        image.classList.add('product-card-photo');
        container.appendChild(image);

        const carSpec = document.createElement('div');

        const headText = document.createElement('div');
        headText.textContent = name;
        carSpec.append(headText);
        headText.classList.add('product-card-name');

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
        yearCar.textContent = `${year} г.`;
        specPrice.append(yearCar);
        yearCar.classList.add('product-card-year')

        const mileageCar = document.createElement('div');
        mileageCar.textContent = `${mileage} км.`;
        specPrice.append(mileageCar);
        mileageCar.classList.add('product-card-mileage')

        specPrice.classList.add('product-card-spec-main');
        carSpec.classList.add('product-card-text');
        carSpec.append(specPrice);

        container.append(carSpec);
        this.parent.append(container);
    }
}

