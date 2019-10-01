import { TehcnologiesListState } from '../technologies.state';
import { createReducer, on, Action } from '@ngrx/store';
import { setError, set, load } from '../actions/technologies.actions';
import { appendSuccess, remove } from '../actions/technologies.append.actions';

export const technologiesListInitialState: TehcnologiesListState = {
    entities: [],
    error: '',
    loading: false
};

const reducer = createReducer(technologiesListInitialState,
    on(appendSuccess, (state, action) => {
        return {
            ...state,
            entities: [
                action.item,
                ...state.entities,
            ]
        };
    }),
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
    }),
    on(remove, (state, action) => {
        const id = state.entities.indexOf(action.item);
        state.entities.splice(id, 1);

        return {
            ...state,
            entities: [...state.entities]
        };
    })
);

export function technologiesListReducer(state = technologiesListInitialState, action: Action) {
    return reducer(state, action);
}
