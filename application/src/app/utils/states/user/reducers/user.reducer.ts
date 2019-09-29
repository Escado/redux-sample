import { UserState } from '../user.state';
import { createReducer, on, Action } from '@ngrx/store';
import { login, logout } from '../actions/user.actions';

export const userInitialState: UserState = {
    username: ''
};

const reducer = createReducer(userInitialState,
    on(login, (state, action) => ({
        ...state,
        username: action.username
    })),
    on(logout, state => ({
        ...state,
        username: ''
    }))
);

export function userStateReducer(state: UserState, action: Action) {
    return reducer(state, action);
}

