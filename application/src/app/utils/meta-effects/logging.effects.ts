import { Actions, createEffect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { UtilsModule } from '../utils.module';

@Injectable({
    providedIn: UtilsModule
})
export class MetaLoggingEffects {

    constructor(private actions$: Actions) {}

    loggingEffect$ = createEffect(() => this.actions$.pipe(
        tap(action => {
            if (action.type.indexOf('ERROR') !== -1) {
                console.log('We just had an error!' + action.type);
            }
        })
    ), {
        dispatch: false
    });
}
