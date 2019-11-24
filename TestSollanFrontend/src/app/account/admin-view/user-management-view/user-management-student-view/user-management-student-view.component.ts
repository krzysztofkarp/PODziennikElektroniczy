import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../../students/student.service';
import { Student } from '../../../../students/student';
import { User } from '../../../../user/user';
import { NotificationService } from '../../../../notification/notification.service';
import { Consts } from '../../../../general/utils/Consts';
import { Response } from '../../../../general/backend/response';

@Component({
  selector: 'user-management-student-view',
  templateUrl: './user-management-student-view.component.html',
  styleUrls: ['./user-management-student-view.component.css']
})
export class UserManagementStudentViewComponent implements OnInit {


  students: Student[];

  constructor(private sService: StudentService, private nService: NotificationService) { }

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents(){
    this.sService.getAll().subscribe(resp => this.students = resp.items);
  }

  studentDeleted(user: User){
    this.sService.remove(user.id).subscribe(resp => {
      if(Response.isOk(resp)){
        this.nService.showSuccess(Consts.Messages.STUDENT_SAVED);
        this.students = this.students.filter(s => s.id != user.id);
      } else {
        this.nService.showError(Consts.Messages.USER_SAVE_ERROR);
      }
    })
  }

  studentSaved(user: User){
    this.sService.update(user).subscribe(resp => {
      if(Response.isOk(resp)){
        this.nService.showSuccess(Consts.Messages.USER_SAVED)
      }
    })
  }

}
