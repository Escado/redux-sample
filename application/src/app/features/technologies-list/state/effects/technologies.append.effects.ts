import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { append, appendSuccess, appendError } from '../actions/technologies.append.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { TechnologiesService } from '../../services/techologies.service';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TechnologiesAppendEffects {
    constructor(private actions$: Actions, private service: TechnologiesService) {

    }

    appendTechnology$ =
        createEffect(() =>
            this.actions$.pipe(
                ofType(append),
                map(action => action.item),
                mergeMap(item => this.service.appendTechnology(item)
                    .pipe(
                        map(response => appendSuccess({ item: response })),
                        catchError(error => of(appendError({ error })))
                    )
                )
            )
        );
}
