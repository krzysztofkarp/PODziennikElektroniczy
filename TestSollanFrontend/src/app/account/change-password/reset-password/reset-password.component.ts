import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ChangePasswordService } from '../change.password.service';
import { NotificationService } from '../../../notification/notification.service';
import { Consts } from '../../../general/utils/Consts';
import { User } from '../../../user/user';
import { Response } from '../../../general/backend/response';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  newPassword: string;
  repeatPassword: string;
  block: boolean;

  constructor(private dialogRef: MatDialogRef<ResetPasswordComponent>, @Inject(MAT_DIALOG_DATA)public data: User, private service:ChangePasswordService, private nService: NotificationService) { }

  ngOnInit() {
  }

  onChange(){
    if(this.check()){
      this.block = true;
      this.service.resetPassword(this.data, this.newPassword).subscribe(resp => {
        if(Response.isOk(resp)){
          this.nService.showSuccess(Consts.Messages.PASSWORD_CHANGED);
          this.block = false;
          this.dialogRef.close()
        } else {
          this.nService.showError(Consts.Messages.PASSWORD_CHANGE_ERROR);
          this.block = false;
          this.dialogRef.close()
        }
      })
    } else {
      this.nService.showWarning(Consts.Messages.PASSWORDS_NOT_EQUAL)
    }
  }

  onClose(){
    this.dialogRef.close()
  }

  check(){
    return this.newPassword === this.repeatPassword;
  }

}
