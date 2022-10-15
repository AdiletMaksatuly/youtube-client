import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  onLogin({ username }: { username: string; password: string }) {
    this.loginService.loginUser(username);
    this.router.navigate(['main']);
  }
}
