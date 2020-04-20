import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    HostListener,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    ViewChild
} from '@angular/core';

@Component({
    selector: 'ui-show-more-text',
    templateUrl: './show-more-text.component.html',
    styleUrls: ['./show-more-text.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowMoreTextComponent implements OnInit, AfterViewInit, OnChanges {
    isShowControls: boolean = false;
    isCollapsed: boolean = false;
    textBlockCoverOpen: boolean = false;
    initialH: number;
    @Input() lineH: number = 20;
    @Input() lineCount: number = 3;
    @Input() additionalH: number;
    @Input() text: string = '';
    @Input() showCollapsed: boolean = true;
    @ViewChild('textBlock') textBlock: ElementRef;
    @ViewChild('toggleBtn') toggleBtn: ElementRef;

    get btnText(): string {
        return this.isCollapsed ? 'Cкрыть' : 'Показать';
    }

    constructor(private cd: ChangeDetectorRef) { }

    ngOnInit(): void {
    }

    @HostListener('window:resize', ['$event'])
    onResize(): void {
        if (this.isCollapsed) {
            this.updateText();
            this.textBlock.nativeElement.style.height = `${this.initialH}px`;
        }
    }

    ngAfterViewInit(): void {
        this.updateText();
    }

    updateText(withCollapse?: boolean): void {
        this.cd.detectChanges();
        const el = this.textBlock.nativeElement;
        el.style.height = 'auto';
        const elH: number = el.clientHeight;
        this.initialH = elH;

        const currentLineCount = elH / this.lineH;
        if (currentLineCount > this.lineCount) {
            this.hideText();
            if (withCollapse) {
                this.isCollapsed = false;
            }
            this.isShowControls = true;
        } else {
            this.isShowControls = false;
        }
        this.cd.detectChanges();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.hasOwnProperty('text') && this.textBlock) {
            this.isCollapsed = false;
            this.updateText();
        }
    }

    toggle(event: Event): void {
        event.stopPropagation();
        this.isCollapsed = !this.isCollapsed;
        if (this.isCollapsed) {
            this.textBlock.nativeElement.style.height = `${this.initialH}px`;
            this.toggleBtn.nativeElement.classList.remove('is-collapsed');
        } else {
            this.hideText();
            this.toggleBtn.nativeElement.classList.add('is-collapsed');
        }
    }

    private hideText(): void {
        let height: number = this.lineCount * this.lineH;
        if (this.additionalH) {
            height += this.additionalH;
        }
        this.textBlock.nativeElement.style.height = `${height}px`;
    }

}
