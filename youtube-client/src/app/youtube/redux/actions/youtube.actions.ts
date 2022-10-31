import { createAction, props } from '@ngrx/store';
import { Video } from '../../models/video.model';

export const changeLoadingStatus = createAction(
  '[Youtube] Change Loading Status',
  props<{ loadingStatus: boolean }>(),
);
export const fetchVideos = createAction('[Youtube] Fetch Videos');
export const fetchVideosSuccess = createAction(
  '[Youtube] Fetch Videos Success',
  props<{ videos: Video[] }>(),
);
export const fetchVideosFailed = createAction('[Youtube] Fetch Videos Failed');
