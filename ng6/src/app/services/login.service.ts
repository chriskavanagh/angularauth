import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { JwtHelperService } from '@auth0/angular-jwt';
const helper = new JwtHelperService();

@Injectable()
export class LoginService {  

  _loginurl = 'http://localhost:4000/user/login';
  

  constructor(
      private _http: HttpClient,
      private _router: Router
    ) {}

  loginUser(user: User) {
    return this._http.post<any>(this._loginurl, user);
  }

  logoutUser():void {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  /* isAuthenticated(): boolean {
    const token = this.getToken();
    return !this.jwtHelper.isTokenExpired(token);
  } */

  loggedIn():boolean {
    return !!localStorage.getItem('token');
  }

}
