import { Injectable } from '@angular/core';
import { Ininja } from './../ininja';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class NinjasService {

  constructor(public http: HttpClient) { }

  getNinjas(): Observable<Ininja[]> {
    return this.http.get<Ininja[]>(`http://localhost:4000/api`);

  }
}
