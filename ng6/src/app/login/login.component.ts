import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
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

  constructor(
        public _login: LoginService,
        private _router: Router,
        private _route: ActivatedRoute
       ) { }


  ngOnInit() {
    //queryParams from auth.guard, url before user logs in.
    //this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/'; // or subscribe to queryParams.
    this._route.queryParams.subscribe((params: ParamMap) => {
      this.returnUrl = params['returnUrl'];
    });
  }


  loginUser():void {
    this._login.loginUser(this.user)
    .subscribe(
      data => {
        localStorage.setItem('token', data.token);
        // from loginservice, return user to original url.
        this._router.navigateByUrl(this.returnUrl); 
      },
      err => console.log(err)
    )
  }

}
