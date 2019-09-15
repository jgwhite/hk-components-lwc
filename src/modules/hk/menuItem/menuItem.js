import { LightningElement, api } from 'lwc';

export default class HKMenuItem extends LightningElement {
    @api variant;
    @api handleSelect = () => {};

    get computedClass() {
        const base = `hk-menu-item`;
        const suffix = this.variant ? `--${this.variant}` : ``;
        return `${base}${suffix}`;
    }
}
