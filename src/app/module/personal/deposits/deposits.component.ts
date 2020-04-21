import { Component, isDevMode, OnDestroy, OnInit } from '@angular/core';

import { blindInOut } from 'app/util';
import { Subject } from 'rxjs';
import { takeUntil, filter, debounceTime } from 'rxjs/operators';
import { ProductsService } from 'app/service/products.service';


@Component({
    selector: 'personal-summary-deposits',
    templateUrl: './deposits.component.html',
    styleUrls: ['./deposits.component.less'],
    animations: blindInOut
})
export class DepositsComponent implements OnDestroy, OnInit {

    toggle = true;
    stepCountDepositsPhysical = 3;
    allDepositsPhysicalCount: number;
    allDepositsPhysical: any[] = [];

    firstDepositsPhysicalPart: Array<any> = [];
    depositsPhysicalParts: Array<any> = [];
    activeShowMore = false;
    isLoading: boolean = true;
    preloadTimer: any;
    destroy: Subject<boolean> = new Subject<boolean>();
    deposits: any[];

    constructor(
        private productsService: ProductsService,
    ) {
    }

    ngOnInit() {
      this.productsService.deposits
      .pipe(
          filter(el => !!el),
          debounceTime(1000),
          takeUntil(this.destroy)
      )
      .subscribe(deposits => {
          this.setData(deposits);
      });

      setTimeout(() => {
          clearTimeout(this.preloadTimer);
          this.setDisablePreloadTimer();
          this.isLoading = false;
      }, 1000);

  // this.productsService.updateDeposits
  //     .pipe(
  //         takeUntil(this.destroy)
  //     )
  //     .subscribe(res => {
  //         clearTimeout(this.preloadTimer);
  //         this.setDisablePreloadTimer();
  //         if (res) {
  //             this.isLoading = false;
  //         }
  //     });
    }

    ngOnDestroy() {
        this.destroy.next(true);
    }

    setDisablePreloadTimer(): void {
        this.preloadTimer = setTimeout(() => {
            this.isLoading = false;
        }, 20000);
    }

    showMore(): void {
        if (this.allDepositsPhysical.length === this.allDepositsPhysicalCount) {
            const startIndex = (this.depositsPhysicalParts.length * this.stepCountDepositsPhysical) + this.stepCountDepositsPhysical;
            const endIndex = startIndex + this.stepCountDepositsPhysical;
            const appendAccList = this.allDepositsPhysical.slice(startIndex, endIndex);

            this.depositsPhysicalParts.push(appendAccList);

            if (appendAccList.length < this.stepCountDepositsPhysical || endIndex === this.allDepositsPhysical.length) {
                this.toggle = false;
            }
            return;
        }
    }

    hideMore(): void {
        this.depositsPhysicalParts = [];
        this.toggle = true;
    }

    private setData(response: any[]): void {
        if (this.deposits === response) {
            return;
        }
        this.deposits = response;
        this.allDepositsPhysicalCount = response.length;
        response = response.sort((a, b) => {
            let aa = 0;
            let bb = 0;
            if (a.openDate && typeof a.openDate === 'string') {
              aa = (new Date(a.openDate)).getMilliseconds();
            } else if (a.openDate) {
              aa = a.openDate.getMilliseconds();
            }
            if (b.openDate && typeof b.openDate === 'string') {
              bb = (new Date(b.openDate)).getMilliseconds();
            } else if (b.openDate) {
              bb = b.openDate.getMilliseconds();
            }
            return bb - aa;
        });
        this.allDepositsPhysical.splice(0, this.allDepositsPhysical.length);
        response.forEach(deposit => {
            this.allDepositsPhysical.push(deposit);
        });
        this.firstDepositsPhysicalPart = this.allDepositsPhysical.slice(0, this.stepCountDepositsPhysical);
        const depositsPhysicalPartsCount = this.depositsPhysicalParts.length;
        this.depositsPhysicalParts = this.allDepositsPhysical
            .slice(this.stepCountDepositsPhysical, depositsPhysicalPartsCount + this.stepCountDepositsPhysical);
        this.activeShowMore = this.allDepositsPhysicalCount > this.stepCountDepositsPhysical;
    }

}
