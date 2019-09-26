import { buildCustomElementConstructor } from 'lwc';
import HkMenu from 'hk/menu';
import HkMenuButton from 'hk/menuButton';
import HkMenuDivider from 'hk/menuDivider';
import HkMenuItem from 'hk/menuItem';
import HkMenuLink from 'hk/menuLink';
import HkMenuList from 'hk/menuList';

customElements.define('hk-menu', buildCustomElementConstructor(HkMenu));
customElements.define(
    'hk-menu-button',
    buildCustomElementConstructor(HkMenuButton)
);
customElements.define(
    'hk-menu-divider',
    buildCustomElementConstructor(HkMenuDivider)
);
customElements.define(
    'hk-menu-item',
    buildCustomElementConstructor(HkMenuItem)
);
customElements.define(
    'hk-menu-link',
    buildCustomElementConstructor(HkMenuLink)
);
customElements.define(
    'hk-menu-list',
    buildCustomElementConstructor(HkMenuList)
);
