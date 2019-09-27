import { createAction, props } from '@ngrx/store';
import { ListModel } from '../../models/list.model';

export const append = createAction('[App.List] Append', props<{item: ListModel}>());
export const load = createAction('[App.List] Load');
export const setError = createAction('[App.List] SetError', props<{error: string}>());
export const clearNewest = createAction('[App.List] ClearNewest');
