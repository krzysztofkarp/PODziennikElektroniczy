import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDatepickerInputEvent } from '@angular/material';
import { Consts } from '../../../../general/utils/Consts';
import { User } from '../../../../user/user';
import { UserType } from '../../../../user/userType';
import { StudentClass } from '../../../../studentClass/studentClass';
import { NotificationService } from '../../../../notification/notification.service';
import { Validators } from '@angular/forms';
import { DateParser } from '../../../../general/utils/dateParser';

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
  field2Valid: object = {};


  constructor(private dialogRef: MatDialogRef<AddUserPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private nService: NotificationService, private parser: DateParser) {
    this.user = new User();
    Object.keys(this.user).forEach(k => this.field2Valid[k] = true);
   }

  ngOnInit() {
    
  }

  onAdd(){
    this.validateFields(() => this.dialogRef.close(this.user));
  }

  onCancel(){
    this.dialogRef.close();
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.user.birthdate = event.value;
  }

  canAdd(){
    return this.user.type && this.user.firstName && this.user.secondName && this.user.login && this.user.password && this.user.email && this.user.birthdate && this.checkField();
  }

  getLabelForType(type: UserType){
    switch(type){
      case UserType.STUDENT: return "Uczeń";
      case UserType.TEACHER: return "Nauczyciel";
      case UserType.PARENT: return "Rodzic";
    }
  }

  checkField(){
    switch(this.user.type){
      case UserType.STUDENT: return this.user.properties['studentClass'] && this.user.properties['studentClass'] != null;
      case UserType.TEACHER: return this.user.properties['teacherSubjects'] && this.user.properties['teacherSubjects'].length > 0;
      case UserType.PARENT: return this.user.properties['children'] && this.user.properties['children'].length > 0;
    }
  }

  validateFields(afterValidation: () => void){
    let dateValid = true;
    this.test(Consts.Regex.EMAIL_REGEX, "email");
    this.test(Consts.Regex.ONLY_LETTERS, "login");
    this.test(Consts.Regex.FIRST_NAME, "firstName");
    this.test(Consts.Regex.FIRST_NAME, "secondName");


    dateValid = this.validateDate();

    if(Object.values(this.field2Valid).includes(false)){
      this.nService.showWarning(Consts.Messages.FIELDS_NOT_VALID);
    }else if(!dateValid){
      this.nService.showWarning(Consts.Messages.AGE_ERROR);
    } else {
      afterValidation();
    }
  }

  test(regex: RegExp, field: string){
    this.field2Valid[field] = regex.test(this.user[field]) ? true : false;
  }

  validateDate(){
    if(this.user.type == UserType.STUDENT)
      return this.parser.calculateAge(this.user.birthdate) > 15;
    else
      return this.parser.calculateAge(this.user.birthdate) > 25;
  }


}
