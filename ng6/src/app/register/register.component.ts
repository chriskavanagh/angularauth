import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './../register.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // messgae from server, email available, not available
  emailMessage: string;
  // boolean from server if available or not
  available: boolean;

  // user class (../user.ts)
  user: User = {
    email: undefined,
    password: undefined
  }

  constructor(
    private router: Router,
    private registerService: RegisterService
  ) { }

  ngOnInit() {
  }

  // register user using service
  signUpUser():void {
    this.registerService.registerUser(this.user)
    .subscribe(
      data => {
        console.log(data)
      }
    );
    //this.router.navigate(['/ninjas']);
  }

  // check if email is available during registration
  checkEmail(event):void {
    console.log(event)
    this.registerService.checkUserEmail(this.user)
    .subscribe(
      data => {
        this.emailMessage = data.message
        this.available = data.available      
      }
    );
  }

}
