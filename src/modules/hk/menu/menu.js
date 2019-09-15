import { LightningElement, track } from 'lwc';

export default class HKMenu extends LightningElement {
    @track open = false;
    @track selectedIndex = 0;
    @track items = [];

    connectedCallback() {
        this.template.addEventListener('keydown', this.handleKeydown);
        document.addEventListener('click', this.handleClick);
    }

    disconnectedCallback() {
        this.template.removeEventListener('keydown', this.handleKeydown);
        document.removeEventListener('click', this.handleClick);
    }

    reset = () => {
        this.open = false;
        this.items = [];
        this.selectedIndex = 0;
        this.querySelector('hk-menu-button').ariaExpanded = 'false';
    };

    handleClick = e => {
        if (this.open) {
            const internalClick = e.path.some(n => {
                return n.nodeName && n.nodeName.toLowerCase().includes('hk-');
            });
            if (!internalClick) {
                this.reset();
            }
        }
    };

    handleKeydown = e => {
        switch (e.key) {
            case 'Tab':
                e.preventDefault();
                break;
            case 'Escape':
                this.reset();
                break;
            case 'ArrowDown':
                if (this.selectedIndex < this.items.length - 1) {
                    this.selectedIndex += 1;
                    this.items[this.selectedIndex].focus();
                }
                break;
            case 'ArrowUp':
                if (this.selectedIndex > 0) {
                    this.selectedIndex -= 1;
                    this.items[this.selectedIndex].focus();
                }
                break;
            default:
                break;
        }
    };

    handleMenuToggle() {
        this.open = !this.open;
    }

    get numItems() {
        return this.items.length;
    }

    handleSlotChange() {
        if (this.open) {
            this.items = Array.from(
                this.querySelector('hk-menu-list').childNodes
            ).filter(node => {
                return !node.nodeName.toLowerCase().includes('divider');
            });
            this.items[this.selectedIndex].focus();
            this.querySelector('hk-menu-button').ariaExpanded = 'true';
        } else {
            this.reset();
        }
    }
}
