import { TechnologiesState } from '../technologies.state';
import { createReducer, on } from '@ngrx/store';
import { load } from 'src/app/features/list/state/actions/list.actions';
import { setError, set } from '../actions/technologies.actions';

export const technologiesInitialState: TechnologiesState = {
    entities: null,
    error: '',
    loading: false
};

export const technologiesReducer = createReducer(technologiesInitialState,
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
            entities: [...action.technologies]
        };
    })
);
