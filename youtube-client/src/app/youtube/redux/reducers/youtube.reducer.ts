import { createReducer, on } from '@ngrx/store';
import { YoutubeState } from '../state.models';
import * as YoutubeActions from '../actions/youtube.actions';

export const initialState: YoutubeState = {
  videos: [],
  loadingStatus: false,
};

export const youtubeReducer = createReducer(
  initialState,
  on(
    YoutubeActions.changeLoadingStatus,
    (state, { loadingStatus }): YoutubeState => ({
      ...state,
      loadingStatus,
    }),
  ),
  on(
    YoutubeActions.fetchVideosSuccess,
    (state, { videos }): YoutubeState => ({
      ...state,
      videos,
    }),
  ),
);
