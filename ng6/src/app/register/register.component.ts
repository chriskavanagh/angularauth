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

  emailMessage: string;
  available: boolean;

  /* model = {
    email: undefined,
    password: undefined
  }; */

  user: User = {
    email: undefined,
    password: undefined
  }

  constructor(private router: Router, private registerService: RegisterService) { }

  ngOnInit() {
  }

  signUpUser():void {
    this.registerService.registerUser(this.user)
    .subscribe(
      data => console.log(data)
    );
    //this.router.navigate(['/ninjas']);
  }

  checkEmail():void {
    this.registerService.checkUserEmail(this.user)
    .subscribe(
      data => {
        this.emailMessage = data.message
        this.available = data.available      
      }
    );
  }

}
