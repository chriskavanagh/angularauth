import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  
  available: boolean = false;
  emailCheck: string;

  registerUserData = {
    email: undefined,
    password: undefined
  };

  constructor(private router: Router, public registerService: RegisterService) { }

  ngOnInit() {
    this.checkEmail();
  }

  signUpUser():void {
    this.registerService.registerUser(this.registerUserData)
    .subscribe(
      data => console.log(data)
    );
    //this.router.navigate(['/ninjas']);
  }

  checkEmail() {
    if (this.available) {
      this.emailCheck = "Email Available";
    } else {
      this.emailCheck = "Email Not Available";
    }
  }

}
