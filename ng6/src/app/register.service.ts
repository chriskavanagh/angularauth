import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user';

@Injectable()
export class RegisterService {

  _url: string = 'http://localhost:4000/user/register';
  _emailurl: string = 'http://localhost:4000/user/email-check';


  constructor(public http: HttpClient) { }


  registerUser(user: User): Observable<User> {
    return this.http.post<User>(this._url, user)    
  }

  checkUserEmail(user: User): Observable<any> {
    return this.http.post<User>(this. _emailurl, user)
  }

  /* private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
     // this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  } */

}
