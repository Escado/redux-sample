import { createAction, props } from '@ngrx/store';
import { TechnologyApiModel } from '../../models/service.model';

export enum TechnologiesAppendActions {
    APPEND = '[Technologies.Append] APPEND',
    APPEND_ERROR = '[Technologies.Append] APPEND_ERROR',
    APPEND_SUCCESS = '[Technologies.Append] APPEND_SUCCESS',
    REMOVE = '[Technologies.Remove] REMOVE'
}


export const append = createAction(TechnologiesAppendActions.APPEND, props<{ item: TechnologyApiModel }>());
export const appendError = createAction(TechnologiesAppendActions.APPEND_ERROR, props<{ error: string }>());
export const appendSuccess = createAction(TechnologiesAppendActions.APPEND_SUCCESS, props<{ item: TechnologyApiModel }>());
export const remove = createAction(TechnologiesAppendActions.REMOVE, props<{ item: TechnologyApiModel}>());
