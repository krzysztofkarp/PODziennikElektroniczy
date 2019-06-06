import { Router } from '@angular/router';
import { UserType } from './../../user/userType';
import { AccountService } from './account-service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../user/user';

@Component({
  selector: 'account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css']
})
export class AccountViewComponent implements OnInit {


  userType: UserType;
  currentUser;
  viewType;
  UserType = UserType;

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {
    this.currentUser = this.accountService.getCurrent();
    this.viewType = this.currentUser.type;
  }

  logout(){
    localStorage.removeItem("user");
    this.router.navigate(["/login"]);
  }




}
