import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'ui-icon',
    template: '<span class="{{ iconPrefix }}{{ letter | lowercase }}"></span>',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnChanges {
    @Input() letter: string;
    @Input() next: boolean = false;

    iconPrefix: string = 'icon-';

    constructor() {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.hasOwnProperty('next')) {
            if (changes.next.currentValue === '' || (changes.next.currentValue && changes.next.currentValue !== 'false')) {
                this.iconPrefix = 'next-icon-';
            } else {
                this.iconPrefix = 'icon-';
            }
        }
    }
}
