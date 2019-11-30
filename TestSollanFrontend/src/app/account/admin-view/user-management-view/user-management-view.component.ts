import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatTabChangeEvent } from '@angular/material';
import { AddUserPopupComponent } from './add-user-popup/add-user-popup.component';
import { StudentService } from '../../../students/student.service';
import { User } from '../../../user/user';
import { Student } from '../../../students/student';
import { UserType } from '../../../user/userType';
import { UserService } from '../../../user/user.service';
import { BackendMappings } from '../../../general/utils/backendMappings';
import { NotificationService } from '../../../notification/notification.service';
import { Consts } from '../../../general/utils/Consts';
import { Response } from '../../../general/backend/response';
import { UserManagementStudentViewComponent } from './user-management-student-view/user-management-student-view.component';
import { UserManagementTeacherViewComponent } from './user-management-teacher-view/user-management-teacher-view.component';
import { UserManagementParentViewComponent } from './user-management-parent-view/user-management-parent-view.component';

@Component({
  selector: 'user-management-view',
  templateUrl: './user-management-view.component.html',
  styleUrls: ['./user-management-view.component.css']
})
export class UserManagementViewComponent implements OnInit {

  type2Uri: any;
  tabIndex: number = 0;


  @ViewChild(UserManagementStudentViewComponent)
  students: UserManagementStudentViewComponent;

  @ViewChild(UserManagementTeacherViewComponent)
  teachers: UserManagementTeacherViewComponent;

  @ViewChild(UserManagementParentViewComponent)
  parents: UserManagementParentViewComponent;

  constructor(private dialog: MatDialog,
    private userService: UserService,
    private nService: NotificationService) { }

  ngOnInit() {
    this.initMap();
  }

  onAddUser(){
    let config = new MatDialogConfig();
    config.width = "600px";
    this.dialog.open(AddUserPopupComponent, config).afterClosed().subscribe(user => this.saveUser(user));
  }

  saveUser(user: User){
    if(user){
      this.userService.saveUser(user, this.type2Uri[user.type]).subscribe(resp =>{
        if(Response.isOk(resp)){
          this.refreshUsers(user);
          this.nService.showSuccess(Consts.Messages.USER_SAVED);
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

  tabChange(evt: MatTabChangeEvent){
      this.tabIndex = evt.index;
  }

  refreshUsers(user: User){
      switch(user.type){
        case UserType.STUDENT : this.students.students.push(user); break;
        case UserType.PARENT : this.parents.parents.push(user); break;
        case UserType.TEACHER : this.teachers.teachers.push(user); break;
      }
  }

}
