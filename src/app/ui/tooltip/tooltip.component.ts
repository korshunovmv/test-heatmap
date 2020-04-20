import { Component, ElementRef, HostListener, Input, ViewChild, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { toInteger as _toInteger } from 'lodash';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil, switchMap, delay, debounce, debounceTime } from 'rxjs/operators';

type XPos = 'right' | 'left';
type YPos = 'top' | 'bottom';

type XInputPos = 'right' | 'center' | 'left';
type YInputPos = 'top' | 'bottom';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'ui-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.less']
})
export class TooltipComponent implements OnInit {

    @Input() text: string;
    @Input() topOffset: number = 0;
    @Input() rightOffset: number = 0;
    @Input() bottomOffset: number = 0;
    @Input() leftOffset: number = 0;
    @Input() inDelay: number = 0;
    @Input() outDelay: number = 0;
    @Input() displayOtherContent: boolean;
    @Input() whiteTheme: boolean;
    @Input() width: number = 220; // Ширина tooltip

    @Input() posX: XInputPos = 'left';
    @Input() posY: YInputPos = 'bottom';
    @Input() isAutoWidth: boolean = false;

    @Output() hidden: EventEmitter<any> = new EventEmitter();
    @Output() displayed: EventEmitter<any> = new EventEmitter();

    @ViewChild('parentTooltip') parentView: ElementRef;
    @ViewChild('tooltip') tooltipView: ElementRef;
    @ViewChild('arrow') arrow: ElementRef;

    isShow: boolean = false;

    tooltipStyles: any = {};
    arrowStyles: any = {};

    private unsubscribing: Subject<void> = new Subject<void>();

    constructor(
        private el: ElementRef,
        private cdr: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.listenOver();
        this.listenLeave();
    }

    private listenOver() {
        const el: HTMLElement = this.el.nativeElement;
        const delayVal: number = this.getDelay(this.outDelay);

        fromEvent(el, 'mouseover')
            .pipe(
                debounceTime(delayVal),
                takeUntil(this.unsubscribing)
            )
            .subscribe(() => {
                this.onMouseOver();
            });
    }


    private onMouseOver() {
        if (this.text || this.displayOtherContent) {

            const parent = this.parentView.nativeElement.getBoundingClientRect();
            const container = document.getElementsByClassName('container')[0].getBoundingClientRect();

            this.tooltipStyles.width = this.isAutoWidth ? 'auto' : this.width + 'px';

            switch (this.posX) {
                case 'right':
                    const rightOffset = parent.left - this.width;
                    this.setXPos(rightOffset, 'right');
                    break;
                case 'center':
                    this.setXCenterPos();
                    break;
                case 'left':
                default:
                    const leftOffset = container.right - parent.left - this.width;
                    this.setXPos(leftOffset, 'left');
                    break;
            }

            switch (this.posY) {
                case 'top':
                    this.setYPos(parent.height, 'bottom');
                    break;
                case 'bottom':
                default:
                    this.setYPos(parent.height, 'top');
                    break;
            }

            this.isShow = true;
            this.cdr.markForCheck();
            this.displayed.next();
        }
    }

    /**
     * @desc set tooltip body and tooltip arrow position by parent center by x axis
     */
    private setXCenterPos(): void {
        this.tooltipStyles.left = '50%';
        this.tooltipStyles.transform = 'translateX(-50%)';

        this.arrowStyles.right = 0;
        this.arrowStyles.left = 0;
        this.arrowStyles['margin-right'] = 'auto';
        this.arrowStyles['margin-left'] = 'auto';
    }

    /**
     * @desc set tooltip body and tooltip arrow position by x axis
     * @param {number} offset offset by parent element
     * @param {('left' | 'right')} direction direction by x axis.
     */
    private setXPos(offset: number, direction: XPos): void {
        const customOffset: number = _toInteger(this[`${direction}Offset`]);

        this.tooltipStyles[direction] = `${offset > 0 ? customOffset : offset}px`;
        this.arrowStyles[direction] = `${offset > 0 ? 6 : -offset + 6}px`;
    }

    /**
     * @desc set tooltip body and tooltip arrow position by y axis
     * @param {number} parentH parent element height
     * @param {('top' | 'bottom')} direction direction by y axis.
     */
    private setYPos(parentH: number, direction: YPos): void {
        const customOffset: number = _toInteger(this[`${direction}Offset`]);

        const tooltipOffset: string = `${parentH + 5 + customOffset}px`;
        const arrowOffset: string = '-3px';

        this.tooltipStyles[direction] = tooltipOffset;
        this.arrowStyles[direction] = arrowOffset;
    }

    private listenLeave() {
        const el: HTMLElement = this.el.nativeElement;
        const delayVal: number = this.getDelay(this.outDelay);
        fromEvent(el, 'mouseover')
            .pipe(
                switchMap(() => fromEvent(el, 'mouseleave').pipe(delay(delayVal))),
                takeUntil(this.unsubscribing)
            )
            .subscribe(() => {
                this.isShow = false;
                this.cdr.markForCheck();
                this.tooltipStyles = {};
                this.arrowStyles = {};
                this.hidden.next();
            });
    }

    private getDelay(delayVal: number): number {
        return Number.isFinite(delayVal) ? delayVal : 0;
    }
}
