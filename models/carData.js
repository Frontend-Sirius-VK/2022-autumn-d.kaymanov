import EventBus from '../utils/eventBus.js';


export class CarData {
    constructor() {
        this.products = null;
    }

    fetchData(id) {
        fetch(`/getOneCarSpec/${id}`).then((response) => response.json()).then((data) => {
            this.products = data;
            EventBus.emit('one-car-spec:got-data', data);
        })
    }
}
