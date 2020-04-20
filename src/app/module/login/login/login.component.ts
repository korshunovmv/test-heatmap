import { AfterViewInit, Component, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { InputComponent } from '../../../ui/input/input.component';
import { AppService } from 'app/service/app.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit, OnDestroy, AfterViewInit {

    @ViewChild(InputComponent)
    inputComponent: InputComponent;

    public login: string = '';
    public password: string = '';
    private destroy: Subject<boolean> = new Subject<boolean>();

    // TODO заменить на текст ответа
    // tslint:disable-next-line:max-line-length
    textMessage: string = 'Количество попыток ввода неправильного пароля превысило допустимое. Вход в систему заблокирован до ДД.ММ.ГГГГ ЧЧ:М’М’';
    openModalWindow: boolean = false;
    isDisabledConfirmButton: boolean = false;

    errors = {
        type: '',
        common: []
    };

    get isMobilePlatform(): boolean {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/.test(navigator.userAgent);
    }

    constructor(
        private ngZone: NgZone,
        private appService: AppService,
    ) {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.destroy.next(true);
    }

    ngAfterViewInit(): void {
        if (this.inputComponent && !this.isMobilePlatform) {
            this.setFocus();
        }
    }

    doLogin(): void {
        this.errors.common = [];
        this.errors.type = '';
        const login = this.login.trim();
        if (this.password && login) {
            this.disableConfirmButton();
            setTimeout(() => {
              this.appService.add_authorized();
              this.enableConfirmButton();
            }, 200);
            // this.apiService
            //     .request(new LoginRequest(login, this.password))
            //     .subscribe(() => {
            //         this.enableConfirmButton();
            //     },
            //         errors => {
            //             if (Array.isArray(errors) && errors.length) {
            //                 this.errors.common = [...errors.map(({message}) => message)];
            //             }
            //             this.enableConfirmButton();
            //             // TODO показать ошибку о блокировке в модальном окне
            //         });
            return;
        }
        switch (true) {
            case !this.password && !login:
                this.errors.type = 'common';
                this.errors.common.push('Пожалуйста, укажите логин и пароль');
                break;
            case !login:
                this.errors.type = 'login';
                this.errors.common.push('Пожалуйста, укажите логин');
                break;
            case !this.password:
                this.errors.type = 'password';
                this.errors.common.push('Пожалуйста, укажите пароль');
                break;
        }
    }

    private disableConfirmButton() {
        this.isDisabledConfirmButton = true;
    }

    private enableConfirmButton() {
        this.isDisabledConfirmButton = false;
    }

    private setFocus() {
        this.ngZone.runOutsideAngular(() => {
            setTimeout(() => this.inputComponent.setFocus(), 0);
        });
    }

}
