import { LightningElement, api } from 'lwc';

export default class HKMenuItem extends LightningElement {
    @api variant;
    @api closeOnClick = false;

    @api
    focus() {
        this.template.querySelector('button').focus();
    }

    handleClick() {
        if (this.closeOnClick !== false) {
            this.dispatchEvent(
                new CustomEvent('menuclose', {
                    bubbles: true
                })
            );
        }
    }

    get computedClass() {
        const base = `hk-menu-item`;
        const suffix = this.variant ? `--${this.variant}` : ``;
        return `${base}${suffix}`;
    }
}
