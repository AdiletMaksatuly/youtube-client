import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { LoginFormValues } from '../../models/auth.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  constructor(private loginService: LoginService) {}

  onLogin({ email }: LoginFormValues): void {
    this.loginService.loginUser(email);
  }
}
