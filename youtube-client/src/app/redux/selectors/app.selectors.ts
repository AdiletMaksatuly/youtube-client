import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../state.models';

export const selectAppState = createFeatureSelector<AppState>('app');
export const selectCustomCards = createSelector(selectAppState, (state) => state.customCards);
