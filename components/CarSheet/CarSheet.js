import EventBus from '../../utils/eventBus.js';
import {Loader} from '../loader/loader.js';
export class CarSheet {
    constructor(parent) {
        const container = document.createElement('div');
        this.parent = parent;
        this.container = container;
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

        const {id, altimg, srcimg, namecar, spec, price, yearcar, mileage} = data;
        this.container = document.createElement('div');
        this.container.classList.add('car-sheet-container')

        const headerCar = document.createElement('div');
        headerCar.classList.add('headerCar');

        const headerCar__carNameDiv = document.createElement('div');
        headerCar__carNameDiv.classList.add('headerCar__carNameDiv')
        const headerCar__carNameDiv__carNameH1 = document.createElement('h1');
        headerCar__carNameDiv__carNameH1.textContent = namecar;
        headerCar__carNameDiv.append(headerCar__carNameDiv__carNameH1);

        const headerCar__carPriceDiv = document.createElement('div');
        headerCar__carPriceDiv.textContent = `${price} ₽`;
        headerCar__carPriceDiv.classList.add('headerCar__carPriceDiv');
        headerCar.append(headerCar__carNameDiv, headerCar__carPriceDiv);

        const owner = document.createElement('div');
        owner.classList.add('owner');

        const owner__data = document.createElement('div');
        owner__data.classList.add('owner__data');
        owner__data.textContent = 'Дмитрий К.'

        const owner__messeage = document.createElement('div');
        owner__messeage.classList.add('owner__messeage');
        owner__messeage.textContent = 'Написать'

        const owner__number = document.createElement('div');
        owner__number.classList.add('owner__number')
        owner__number.textContent = '+7-800-555-35-35'

        owner.append(owner__data, owner__messeage, owner__number);

        const carSpecAndIMG = document.createElement('div');
        carSpecAndIMG.classList.add('carSpecAndIMG');

        const carSpecAndIMG__allspec = document.createElement('div');
        carSpecAndIMG__allspec.classList.add('carSpecAndIMG__allspec');
        const carSpecAndIMG__allspec__spec1 = document.createElement('p');
        carSpecAndIMG__allspec__spec1.textContent = 'Характеристики:';
        const carSpecAndIMG__allspec__spec2 = document.createElement('p');
        carSpecAndIMG__allspec__spec2.textContent = spec;
        const carSpecAndIMG__allspec__year = document.createElement('p');
        carSpecAndIMG__allspec__year.textContent = `Год выпуска: ${yearcar}`;
        const carSpecAndIMG__allspec__mileage = document.createElement('p');
        carSpecAndIMG__allspec__mileage.textContent = `Пробег: ${mileage}`;
        carSpecAndIMG__allspec.append(carSpecAndIMG__allspec__spec1, carSpecAndIMG__allspec__spec2, carSpecAndIMG__allspec__year, carSpecAndIMG__allspec__mileage);

        const carSpecAndIMG__img = document.createElement('div')
        carSpecAndIMG__img.classList.add('carSpecAndIMG__img');
        const carImg = document.createElement('img');
        carImg.classList.add('carImg')
        carImg.alt = altimg;
        carImg.src = srcimg;
        carSpecAndIMG__img.append(carImg)

        carSpecAndIMG.append(carSpecAndIMG__allspec, carSpecAndIMG__img);

        const sellerComment = document.createElement('div');
        sellerComment.classList.add('sellerComment');

        const sellerComment__header = document.createElement('h2');
        sellerComment__header.classList.add('sellerComment__header');
        sellerComment__header.textContent = 'Комментарий продавца'

        const sellerComment__text = document.createElement('div')
        sellerComment__text.classList.add('sellerComment__text');
        sellerComment__text.textContent = 'Крутая машина, вот бы ещё описание из бд брать)'

        sellerComment.append(sellerComment__header, sellerComment__text);

        this.container.append(headerCar, owner, carSpecAndIMG, sellerComment);
        this.parent.append(this.container);
    }

    update(data) {
        if (this.container) {
            this.container.innerHTML = '';
        }
        this.render(data);
    }
}
