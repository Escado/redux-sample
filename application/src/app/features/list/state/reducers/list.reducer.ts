import { ListState } from '../list.state';
import { createReducer, on } from '@ngrx/store';
import { append, load, setError, clearNewest } from '../actions/list.actions';

export const listInitialState: ListState = {
    newestAdded: null,
    entities: [],
    loading: false,
    error: null
};

const listReducer = createReducer(listInitialState,
    on(load, state => ({
        ...state,
        loading: true
    })),
    on(setError, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),
    on(append, (state, { item }) => {
        const entities = state.entities;
        entities.push(item);
        return {
            ...state,
            newestAdded: item.name,
            entities: [...entities]
        };
    }),
    on(clearNewest, (state) => {
        return {
            ...state,
            newestAdded: ''
        };
    })
);

export function ListReducer(state, action) {
    return listReducer(state, action);
}
