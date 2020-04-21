import { MenuItemConfig } from './menu-item';

export const PERSONAL_MENU: MenuItemConfig[] = [
    // {
    //     title: 'Главная',
    //     icon: 'home',
    //     path: '/',
    // },
    {
        title: 'Cards',
        icon: 'card',
        path: '/cards',
    },
    {
        title: 'Счета',
        icon: 'kotnr_schet',
        isOpen: false,
        subMenu: 'accounts',
    },
    {
        title: 'Deposits',
        icon: 'user',
        path: '/deposits',
    },
    // {
    //     title: 'Кредиты',
    //     icon: 'pay',
    //     path: '/loans',
    //     matomo: {
    //         object: 'credit',
    //         click: 'credit-click',
    //         label: 'Модуль "Кредиты"'
    //     }
    // },
    // {
    //     title: 'Справки и выписки',
    //     icon: 'check-form',
    //     path: '/inquiry',
    //     matomo: {
    //         object: 'inquiry',
    //         click: 'inquiry-click',
    //         label: 'Модуль "Справки и выписки"'
    //     }
    // },
    // {
    //     title: 'Самозанятые',
    //     icon: 'budget_payments',
    //     path: '/self-employed',
    //     notGeb: true,
    //     matomo: {
    //         object: 'self-employed',
    //         click: 'self-employed',
    //         label: 'Модуль "Самозанятый"'
    //     }
    // },
    // {
    //     title: 'Выставление счетов',
    //     icon: 'cash_check',
    //     isNextIcon: true,
    //     path: '/shops',
    //     notGeb: true,
    //     matomo: {
    //         object: 'issued_invoice',
    //         label: 'Выставление_счетов_меню'
    //     }
    // }
];
