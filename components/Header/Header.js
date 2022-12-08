export class Header {
    constructor(parent) {
        this.parent = parent;
    }

    render() {
        const container = document.createElement('div');
        const header = document.createElement('div');
        header.textContent = 'auto.ru';
        header.classList.add('header-text');
        this.parent.appendChild(header);
        this.parent.append(container);
    }
}
