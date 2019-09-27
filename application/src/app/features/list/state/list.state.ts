import { ListModel } from '../models/list.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';


export interface ListState {
    entities: ListModel[];
    newestAdded: string;
    loading: boolean;
    error: string;
}

export const selectListState = createFeatureSelector<ListState>('list-state');

export const listEntitesSelector = createSelector(selectListState, listState => listState.entities);
