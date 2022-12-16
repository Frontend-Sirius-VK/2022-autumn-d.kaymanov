export class Loader {
    constructor(parent) {
        this.parent = parent;
    }

    render() {
        const loaderWrap = document.createElement('div');
        loaderWrap.className = 'loaderWrapper';
        const loader = document.createElement('span');
        loader.className = 'loader';
        loaderWrap.appendChild(loader);

        this.parent.appendChild(loaderWrap);
    }
}
