import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../user/user';
import { Subject } from '../../../../students/subject';
import { StudentClass } from '../../../../studentClass/studentClass';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ChangePasswordComponent } from '../../../change-password/change-password.component';
import { Util } from '../../../../general/utils/util';
import { ResetPasswordComponent } from '../../../change-password/reset-password/reset-password.component';

@Component({
  selector: 'user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.css']
})
export class UserRowComponent implements OnInit {
  

  @Input()
  user: User;

  @Input()
  classes: StudentClass[];

  @Input()
  class: StudentClass;

  @Input()
  subjects: Subject[];

  headerLabel: string;

  @Output()
  saveUser: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  deleteUser: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  classChange: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  deleteLabel: string;

  @Input()
  noDelete: boolean = false;

  @Input()
  passwordChange: boolean = false;

  originalUser: User;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    
  }

  ngOnChanges(){
    if(this.user){
      this.headerLabel = [this.user.firstName, this.user.secondName].join(" ");
      this.originalUser = Util.clone(this.user);
    }   
  }

  onSave(){
    this.saveUser.emit(this.user);
  }

  onDelete(){
    this.deleteUser.emit(this.user);
  }

  classChanged($event){
    this.classChange.emit($event)
  }

  onPasswordChange(){
    let conf = new MatDialogConfig();
    conf.data = this.user;
    this.dialog.open(ResetPasswordComponent, conf);
  }

}
