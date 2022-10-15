import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { LoginFormValues } from '../../models/auth.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  onLogin({ username }: LoginFormValues) {
    this.loginService.loginUser(username);
    this.router.navigate([this.loginService.redirectUrl || 'main']);
  }
}
