import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Consts } from '../../../../general/utils/Consts';
import { User } from '../../../../user/user';
import { UserType } from '../../../../user/userType';

@Component({
  selector: 'add-user-popup',
  templateUrl: './add-user-popup.component.html',
  styleUrls: ['./add-user-popup.component.css']
})
export class AddUserPopupComponent implements OnInit {

  title: string = Consts.Messages.NEW_USER;
  user: User;
  types = [UserType.STUDENT, UserType.PARENT, UserType.TEACHER];

  constructor(private dialogRef: MatDialogRef<AddUserPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.user = new User();
   }

  ngOnInit() {

  }

  onAdd(){
    this.dialogRef.close(this.user);
  }

  onCancel(){
    this.dialogRef.close();
  }

}
