import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';

@Injectable()
export class UserlistService {

  _url: string = 'http://localhost:4000/user';

  constructor(public http: HttpClient) { }

  showUsers(): Observable<User[]> {
    return this.http.get<User[]>(this._url);
  }

}
