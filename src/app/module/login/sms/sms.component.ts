import { Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, Validators } from '@angular/forms';

import { timer, interval, Observable, Subject, merge, SubscriptionLike } from 'rxjs';
import { takeUntil, tap, take, map } from 'rxjs/operators';


import { SendSmsStatus } from '../../../model/send-sms-status';
// import { AppService, Customer } from 'app/core/app';
// import { ApiService, LogoutRequest, SmsOtpAuthRequest, SmsOtpAuthResponse } from 'app/core/api2';
// import { HttpBankService } from 'app/core/api';
// import { ExternalAuthService } from '../external-auth.service';
import { SmsInputComponent } from '../../../ui/sms-input/sms-input.component';
import { AppService } from 'app/service/app.service';

@Component({
    selector: 'app-sms',
    templateUrl: './sms.component.html',
    styleUrls: ['./sms.component.less']
})
export class SmsComponent implements OnInit, OnDestroy, AfterViewInit {

    @ViewChild(SmsInputComponent) smsInputComponent: SmsInputComponent;

    public mask: Array<any> = [];

    public OTPNumber;

    public showConfirmButton: boolean = true;
    public loginBlocked = false;

    public errors = {
        common: []
    };

    formControl: FormControl;

    public sendCode: SendSmsStatus = SendSmsStatus.No;

    // ********** SMS-Timer **********
    public timer: number = 15; // value with backend
    public smsReload: boolean = true;
    public timerStop: boolean = false;
    public timerOpen: number = 0;

    public smsValidityServ: number = 301; // value with backend
    public smsValidity: any = 300;
    public smsKeyValid: boolean = true;
    public smsKeyLoad: boolean = false;
    public smsValidityTimerStop: boolean = false;
    public smsErr: boolean = false;
    // ***************End****************
    public query: string;

    private unsubscribing$: Subject<void> = new Subject<void>();
    private timerUpdating$: Subject<void> = new Subject<void>();
    private subLocation: SubscriptionLike;

    constructor(
        private appService: AppService,
        // private apiService: ApiService,
        // private externalAuthService: ExternalAuthService,
        // private httpBank: HttpBankService,
        private location: Location,
    ) {
        for (let i = 0; i < 4; i++) {
            this.mask.push(/\d/);
        }
    }

    ngOnInit() {
        this.formControl = new FormControl(null, [
            Validators.required,
            Validators.maxLength(4),
            Validators.minLength(4)
        ]);

        this.formControl.valueChanges
            .pipe(
                takeUntil(this.unsubscribing$)
            )
            .subscribe(val => {
                this.markAsValid();

                if (this.formControl.valid) {
                    this.confirm();
                }
            });

        this.subLocation = this.location.subscribe(() => this.cancel());
        // this.externalAuthService.urlParams$$.subscribe(next => {
        //     if (!next) { return; }

        //     const parsedQuery = {};

        //     next.split('&').forEach(each => {
        //         const [key, value] = each.split('=');
        //         parsedQuery[key] = value;
        //     });

        //     if (parsedQuery.hasOwnProperty('appId') && parsedQuery.hasOwnProperty('redirectUrl')) {
        //         this.query = next;
        //     }
        // });

        // this.OTPNumber = this.appService.session$.value.OTPNumber;
        this.smsValidityTimer();
        this.smsTimer();
    }

    ngAfterViewInit() {
        if (this.smsInputComponent) {
            this.smsInputComponent.setFocus();
        }
    }

    ngOnDestroy() {
        this.subLocation.unsubscribe();
        this.unsubscribing$.next();
        this.unsubscribing$.complete();
    }

    confirm(): void {
      if (this.formControl.disabled) {
          return;
      }

      if (this.loginBlocked) {
          return;
      }

      if (this.formControl.invalid) {
          this.errors.common = ['Пожалуйста, введите SMS-код'];
          return;
      }

      this.showConfirmButton = false;

      this.formControl.disable({ onlySelf: true, emitEvent: false });

      setTimeout(() => {
        this.appService.logged();
        this.markAsValid();
        this.formControl.enable({onlySelf: true, emitEvent: false});
      }, 200);

      // const baseUrl = this.appService.environment$.value.api.jsonBaseUrl;
      // const timeout = this.apiService.request(new SmsOtpAuthRequest(this.formControl.value))
      //     .pipe(
      //         tap(session_state =>
      //             this.trackMatomoIfFirstTimeLogged(session_state as { loggedInFirstTime: boolean, customers: Array<Customer> })
      //         ),
      //         takeUntil(
      //             timer(20000)
      //                 .pipe(
      //                     tap(() => {
      //                         if (timeout) {
      //                             this.cancel();
      //                         }
      //                     })
      //                 )
      //         )
      //     ).subscribe(
      //         (session_state: SmsOtpAuthResponse) => {
      //             if (session_state.state === 'logged' && this.query) {
      //                 baseUrl.replace(new RegExp('/+$', 'g'), '')
      //                     .replace(new RegExp('/json', 'g'), '')
      //                     .replace(new RegExp(/^:\d{1,6}/, 'g'), '');
      //                 window.location.href = baseUrl + '/json/authorize/grant?' + this.query;
      //             }
      //             this.markAsValid();
      //             this.formControl.enable({onlySelf: true, emitEvent: false});
      //         },
      //         errors => {
      //             this.showConfirmButton = true;
      //             this.errors.common = [];

      //             // todo кто все эти люди?
      //             if (errors.hasOwnProperty('message')) {
      //                 this.checkErrorCode(errors);
      //                 this.errors.common.push(errors.message);
      //             } else if (Array.isArray(errors)) {
      //                 for (const error of errors) {
      //                     this.checkErrorCode(error);
      //                     this.errors.common.push(error.message);
      //                 }
      //             } else {
      //                 this.errors.common.push('Ошибка');
      //             }

      //             this.markAsInvalid();
      //             this.formControl.enable({ onlySelf: true, emitEvent: false });
      //             this.smsInputComponent.setFocusToActiveItem();
      //         },
      //         () => {
      //             timeout.unsubscribe();
      //         }
      //     );
    }

