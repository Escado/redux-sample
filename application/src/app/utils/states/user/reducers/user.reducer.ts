import { UserState } from '../user.state';
import { createReducer, on, Action } from '@ngrx/store';
import { login, logout, loginError, loginSuccess } from '../actions/user.actions';

export const userInitialState: UserState = {
    username: '',
    error: '',
    loading: false
};

const reducer = createReducer(userInitialState,
    on(login, (state) => ({
            ...state,
            loading: true
        })),
    on(logout, _ => ({
        ...userInitialState
    })),
    on(loginSuccess, (state, action) => ({
        ...state,
        loading: false,
        username: action.username
    })),
    on(loginError, (state, action) => ({
        ...state,
        error: action.error,
        loading: false
    }))
);

export function userStateReducer(state: UserState, action: Action) {
    return reducer(state, action);
}

