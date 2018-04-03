import { Component, OnInit } from '@angular/core';
import { SingleService } from './../services/single.service';
import { Ininja } from './../ininja';
import { DataService } from '../data.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  ninja: Ininja;
  name: string = 'Robert';

  constructor(public singleService: SingleService) { }

  ngOnInit() {  
    this.showSingle(this.name);
  }

  showSingle(name):void {
    this.singleService.getSingle(name).subscribe((data) => {this.ninja = data});
  }

}
