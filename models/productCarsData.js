import EventBus from "../utils/eventBus.js";

export class ProductCarsData {
    constructor() {
        this.products = null;
    }

    fetchData() {
        fetch('/getCarSpec').then((response) => response.json()).then((data) => {
            this.products = data;
            EventBus.emit('product-car-data:got-data', data);
        })
    }
}
