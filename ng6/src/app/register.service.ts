import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class RegisterService {

  _url: string = 'http://localhost:4000/user/register';

  constructor(public http: HttpClient) { }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(this._url, user);
  }

}
