import template from './header.handlebars';
export class Header {
    constructor(parent) {
        this.parent = parent;
        this.headingText = 'auto.ru';
        this.menuText = '☰';
    }

    render(container) {
        const {headingText, menuText} = this;
        const context = {headingText, menuText};
        const html = template(context);

        this.parent.innerHTML += html;
    }
}
