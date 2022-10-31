import { createReducer, on } from '@ngrx/store';
import { AppState } from '../state.models';
import * as AppActions from '../actions/app.actions';

export const initialState: AppState = {
  customCards: [],
};

export const appReducer = createReducer(
  initialState,
  on(
    AppActions.createCustomCardSuccess,
    (state, { customCard }): AppState => ({
      ...state,
      customCards: [...state.customCards, customCard],
    }),
  ),
);
