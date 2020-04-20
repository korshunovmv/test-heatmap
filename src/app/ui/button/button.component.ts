import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ui-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.less']
})
export class ButtonComponent {
    @Input() type: string = 'button';
    @Input() tabindex: number = 0;
    @Input() disabled: boolean = false;
    @Input() errors: Array<string> = [];
    @Output() buttonClick: EventEmitter<any> = new EventEmitter();
    @Output() buttonMouseDown: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    onClick(event: Event): any {
        if (!this.disabled) {
            this.buttonClick.emit(event);
        }
    }

    onMouseDown(event: Event) {
        if (!this.disabled) {
            this.buttonMouseDown.emit(event);
        }
    }
}
