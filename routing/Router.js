import {MainController} from '../controllers/MainController.js';
import {CarController} from '../controllers/CarController.js';
import EventBus from "../utils/eventBus.js";


const routes = [
    {
        path: `^/$`,
        controller: MainController
    },
    {
        path: `^/cars/(\\w+)`,
        controller: CarController
    },
]

const controllerСheck = [new MainController()];


export class Router {
    constructor() {
        EventBus.off('carsheet:loading');
        EventBus.off('main:loading');
        EventBus.off('product-car-data:got-data');
        EventBus.off('product-car-data:not-found');
        EventBus.off('product-car-data:bad-request');
        EventBus.off('product-car-data:server-error');
        EventBus.off('one-car-spec:got-data');
        EventBus.off('one-car-spec:not-found');
        EventBus.off('one-car-spec:bad-request');
        EventBus.off('one-car-spec:server-error');
        this.onDocumentClick = this.onDocumentClick.bind(this);
    }

    onDocumentClick(event) {
        const {target} = event;
        const {tagName} = target;

        if (tagName === 'A') {
            event.preventDefault();

            if (target.href !== undefined) {
                this.go(target.href);
            }
        }
    }

    getID() {
        const pathParser = window.location.pathname.split('/')
        let id;
        if (pathParser[1] !== undefined) {
            id = pathParser[2]
        }
        return id
    }

    go(pathname) {
        window.history.pushState({}, '', pathname);
        this.invokeController();
    }

    invokeController() {
        const id = this.getID();
        const {pathname} = window.location;
        const result = routes.find((route) => {
            const regexp = new RegExp(route.path );
            const matches = pathname.match(regexp);

            return Boolean(matches)
        });

        if (!result) {
            console.log('404')
        }
        const ControllerClass = result.controller;
        const controller = new ControllerClass();
        if (result.controller !== controllerСheck){
            controller.process(id);
        } else {
            controller.process();
        }
    }

    start() {
        document.addEventListener('click', this.onDocumentClick);
        this.invokeController();
    }

    stop() {
        document.removeEventListener('click', this.onDocumentClick);
    }
}

export const router = new Router();


