import { TechnologyApiModel } from '../models/service.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface TechnologiesState {
    entities: TechnologyApiModel[];
    loading: boolean;
    error: string;
}

export const technologiesStateSelector = createFeatureSelector<TechnologiesState>('technologies-list');

export const technologiesEntitiesSelector = createSelector(
    technologiesStateSelector,
    (state: TechnologiesState) => state.entities
);
