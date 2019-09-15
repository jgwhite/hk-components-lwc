import { LightningElement, track } from 'lwc';

export default class HKMenu extends LightningElement {
    @track open = true;

    handleMenuToggle() {
        this.open = !this.open;
    }
}
