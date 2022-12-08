export class ProductCard {
    constructor(parent) {
        this.parent = parent;
    }

    render(product) {
        const {id, altimg, srcimg, namecar, spec, price, yearcar, mileage} = product;
        const container = document.createElement('div');
        container.classList.add('product-card')

        const image = document.createElement('img');
        image.alt = altimg;
        image.src = srcimg;
        image.classList.add('product-card-photo');
        container.appendChild(image);

        const carSpec = document.createElement('div');

        const headText = document.createElement('div');
        const headTextLink = document.createElement('a');
        headTextLink.textContent = namecar;
        headTextLink.href = `/car/${id}`;
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

        container.append(carSpec);
        this.parent.append(container);
    }
}

