import {
    AfterViewInit,
    Component,
    EventEmitter,
    Input,
    Output,
    Renderer2,
    OnDestroy,
    OnInit,
    Inject,
    HostListener
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
// import { blindInOut } from 'app/util';

@Component({
    selector: 'ui-modal-window',
    templateUrl: './modal-window.component.html',
    styleUrls: ['./modal-window.component.less'],
    // animations: blindInOut
})

export class ModalWindowComponent implements OnInit, AfterViewInit, OnDestroy {

    @Input() windowTitle: string;
    @Input() innerHtmlWindowTitle: string;
    @Input() opened: boolean = true;
    @Input() shadowCloseEnable: boolean = true;
    @Input() closeOnCrossClick: boolean = true;
    @Input() isScroll: boolean = true;
    @Input() hidePageScroll: boolean = false;
    @Output() close: EventEmitter<string> = new EventEmitter<string>();
    scrollTop: number = 0;

    @HostListener('document:touchmove', ['$event'])
    onTouchMove($event: any): void {
        if (this.osIsIos()) {
            $event.preventDefault();
        }
    }

    constructor(
        @Inject(DOCUMENT) private document: any,
        private renderer2: Renderer2
    ) {}

    ngOnInit() {
        if (this.hidePageScroll || this.osIsIos()) {
            this.scrollTop = this.document.body.scrollTop;
            this.renderer2.setStyle(this.document.body, 'overflow', 'hidden');
            this.renderer2.setStyle(this.document.body.parentElement, 'overflow', 'hidden');
            this.renderer2.setStyle(this.document.body, 'position', 'relative');
        }
    }

    ngAfterViewInit(): void {
        const emailInput = <HTMLInputElement>document.querySelector('#email-input');
        const modalInput = <HTMLInputElement>document.querySelector('#modal-input');

        if (emailInput) {
            emailInput.focus();
        } else if (modalInput) {
            modalInput.focus();
        }
    }

    ngOnDestroy() {
        if (this.hidePageScroll || this.osIsIos()) {
            this.renderer2.removeStyle(this.document.body, 'overflow');
            this.renderer2.removeStyle(this.document.body.parentElement, 'overflow');
            this.renderer2.removeStyle(this.document.body, 'position');
            this.document.body.scrollTop = this.scrollTop;
        }
    }

    osIsIos() {
        return /(iPhone|iPad|iPod).*(OS 11_[0-2]_[0-5])/.test(navigator.userAgent);
    }

    onClose(isShadowClick?: boolean): void {
        if (isShadowClick && !this.shadowCloseEnable) {
            return;
        }
        this.close.emit();
    }
}
