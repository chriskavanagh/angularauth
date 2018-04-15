import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { LoginService } from './../services/login.service';
import { DataService } from './../data.service';
import { Ininja } from './../ininja';
//import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-ninjandetails',
  templateUrl: './ninjandetails.component.html',
  styleUrls: ['./ninjandetails.component.css']
})
export class NinjandetailsComponent implements OnInit {
    ninja: Ininja;
    ninjaName: string;
    

  constructor(
        private route: ActivatedRoute,
        public dataService: DataService,
        private router: Router
      ) { }

  ngOnInit() {
      this.dataService.currentNinja.subscribe(
        (data) => {this.ninja = data}
      );
      //let name = this.route.snapshot.paramMap.get('name');
      //this.ninjaName = name;
      this.route.paramMap.subscribe(
        (params: ParamMap) => {
        let name = params.get('name');
        console.log(`I am the params ${name}`);
        this.ninjaName = name;
      });
  }

  goToNinjas():void {    
      this.router.navigate(['/ninjas']);
      // or 'this.location.back();'
    }

}
