import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddUserPopupComponent } from './add-user-popup/add-user-popup.component';
import { StudentService } from '../../../students/student.service';
import { User } from '../../../user/user';
import { Student } from '../../../students/student';
import { UserType } from '../../../user/userType';
import { UserService } from '../../../user/user.service';
import { BackendMappings } from '../../../general/utils/backendMappings';
import { NotificationService } from '../../../notification/notification.service';
import { Consts } from '../../../general/utils/Consts';

@Component({
  selector: 'user-management-view',
  templateUrl: './user-management-view.component.html',
  styleUrls: ['./user-management-view.component.css']
})
export class UserManagementViewComponent implements OnInit {

  students: Student[];
  type2Uri: any;

  constructor(private dialog: MatDialog,
    private userService: UserService,
    private nService: NotificationService) { }

  ngOnInit() {
    this.initMap();
  }

  onAddUser(){
    let config = new MatDialogConfig();
    config.width = "600px";
    this.dialog.open(AddUserPopupComponent).afterClosed().subscribe(user => this.saveUser(user));
  }

  saveUser(user: User){
    if(user){
      this.userService.saveUser(user, this.type2Uri[user.type]).subscribe(resp =>{
        if(resp.ok){
          this.nService.showError(Consts.Messages.USER_SAVED)
        } else {
          this.nService.showError(Consts.Messages.USER_SAVE_ERROR);
        }
      });
    }
  }

  initMap(){
    this.type2Uri = {};
    this.type2Uri[UserType.STUDENT] = BackendMappings.Student.SAVE_OR_UPDATE;
    this.type2Uri[UserType.TEACHER] = BackendMappings.Teacher.SAVE_OR_UPDATE;
    this.type2Uri[UserType.PARENT] = BackendMappings.Parent.SAVE_OR_UPDATE;
  }

}
