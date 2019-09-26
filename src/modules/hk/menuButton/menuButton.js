import { LightningElement, api } from 'lwc';

export default class HKMenuButton extends LightningElement {
    @api variant;

    handleClick() {
        this.dispatchEvent(
            new CustomEvent('menutoggle', {
                bubbles: true
            })
        );
    }
}
