import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { NinjasService } from './../services/ninjas.service';
import { LoginService } from './../services/login.service';
import { Router } from '@angular/router';
import { Ininja } from './../ininja';


@Component({
  selector: 'app-ninja',
  templateUrl: './ninja.component.html',
  styleUrls: ['./ninja.component.css']
})
export class NinjaComponent implements OnInit {
  ninjas: Ininja[];
  selectedNinja: Ininja;
  

  constructor(
        public ninjasservice: NinjasService,
        public _login: LoginService,
        public dataService: DataService,
        private router: Router
      ) { }

  ngOnInit() {
    this.showNinjas()
  }

  showNinjas(): void {
    this.ninjasservice.getNinjas().subscribe(
      (data) => {this.ninjas = data}
    );
  }

  onSelect(ninja){
    this.selectedNinja = ninja;
    this.dataService.changeNinja(this.selectedNinja);
    this.router.navigate(['/ninja-detail', this.selectedNinja.name]);
  }

}
