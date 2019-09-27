import { TechnologyApiModel } from '../models/service.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface TechnologiesState {
    entities: TechnologyApiModel[];
    loading: boolean;
    error: string;
}

export const technologiesStateSelector = createFeatureSelector<TechnologiesState>('technologies-state');

export const technologiesEntitiesSelector = createSelector(technologiesStateSelector, state => state.entities);
