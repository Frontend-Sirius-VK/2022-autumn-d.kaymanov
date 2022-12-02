import EventBus from "../utils/eventBus.js";

export class ProductCarData {
    constructor() {
        this.products = null;
    }

    fetchData() {
        fetch('/getCarSpec').then((response) => response.json()).then((data) => {
            this.products = data;

            EventBus.emit('getCarSpec', data);
        })
    }
}
