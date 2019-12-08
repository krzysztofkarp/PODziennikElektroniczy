import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDatepickerInputEvent } from '@angular/material';
import { Consts } from '../../../../general/utils/Consts';
import { User } from '../../../../user/user';
import { UserType } from '../../../../user/userType';
import { StudentClass } from '../../../../studentClass/studentClass';

@Component({
  selector: 'add-user-popup',
  templateUrl: './add-user-popup.component.html',
  styleUrls: ['./add-user-popup.component.css']
})
export class AddUserPopupComponent implements OnInit {

  title: string = Consts.Messages.NEW_USER;
  user: User;
  UserType = UserType;
  types = [UserType.STUDENT, UserType.PARENT, UserType.TEACHER];


  constructor(private dialogRef: MatDialogRef<AddUserPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.user = new User();
   }

  ngOnInit() {
    
  }

  onAdd(){
    console.log(this.user.properties)
    this.dialogRef.close(this.user);
  }

  onCancel(){
    this.dialogRef.close();
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.user.birthdate = event.value;
  }

  canAdd(){
    return this.user.type && this.user.firstName && this.user.secondName && this.user.login && this.user.password && this.user.email && this.user.birthdate;
  }

}
