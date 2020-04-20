import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { HttpBankService, HttpInterceptor } from 'app/core';

export interface PartnerInfoInterface {
    id: number;
    code: string;
    name: string;
    phones: {
        value: string;
        attribute: any;
    }[];
    emails: any[];
}

export interface PartnerInfoErrorInterface extends Array<{
    code: string;
    message: string;
}> { }

@Injectable()
export class PartnerInfoService {
    partnerInfo: PartnerInfoInterface = null;

    constructor(
        // private bankClient: HttpBankService,
        // private interceptor: HttpInterceptor
    ) {}

    // fetchPartnerInfo(): Observable<PartnerInfoInterface> {
    //     return this.interceptor.get(this.bankClient.apiBaseUrl + '/partner/info')
    //         .pipe(catchError((err: PartnerInfoErrorInterface) => of(null)));
    // }
}
