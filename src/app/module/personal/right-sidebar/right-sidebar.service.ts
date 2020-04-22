import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class RightSidebarService {
    currentActiveMenu: BehaviorSubject<string> = new BehaviorSubject('none');
    prevActiveMenu: BehaviorSubject<string> = new BehaviorSubject('none');
}
