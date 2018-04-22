import { LoginService } from './services/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _loginservice: LoginService, private _router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this._loginservice.loggedIn()){
        return true;
      } else {
        // add queryParams, passed to LoginComponent user navigated back to original url.
        this._router.navigate(['/login'],{ queryParams: { returnUrl: state.url }});
        return false;
      }
  }

  
}
