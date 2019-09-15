import { LightningElement, api } from 'lwc';

export default class HKMenuLink extends LightningElement {
    @api href;
    @api target;
    @api variant;

    @api
    focus() {
        this.template.querySelector('a').focus();
    }

    get computedClass() {
        const base = `hk-menu-link`;
        const suffix = this.variant ? `--${this.variant}` : ``;
        return `${base}${suffix}`;
    }
}
