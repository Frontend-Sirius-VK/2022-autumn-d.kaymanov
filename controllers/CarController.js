import {CarView} from '../views/CarView.js';
import {CarData} from '../models/carData.js';
import EventBus from '../utils/eventBus.js';


export class CarController {
    process(id) {
        const view = new CarView();
        view.render();

        const carData = new CarData();
        EventBus.emit('carsheet:loading');
        carData.fetchData(id);
    }
}
