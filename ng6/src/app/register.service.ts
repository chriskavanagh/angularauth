import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class RegisterService {

_registerurl: string = 'http://localhost:4000/user/register';
_emailurl: string = 'http://localhost:4000/user/email-check';


constructor(public http: HttpClient) { }


registerUser(user: User): Observable<User> {
  return this.http.post<User>(this._registerurl, user)    
}

checkUserEmail(user: User): Observable<any> {
  return this.http.post<User>(this. _emailurl, user)
}

}
