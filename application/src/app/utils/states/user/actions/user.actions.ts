import { createAction, props } from '@ngrx/store';

export enum userActionTypes {
    LOGIN = '[User] LOGIN',
    LOGIN_SUCCESS = '[User] LOGIN_SUCCESS',
    LOGOUT = '[User] LOGOUT'
}

export const login = createAction(userActionTypes.LOGIN, props<{username: string}>());
export const loginSuccess = createAction(userActionTypes.LOGIN_SUCCESS, props<{ username: string}>());
export const logout = createAction(userActionTypes.LOGOUT);
