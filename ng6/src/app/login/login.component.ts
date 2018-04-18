import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    email: undefined,
    password: undefined,
    token: undefined
  }

  constructor(public _login: LoginService, private _router: Router) { }

  ngOnInit() {
    //this._login.logoutUser();
  }

  loginUser():void {
    this._login.loginUser(this.user)
    .subscribe(
      data => {
        localStorage.setItem('token', data.token)
        this._router.navigate(['/ninjas'])
      },
      err => console.log(err)
    )
  }

}
