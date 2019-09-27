import { TechnologiesState } from '../technologies.state';
import { createReducer, on, Action } from '@ngrx/store';
import { setError, set, load } from '../actions/technologies.actions';

export const technologiesInitialState: TechnologiesState = {
    entities: [],
    error: '',
    loading: false
};

const reducer = createReducer(technologiesInitialState,
    on(load, state => {
        return {
            ...state,
            loading: true
        };
    }),
    on(setError, (state, action) => {
        return {
            ...state,
            error: action.error,
            loading: false
        };
    }),
    on(set, (state, action) => {
        return {
            ...state,
            entities: [...action.technologies],
            loading: false
        };
    })
);

export function technologiesReducer(state = technologiesInitialState, action: Action) {
    return reducer(state, action);
}
