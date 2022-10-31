import { Component } from '@angular/core';
import { CreateCardFormValues } from '../../models/custom-card.model';
import { Store } from '@ngrx/store';
import * as AppActions from '../../../redux/actions/app.actions';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {
  constructor(private store: Store) {}

  onCreate(values: CreateCardFormValues): void {
    this.store.dispatch(AppActions.createCustomCard({ customCard: values }));
  }
}
