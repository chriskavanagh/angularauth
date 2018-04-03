import { Ininja } from './../ininja';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.css']
})
export class SelectedComponent implements OnInit {
  ninja: Ininja;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentNinja.subscribe(data => this.ninja = data);
    console.log(`Subscribed Ninja ${this.ninja}`);
  }

}
