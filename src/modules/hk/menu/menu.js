import { LightningElement, track } from 'lwc';

export default class HKMenu extends LightningElement {
    @track open = false;

    handleMenuToggle() {
        this.open = !this.open;
    }
}
