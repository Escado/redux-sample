import { createAction, props } from '@ngrx/store';
import { TechnologyApiModel } from '../../models/service.model';

export enum TechnologiesActionTypes {
    LOAD = '[Technologies] LOAD',
    SET_ERROR = '[Technologies] SET_ERROR',
    SET = '[Technologies] SET'
}

export const load = createAction(TechnologiesActionTypes.LOAD);
export const setError = createAction(TechnologiesActionTypes.SET_ERROR, props<{error: string}>());
export const set = createAction(TechnologiesActionTypes.SET, props<{technologies: TechnologyApiModel[]}>());