    private markAsValid() {
        this.smsInputComponent.error = false;
    }

    private markAsInvalid() {
        this.smsInputComponent.error = true;
    }

    checkErrorCode({code}) {
        if (code === 'OTP_SEND_FAILURE') {
            this.loginBlocked = true;
        }
    }

    cancel() {
        this.showConfirmButton = true;
        // this.apiService.request(new LogoutRequest());
    }

    getNewSms() {
        this.smsErr = false;
        this.smsValidityTimerStop = true;
        this.smsKeyLoad = true;
        this.errors.common = [];
        this.formControl.disable({onlySelf: true, emitEvent: false});

        if (this.sendCode === SendSmsStatus.No) {
            this.sendCode = SendSmsStatus.Sending;
            this.delay(3000).then(() => {
                // this.httpBank.sendCode().subscribe(
                //     response => {
                //         this.OTPNumber = response.OTPNumber;
                //         this.formControl.reset();
                //         setTimeout(() => this.smsKeyLoad = false, 1000);
                //         this.smsValidityTimer();
                //         this.smsTimer();
                //         this.sendCode = SendSmsStatus.Success;
                //         this.clearErrors();
                //         this.smsInputComponent.setFocus();
                //         this.markAsValid();
                //         this.formControl.enable({onlySelf: true, emitEvent: false});
                //     },
                //     errors => {
                //         this.smsErr = true;
                //         this.smsKeyLoad = false;
                //         this.formControl.enable({onlySelf: true, emitEvent: false});

                //         if (errors === 'logout') {
                //             this.sendCode = SendSmsStatus.Logout;
                //         } else {
                //             this.sendCode = SendSmsStatus.Error;
                //             this.errors.common = errors.map(x => x.message);
                //             this.markAsInvalid();
                //         }
                //     });
            });
        }
    }

    closeSendSmsWindow() {
        if (this.sendCode === SendSmsStatus.Logout) {
            this.cancel();
        } else {
            this.sendCode = SendSmsStatus.No;
            setTimeout(() => this.smsInputComponent.setFocus(), 0);
        }
    }

    private clearErrors() {
        this.errors.common = [];
    }

    private delay(ms: number): Promise<any> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    smsTimer() {
        this.timerStop = false;
        this.smsReload = true;
        this.timerOpen = this.timer;

        this.createTime(this.timer)
            .subscribe((time: number) => {
                this.timerOpen = time;
                if (!time) {
                    this.smsReload = false;
                }
            });
    }

    smsValidityTimer() {
        this.smsValidityTimerStop = false;
        this.smsKeyValid = true;

        this.timerUpdating$.next();

        this.createTime(this.smsValidityServ)
            .subscribe((time: number) => {
                this.smsValidity = time;
                if (!time) {
                    this.smsKeyValid = false;
                }
            });
    }

    onShowModal() {
        this.formControl.disable({onlySelf: true, emitEvent: false});
    }

    private createTime(startTime: number): Observable<number> {
        return interval(1000)
            .pipe(
                take(startTime),
                map(val => startTime - 1 - val),
                takeUntil(merge(this.unsubscribing$, this.timerUpdating$))
            );
    }

    // private trackMatomoIfFirstTimeLogged(request: { loggedInFirstTime: boolean, customers: Array<Customer> }) {
    //     if (!request.loggedInFirstTime) {
    //         return;
    //     }

    //     if (!Array.isArray(request.customers) || request.customers.find(c => c.notCustomer)) { // не надо, если не клиент
    //         return;
    //     }

    //     // this.matomoTrackerService.trackEvent(
    //     //     'loggedInFirstTime',
    //     //     'loggedInFirstTime-true',
    //     //     'Первая авторизация'
    //     // );
    // }
}
