import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { User } from '../user';

import { JwtHelperService } from '@auth0/angular-jwt';
const helper = new JwtHelperService();

@Injectable()
export class LoginService {  

  _loginurl = 'http://localhost:4000/user/login';

  constructor(private http: HttpClient, private _router: Router) { }

  loginUser(user: User) {
    return this.http.post<any>(this._loginurl, user);
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/ninjas']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return helper.isTokenExpired(token);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

}