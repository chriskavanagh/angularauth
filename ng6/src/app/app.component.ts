import { LoginService } from './services/login.service';
import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  // loginservice.loggedIn() used in template to show 'Login' or 'Logout' button.
  constructor(public loginService: LoginService) { }

  ngOnInit(){ }

  
    
  }
  
