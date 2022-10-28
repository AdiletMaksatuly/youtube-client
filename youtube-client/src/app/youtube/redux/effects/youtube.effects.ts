import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { YoutubeService } from '../../services/youtube.service';
import * as YoutubeActions from '../actions/youtube.actions';
import { SearchService } from '../../../core/services/search.service';

@Injectable()
export class YoutubeEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private youtubeService: YoutubeService,
    private searchService: SearchService,
  ) {}

  setLoadingStatusTrue$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(YoutubeActions.fetchVideos),
      map(() => YoutubeActions.changeLoadingStatus({ loadingStatus: true })),
    );
  });

  setLoadingStatusFalse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(YoutubeActions.fetchVideosSuccess, YoutubeActions.fetchVideosFailed),
      map(() => YoutubeActions.changeLoadingStatus({ loadingStatus: false })),
    );
  });

  fetchVideos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(YoutubeActions.fetchVideos),
      switchMap(() => this.searchService.getSearchQuery()),
      switchMap((searchQuery) =>
        this.youtubeService.getVideos(searchQuery).pipe(
          map((videos) => YoutubeActions.fetchVideosSuccess({ videos })),
          catchError(() => of(YoutubeActions.fetchVideosFailed())),
        ),
      ),
    );
  });
}
