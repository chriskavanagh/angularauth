import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emailMessage: string;
  available: boolean;

  model = {
    email: undefined,
    password: undefined
  };

  constructor(private router: Router, private registerService: RegisterService) { }

  ngOnInit() {
  }

  signUpUser():void {
    this.registerService.registerUser(this.model)
    .subscribe(
      data => console.log(data)
    );
    //this.router.navigate(['/ninjas']);
  }

  checkEmail():void {
    this.registerService.checkUserEmail(this.model)
    .subscribe(
      data => {
        this.emailMessage = data.message
        this.available = data.available      
      }
    );
  }

}
