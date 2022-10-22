import { Component } from '@angular/core';
import { LoginService } from '../../../auth/services/login.service';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
})
export class NotFoundPageComponent {
  constructor(private loginService: LoginService) {}

  redirect(): void {
    this.loginService.redirectFromNotFoundPage();
  }
}
