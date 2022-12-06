export class MainPage {

    constructor(parent) {
        this.parent = parent;
    }

    render() {
        const mainPageElement = document.createElement('h1');
        mainPageElement.textContent = 'Hello world';
        this.parent.appendChild(mainPageElement);
    }
}