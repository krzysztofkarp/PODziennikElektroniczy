import { Component, OnInit, Input, Inject } from '@angular/core';
import { ChangePasswordParams } from './changePasswordParams';
import { User } from '../../user/user';
import { ChangePasswordService } from './change.password.service';
import { Response } from '../../general/backend/response';
import { NotificationService } from '../../notification/notification.service';
import { Consts } from '../../general/utils/Consts';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  params: ChangePasswordParams;


  @Input()
  user: User;

  constructor(private service: ChangePasswordService, private nService: NotificationService) { 
    this.params = new ChangePasswordParams();
  }

  ngOnInit() {

  }

  onChangePassword(){
    if(this.params.areValid()){
      this.changePassword();
    } else {
      this.nService.showWarning(Consts.Messages.PASSWORDS_NOT_EQUAL);
    }
   
  }

  private changePassword(){
    this.service.changePassword(this.user, this.params).subscribe(resp => {
      if(Response.isOk(resp)){
        this.nService.showSuccess(Consts.Messages.PASSWORD_CHANGED);
        this.params = new ChangePasswordParams();
      } else {
        this.nService.showError(Consts.Messages.PASSWORD_CHANGE_ERROR)
      }
    })
  }



}
