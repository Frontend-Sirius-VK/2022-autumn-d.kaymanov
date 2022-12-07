import {MainController} from '../controllers/MainController.js';
import {CarController} from '../controllers/CarController.js';


const routes = [
    {
        path: '/',
        controller: MainController
    },
    {
        path: `^/car/(\\w+)`,
        controller: CarController
    },
    {
        path: '/car/4',
        controller: CarController
    }
]


export class Router {
    constructor() {
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
        if (pathParser[1] === 'car') {
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
        const pathname = window.location.pathname;
        console.log(pathname)
        const result = routes.find((route) => {
            console.log(route)
            const regexp = new RegExp(route.path );
            console.log(regexp)
            const matches = pathname.match(regexp);
            console.log(matches)

            if (!matches) {
                return false;
            }
            return true;
        });

        if (!result) {
            console.log('404')
        }

        const ControllerClass = result.controller;
        const controller = new ControllerClass();
        controller.process(id);

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


