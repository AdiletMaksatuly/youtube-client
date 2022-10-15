import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanLoad {
  canLoad(
    route: Route,
    segments: UrlSegment[],
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const fullURL = segments.map((segment) => segment.path).join('/');

    return this.checkLogin(fullURL);
  }

  constructor(private loginService: LoginService, private router: Router) {}

  checkLogin(url: string): true | UrlTree {
    if (this.loginService.isLoggedIn()) {
      return true;
    }

    this.loginService.redirectUrl = url;

    return this.router.parseUrl('/login');
  }
}
