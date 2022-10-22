import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { LoginService } from '../services/login.service';
import { AuthRoutePaths } from '../models/routes.model';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const fullURL = route.url.map((segment) => segment.path).join('/');

    console.log(route);
    return this.checkLogin(fullURL);
  }

  constructor(private loginService: LoginService, private router: Router) {}

  checkLogin(url: string): true | UrlTree {
    if (this.loginService.isLoggedIn()) {
      return true;
    }

    this.loginService.redirectUrl = url;

    return this.router.parseUrl(AuthRoutePaths.LOGIN);
  }
}
