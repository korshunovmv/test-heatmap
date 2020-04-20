export interface MenuItem {
    title: string;
    icon: string;
    path?: string;
    isOpen?: boolean;
    subMenu?: string;
    isDevMode?: boolean;
    onlyDelo?: boolean;
    relationType?: string | number;
    matomo?: {
        object: string;
        label: string;
        click?: string;
    };
}

export function getPersonalMenu(): MenuItem[] {
    return [
        {
            title: 'Главная',
            icon: 'home',
            path: '/',
            matomo: {
                object: 'main',
                label: 'Главная_меню'
            }
        },
        {
            title: 'Карты',
            icon: 'card',
            path: '/cards',
            matomo: {
                object: 'cards',
                label: 'Карты_меню'
            }
        },
        {
            title: 'Счета',
            icon: 'kotnr_schet',
            isOpen: false,
            subMenu: 'accounts',
            matomo: {
                object: 'accounts',
                label: 'Счета_меню'
            }
        },
        {
            title: 'Вклады',
            icon: 'user',
            path: '/deposits',
            matomo: {
                object: 'deposit',
                label: 'Вклады_меню'
            }
        },
        {
            title: 'Кредиты',
            icon: 'pay',
            path: '/loans',
            matomo: {
                object: 'credit',
                click: 'credit-click',
                label: 'Модуль "Кредиты"'
            }
        },
        {
            title: 'Справки и выписки',
            icon: 'check-form',
            path: '/inquiry',
            matomo: {
                object: 'inquiry',
                click: 'inquiry-click',
                label: 'Модуль "Справки и выписки"'
            }
        }
    ];
}

export function getCorporateMenu(): MenuItem[] {
    return [
        {
            title: 'Главная',
            icon: 'home',
            path: '/',
            matomo: {
                object: 'main',
                label: 'Главная_меню'
            }
        },
        {
            title: 'Счета и карты',
            icon: 'kotnr_schet',
            isOpen: false,
            subMenu: 'accounts',
            matomo: {
                object: 'accounts',
                label: 'Счета_меню'
            }
        },
        {
            title: 'Тарифы',
            icon: 'comparison',
            path: '/tariffs',
            relationType: 1,
            matomo: {
                object: 'tariffs',
                label: 'Тарифы_меню'
            }
        },
        {
            title: 'Магазины',
            icon: 'shop',
            path: '/shops',
            matomo: {
                object: 'shops',
                label: 'Магазины_меню'
            }
        },
        {
            title: 'Контрагенты',
            icon: 'user',
            path: '/contragents',
            matomo: {
                object: 'counterparties',
                label: 'Контрагенты_меню'
            }
        },
        {
            title: 'ВЭД',
            icon: 'currency_control',
            path: '/currency/contracts',
            onlyDelo: true,
            matomo: {
                object: 'contracts',
                label: 'ВЭД_меню'
            }
        },
        {
            title: 'Сервисы',
            icon: 'services',
            isOpen: false,
            subMenu: 'services',
            matomo: {
                object: 'services',
                label: 'Сервисы_меню'
            }
        },
        {
            title: 'Отчетность',
            icon: 'generate_reports',
            path: '/reporting/activate',
            matomo: {
                object: 'reporting',
                label: 'Отчетность_меню'
            }
        }
    ];
}
