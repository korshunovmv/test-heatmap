import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class AppService {
  build$: BehaviorSubject<string> = new BehaviorSubject(null);
  sessionState$: BehaviorSubject<string> = new BehaviorSubject(null);
  isEmbedBuild$: BehaviorSubject<boolean> = new BehaviorSubject(null);
  isDemoBuild$: BehaviorSubject<boolean> = new BehaviorSubject(null);
  userRole$: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor() {
  }

  get isAnonymous(): boolean {
    return this.sessionState$.value === 'not_authorized' || this.sessionState$.value === 'add_authorized';
  }

  get isAuthenticated(): boolean {
    return this.sessionState$.value === 'logged';
  }

  add_authorized() {
    this.sessionState$.next('add_authorized');
  }

  not_authorized() {
    this.sessionState$.next('not_authorized');
  }

  logged() {
    this.sessionState$.next('logged');
    this.userRole$.next('personal');
  }

  logout() {
    this.not_authorized();
    this.userRole$.next(null);
  }

  init() {
    this.build$.next('delo');
    this.sessionState$.next('not_authorized');
    this.isEmbedBuild$.next(false);
    this.isDemoBuild$.next(false);
  }
}
