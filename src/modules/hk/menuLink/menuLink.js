import { LightningElement, api } from 'lwc';

export default class HKMenuLink extends LightningElement {
    @api href;
    @api target;
    @api variant;

    get computedClass() {
        const base = `hk-menu-link`;
        const suffix = this.variant ? `--${this.variant}` : ``;
        return `${base}${suffix}`;
    }
}
