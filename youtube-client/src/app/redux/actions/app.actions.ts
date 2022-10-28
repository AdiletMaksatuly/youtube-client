import { createAction, props } from '@ngrx/store';
import { CustomCard } from '../state.models';

export const createCustomCard = createAction(
  '[App] Create custom card',
  props<{ customCard: CustomCard }>(),
);
export const createCustomCardSuccess = createAction(
  '[App] Create custom card Success',
  props<{ customCard: CustomCard }>(),
);
export const createCustomCardFailed = createAction('[App] Create custom card Failed');
