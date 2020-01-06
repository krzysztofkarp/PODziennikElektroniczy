import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StudentService } from '../../../../students/student.service';
import { Student } from '../../../../students/student';
import { User } from '../../../../user/user';
import { NotificationService } from '../../../../notification/notification.service';
import { Consts } from '../../../../general/utils/Consts';
import { Response } from '../../../../general/backend/response';
import { StudentClass } from '../../../../studentClass/studentClass';

@Component({
  selector: 'user-management-student-view',
  templateUrl: './user-management-student-view.component.html',
  styleUrls: ['./user-management-student-view.component.css']
})
export class UserManagementStudentViewComponent implements OnInit {


  @Input()
  students: Student[];

  @Input()
  classes: StudentClass[];

  @Output()
  userDeleted: EventEmitter<any> = new EventEmitter<any>();

  constructor(private sService: StudentService, private nService: NotificationService) { }

  ngOnInit() {

  }


  studentDeleted(user: User){
    this.sService.remove(user.id).subscribe(resp => {
      if(Response.isOk(resp)){
        this.nService.showSuccess(Consts.Messages.STUDENT_DELETED);
        this.userDeleted.emit(user.id);
      } else {
        this.nService.showError(Consts.Messages.USER_REMOVE_ERROR);
      }
    })
  }

  studentSaved(user: User){
    this.sService.update(user).subscribe(resp => {
      if(Response.isOk(resp)){
        this.nService.showSuccess(Consts.Messages.USER_SAVED)
      } else {
        this.nService.showError(Consts.Messages.USER_SAVE_ERROR)
      }
    })
  }

}
