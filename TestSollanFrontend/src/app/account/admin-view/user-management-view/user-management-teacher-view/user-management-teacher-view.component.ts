import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TeacherService } from '../../../../teachers/teacher.service';
import { Teacher } from '../../../../teachers/teacher';
import { Response } from '../../../../general/backend/response';
import { NotificationService } from '../../../../notification/notification.service';
import { Consts } from '../../../../general/utils/Consts';
import { Subject } from '../../../../students/subject';
import { StudentClass } from '../../../../studentClass/studentClass';

@Component({
  selector: 'user-management-teacher-view',
  templateUrl: './user-management-teacher-view.component.html',
  styleUrls: ['./user-management-teacher-view.component.css']
})
export class UserManagementTeacherViewComponent implements OnInit {


  @Input()
  teachers: Teacher[];

  @Input()
  classes: StudentClass[];

  @Input()
  subjects: Subject[];

  @Output()
  userDeleted: EventEmitter<any> = new EventEmitter<any>();

  constructor(private tService: TeacherService, private notificationService: NotificationService) { }

  ngOnInit() {
   
  }

  ngOnChanges(){
    
  }

  teacherSaved(t: Teacher){
    this.tService.saveOrUpdate(t).subscribe(resp => {
      if(Response.isOk(resp)){
        this.notificationService.showSuccess(Consts.Messages.TEACHER_SAVED);
      } else {
        this.notificationService.showSuccess(Consts.Messages.USER_SAVE_ERROR);
      }
    })
  }

  teacherDeleted(t: Teacher){
    this.tService.remove(t.id).subscribe(resp => {
      if(Response.isOk(resp)){
        this.notificationService.showSuccess(Consts.Messages.TEACHER_DELETED);
        this.userDeleted.emit(t.id);
      } else {
        this.notificationService.showError(Consts.Messages.USER_REMOVE_ERROR);
      }
    })
  }

}
