import { Component, OnInit } from '@angular/core';
import  *  as $ from 'jquery';
import {NgsRevealModule} from 'ng-scrollreveal';

@Component({
  selector: 'app-techscroll',
  templateUrl: './techscroll.component.html',
  styleUrls: ['./techscroll.component.css']
})
export class TechscrollComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
      $(document).ready(function(){
        $("p.footer").click(function(){
          alert("Hello world!");
        });
      });
      
  }

}
