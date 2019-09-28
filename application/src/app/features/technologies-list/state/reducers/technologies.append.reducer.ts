import { createReducer, on, Action } from '@ngrx/store';
import { TechnologyAppendState } from '../technologies.state';
import { append, appendError, appendSuccess } from '../actions/technologies.append.actions';

export const technologiesAppendInitialState: TechnologyAppendState = {
    entity: null,
    error: '',
    loading: false
};

const reducer = createReducer(technologiesAppendInitialState,
    on(append, (state, action) => ({ ...state, loading: true, entity: action.item })),
    on(appendError, (state, action) => ({ ...state, loading: false, error: action.error })),
    on(appendSuccess, state => ({ ...state, loading: false })));


export function technologiesAppendStateReducer(state = technologiesAppendInitialState, action: Action) {
    return reducer(state, action);
}
