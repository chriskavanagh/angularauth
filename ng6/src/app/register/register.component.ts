import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emailCheck: string;
  emailMessage: string;

  registerUserData = {
    email: undefined,
    password: undefined
  };

  constructor(private router: Router, public registerService: RegisterService) { }

  ngOnInit() {
  }

  signUpUser():void {
    this.registerService.registerUser(this.registerUserData)
    .subscribe(
      data => console.log(data)
    );
    //this.router.navigate(['/ninjas']);
  }

  checkEmail():void {
    this.registerService.checkUserEmail(this.registerUserData)
    .subscribe(
      data => this.emailMessage = data.message
    );
  }

}
