import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UtilsModule } from '../utils.module';
import { Store } from '@ngrx/store';
import { UserState, userUsernameSelector } from '../states/user/user.state';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: UtilsModule
})
export class AuthGuardService implements CanActivate {

    constructor(private store: Store<UserState>, private router: Router) { }

    canActivate(): Observable<boolean> {
        return this.store.select(userUsernameSelector).pipe(
            map(username => {
                if (username === '') {
                    this.router.navigate(['public']);
                    return false;
                }
                return true;
            })
        );
    }
}
