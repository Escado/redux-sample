import { Injectable } from '@angular/core';
import { Effect, Actions, createEffect, ofType } from '@ngrx/effects';
import { load, set, setError } from '../actions/technologies.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { TechnologiesService } from '../../services/techologies.service';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TechnologiesEffects {

    constructor(private actions$: Actions, private service: TechnologiesService) {
    }

    @Effect()
    loadTechnologies = createEffect(() => this.actions$.pipe(
        ofType(load.type),
        mergeMap(() => this.service.getTechnologies()
            .pipe(
                map(technologies => set({ technologies })),
                catchError(error => of(setError({ error })))
            ))

    ));

}

