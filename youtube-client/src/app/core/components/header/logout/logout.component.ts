import { Component } from '@angular/core';
import { LoginService } from '../../../../auth/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent {
  constructor(private router: Router, private loginService: LoginService) {}

  logout(): void {
    this.loginService.logoutUser();
    this.router.navigate(['login']);
  }
}
