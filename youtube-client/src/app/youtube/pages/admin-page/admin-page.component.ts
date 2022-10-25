import { Component } from '@angular/core';
import { CreateCardFormValues } from '../../../auth/models/auth.model';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {
  onCreate(values: CreateCardFormValues): void {
    console.log('submit', values);
  }
}
