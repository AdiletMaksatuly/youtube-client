import { createFeatureSelector, createSelector } from '@ngrx/store';
import { YoutubeState } from '../state.models';

export const selectYoutubeState = createFeatureSelector<YoutubeState>('youtube');
export const selectVideos = createSelector(selectYoutubeState, (state) => state.videos);
export const selectLoadingStatus = createSelector(
  selectYoutubeState,
  (state) => state.loadingStatus,
);
