import {CarView} from '../views/CarView.js';
import {CarData} from '../models/carData.js';


export class CarController {
    process(id) {
        const view = new CarView();
        view.render();

        const carData = new CarData();
        carData.fetchData(id);
    }
}
