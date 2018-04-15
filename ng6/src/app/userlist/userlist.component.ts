import { Component, OnInit } from '@angular/core';
import { UserlistService } from '../userlist.service';
import { LoginService } from './../services/login.service';
import { User } from '../user';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users: User[];

  constructor(public userlistService: UserlistService) { }

  ngOnInit() {
    this.getUserList()
  }

  getUserList():void {
    this.userlistService.showUsers().subscribe((data) => {this.users = data});
  }

}