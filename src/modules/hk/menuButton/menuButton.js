import { LightningElement } from 'lwc';

export default class HKMenuButton extends LightningElement {
    handleClick() {
        this.dispatchEvent(
            new CustomEvent('toggle', {
                bubbles: true,
                composed: true
            })
        );
    }
}
