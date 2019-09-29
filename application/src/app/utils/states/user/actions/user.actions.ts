import { createAction, props } from '@ngrx/store';

export enum userActionTypes {
    LOGIN = '[User] LOGIN',
    LOGOUT = '[User] LOGOUT'
}

export const login = createAction(userActionTypes.LOGIN, props<{username: string}>());
export const logout = createAction(userActionTypes.LOGOUT);
