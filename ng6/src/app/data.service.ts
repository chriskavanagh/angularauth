import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Ininja } from './ininja';

@Injectable()
export class DataService {

  default: Ininja = {
        name:'Chris',
        rank:'Black Belt',
        available:'available',
        date: new Date
      };  

  ninjaSource = new BehaviorSubject<Ininja>(this.default); // takes default val.
  currentNinja = this.ninjaSource.asObservable(); //subscribe to this in component.

  constructor() { }

  changeNinja(ninja:Ininja):void {
        this.ninjaSource.next(ninja);
  }

}
