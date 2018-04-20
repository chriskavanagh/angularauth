import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';
//import { tokenGetter } from './../app.module';
//const helper = new JwtHelperService();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl: string;

  user: User = {
    email: undefined,
    password: undefined,
    token: undefined
  }

  constructor(public _login: LoginService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
    console.log(this.returnUrl)
  }

  loginUser():void {
    this._login.loginUser(this.user)
    .subscribe(
      data => {
        localStorage.setItem('token', data.token)
        this._router.navigateByUrl(this.returnUrl)
      },
      err => console.log(err)
    )
  }

}
