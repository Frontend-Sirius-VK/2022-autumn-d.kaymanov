import {MainView} from "../views/MainView.js";

export class MainController {
    process() {
        const view = new MainView();
        view.render();
    }
}
