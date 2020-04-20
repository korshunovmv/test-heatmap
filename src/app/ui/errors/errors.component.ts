import { Component, Input } from '@angular/core';

@Component({
    selector: 'ui-control-errors',
    templateUrl: './errors.component.html',
    styleUrls: ['./errors.component.less']
})
export class ControlErrorsComponent {
    @Input() errors: Array<string> = [];
    constructor() {
    }
}
