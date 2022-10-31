import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of } from 'rxjs';
import { Injectable } from '@angular/core';
import * as AppActions from '../../redux/actions/app.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}

  createCustomCard$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppActions.createCustomCard),
      map((customCard) => AppActions.createCustomCardSuccess(customCard)),
      catchError(() => of(AppActions.createCustomCardFailed())),
    );
  });
}
