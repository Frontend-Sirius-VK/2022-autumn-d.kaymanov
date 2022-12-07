import EventBus from '../utils/eventBus.js';


export class CarData {
    constructor() {
        this.products = null;
    }

    fetchData(id) {
        console.log('id')
        fetch(`/getOneCarSpec/${id}`).then((response) => response.json()).then((data) => {
            this.products = data;

            EventBus.emit('getOneCarSpec', data);
        })
    }
}
