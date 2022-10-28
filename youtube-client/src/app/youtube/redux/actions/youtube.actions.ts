import { createAction, props } from '@ngrx/store';
import { Video } from '../../models/video.model';

export const changeLoadingStatus = createAction(
  '[Youtube] Set Loading Status',
  props<{ loadingStatus: boolean }>(),
);
export const fetchVideos = createAction('[Youtube] Fetch');
export const fetchVideosSuccess = createAction(
  '[Youtube] Fetch Success',
  props<{ videos: Video[] }>(),
);
export const fetchVideosFailed = createAction('[Youtube] Fetch Failed');
