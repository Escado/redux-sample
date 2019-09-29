import { TechnologiesState } from '../technologies.state';
import { ActionReducer, combineReducers, Action } from '@ngrx/store';
import { technologiesAppendStateReducer } from './technologies.append.reducer';
import { technologiesListReducer } from './technologies.list.reducer';

const reducer: ActionReducer<TechnologiesState> = combineReducers({
    appendState: technologiesAppendStateReducer,
    listState: technologiesListReducer
});

export function technologiesReducer(state: TechnologiesState, action: Action) {
    return reducer(state, action);
}
