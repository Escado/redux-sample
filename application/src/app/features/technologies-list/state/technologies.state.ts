import { TechnologyApiModel } from '../models/service.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const TechnologiesStateName = 'technologies';

export interface TechnologyAppendState {
    entity: TechnologyApiModel;
    loading: boolean;
    error: string;
}

export interface TehcnologiesListState {
    entities: TechnologyApiModel[];
    loading: boolean;
    error: string;
}

export interface TechnologiesState {
    listState: TehcnologiesListState;
    appendState: TechnologyAppendState;
}

export const technologiesStateSelector = createFeatureSelector<TechnologiesState>(TechnologiesStateName);

export const technologiesAppendStateSelector = createSelector(technologiesStateSelector, state => state.appendState);

export const technologiesListStateSelector = createSelector(technologiesStateSelector, state => state.listState);

export const technologiesEntitiesSelector = createSelector(technologiesListStateSelector, state => state.entities);
