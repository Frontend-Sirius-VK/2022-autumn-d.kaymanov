export class Header {
    constructor(parent) {
        this.parent = parent;
    }

    render() {
        const container = document.createElement('div');
        container.classList.add('header')

        const header = document.createElement('div');
        header.textContent = 'auto.ru';
        header.classList.add('header-text');

        const menu = document.createElement('div');
        menu.textContent = '☰';
        menu.classList.add('menu');

        container.append(header, menu);

        this.parent.appendChild(container);
    }
}
