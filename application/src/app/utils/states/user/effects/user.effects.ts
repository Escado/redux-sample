import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginSuccess } from '../actions/user.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserService } from 'src/app/utils/services/user.service';

@Injectable({
    providedIn: 'root'
})
export class UserEffects {
    constructor(private actions$: Actions, private service: UserService) {

    }

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(login),
            map(action => action.username),
            mergeMap(username => this.service.login(username).pipe(
                map(_ => loginSuccess({ username })),
                catchError(_ => loginSuccess)
            ))
        ));
}
