import { Injectable } from '@angular/core';
import { Ininja } from './../ininja';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class SingleService {
  ninja: string;

  constructor(public httpClient: HttpClient) { }

  getSingle(name: string):Observable<Ininja> {
    this.ninja = name;
    return this.httpClient.get<Ininja>(`http://localhost:4000/api/ninja/${this.ninja}`);
  }

}
