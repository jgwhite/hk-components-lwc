import { LightningElement, api } from 'lwc';

export default class HKMenuList extends LightningElement {
    @api variant;

    get computedClass() {
        const base = 'hk-menu-list';
        const suffix = this.variant ? `--${this.variant}` : ``;

        return `${base}${suffix}`;
    }
}
