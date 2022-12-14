export class ProductCard {
    constructor(parent) {
        this.parent = parent;
        this.container = null;
    }

    render(product) {
        const {id, altimg, srcimg, namecar, spec, price, yearcar, mileage} = product;
        this.container = document.createElement('div');
        this.container.classList.add('product-card')

        const imageContainer = document.createElement('div')
        imageContainer.classList.add('imageContainer')
        const image = document.createElement('img');
        image.alt = altimg;
        image.src = srcimg;
        image.classList.add('product-card-photo');
        imageContainer.append(image)
        this.container.appendChild(imageContainer);

        const carSpec = document.createElement('div');

        const headText = document.createElement('div');
        const headTextLink = document.createElement('a');
        headTextLink.textContent = namecar;
        headTextLink.href = `/cars/${id}`;
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
}

