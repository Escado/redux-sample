import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UtilsModule } from '../utils.module';
import { Store } from '@ngrx/store';
import { UserState } from '../states/user/user.state';

@Injectable({
    providedIn: UtilsModule
})
export class AuthGuardService implements CanActivate {

    constructor(private store: Store<UserState>, private router: Router) { }

    canActivate(): boolean {
        if (localStorage.getItem('god') === null) {
            this.router.navigate(['public']);
            return false;
        }
        return true;
    }
}
