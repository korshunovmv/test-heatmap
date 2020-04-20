export interface MenuItemConfig {
    title: string;
    code?: string;
    icon: string;
    isNextIcon?: boolean;
    path?: string;
    build?: string; // delo
    subMenu?: string;
    isOpen?: boolean;
    onlyDelo?: boolean;
    isDevMode?: boolean;
    relationType?: string | number;
    notGeb?: boolean;
    /** Конфиг матомо */
    matomo?: {
        category?: string;
        object: string;
        label: string;
        click?: string;
    };
}

export class MenuItem {
    title: string;
    code?: string;
    icon: string;
    isNextIcon?: boolean;
    path?: string;
    build?: string; // delo
    subMenu?: string;
    isOpen?: boolean;
    onlyDelo?: boolean;
    isDevMode?: boolean;
    relationType?: string | number;
    notGeb?: boolean;
    /** Конфиг матомо */
    matomo?: {
        category?: string;
        object: string;
        label: string;
        click?: string;
    };

    constructor(config: MenuItemConfig) {
        Object.assign(this, config);
    }

    toggle() {
        this.isOpen = !this.isOpen;
    }
}
