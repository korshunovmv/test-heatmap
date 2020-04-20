export * from './anonymous/anonymous.component';
export * from './login/login.component';
export * from './personal/personal.component';

import { AnonymousLayoutComponent } from './anonymous/anonymous.component';
import { LoginLayoutComponent } from './login/login.component';
import { PersonalLayoutComponent } from './personal/personal.component';

export const layoutComponents = [
    AnonymousLayoutComponent,
    LoginLayoutComponent,
    PersonalLayoutComponent,
];
