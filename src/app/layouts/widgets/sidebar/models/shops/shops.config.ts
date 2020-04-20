import { ShopMenuItemConfig } from './shops.menu';

export const SHOP_MENU_POSITION = 3;

export const SHOP_MENU_ITEM: ShopMenuItemConfig = {
    code: 'shops',
    title: 'Магазины',
    icon: 'shop',
    path: '/shops-v2',
    build: 'delo',
    subMenuItems: [],
    matomo: {
        object: 'shops',
        label: 'Магазины_меню'
    }
};

export const SHOP_MENU_ITEM_WITH_SUB_MENU: ShopMenuItemConfig = {
    code: 'shops',
    title: 'Магазины',
    icon: 'shop',
    subMenu: 'shops',
    build: 'delo',
    subMenuItems: [
        {
            code: 'TRADE',
            title: 'Торговый эквайринг',
            icon: '',
            path: '/acquiring/trade/landing',
            build: 'delo',
            gearIconPath: '/acquiring/trade/management',
            subMenuItems: [],
            matomo: {
                object: 'acquiring',
                label: 'Эквайринг_меню',
                click: 'sidebar'
            }
        },
        {
            code: 'ITRADE',
            title: 'Интернет-эквайринг',
            icon: '',
            path: '/acquiring/internet',
            build: 'delo',
            gearIconPath: '/acquiring/internet/management',
            subMenuItems: [],
            matomo: {
                object: 'acquiring',
                label: 'Эквайринг_меню',
                click: 'sidebar'
            }
        },
        {
            code: 'INVOICE',
            title: 'Выставление счетов',
            icon: '',
            path: '/shops',
            build: 'delo',
            subMenuItems: [],
            matomo: {
                object: 'shops',
                label: 'Магазины_меню',
                click: 'sidebar'
            }
        },
        {
            code: 'KASSA',
            title: 'Онлайн-касса',
            icon: '',
            path: '/retail',
            build: 'delo',
            gearIconPath: '/acquiring/kassa/management',
            subMenuItems: [],
            matomo: {
                object: 'kassa',
                label: 'Касса_меню',
                click: 'sidebar'
            }
        }
    ],
    matomo: {
        object: 'shops',
        label: 'Магазины_меню'
    }
};
