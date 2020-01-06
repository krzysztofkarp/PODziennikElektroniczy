import { Router, ActivatedRoute } from '@angular/router';
import { UserType } from './../../user/userType';
import { AccountService } from './account-service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../user/user';
import { AuthService } from '../../home/auth.service';
import { Consts } from '../../general/utils/Consts';
import { Response } from '../../general/backend/response';
import { BackendMappings } from '../../general/utils/backendMappings';
import { UserService } from '../../user/user.service';
import { RequestParams } from '../../general/utils/requestParams';

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
  dateString;
  type2Uri: object = {};

  constructor(private accountService: AccountService, private router: Router, private authService: AuthService, private route: ActivatedRoute, private userService: UserService) {
    this.initMap();
   }

  ngOnInit() {
    this.load();

    setInterval(() => {
      this.dateString = new Date().toLocaleTimeString();
   }, 1000);
  }

  logout(){
    this.authService.logout().subscribe(resp =>{
      if(Response.isOk(resp)){
        localStorage.removeItem(Consts.StorageKey.AUTH_TOKEN)
        this.router.navigate(["/login"]);
      }
    })
  }

  load(){
    this.currentUser = this.accountService.getCurrent();

    if(!this.currentUser){
      this.route.params.subscribe(params => {
        this.userService.byId(this.type2Uri[params[RequestParams.TYPE]], params[RequestParams.ID]).subscribe(resp => {
          this.currentUser = resp.item;
          this.viewType = this.currentUser.type;
        })
      })
    } else {
      this.viewType = this.currentUser.type;
    }
   


   
  }

  initMap(){
    this.type2Uri[UserType.STUDENT] = BackendMappings.Student.BY_ID;
    this.type2Uri[UserType.TEACHER] = BackendMappings.Teacher.BY_ID;
    this.type2Uri[UserType.PARENT] = BackendMappings.Parent.BY_ID;
  }


}
