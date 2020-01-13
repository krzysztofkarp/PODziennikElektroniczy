import { Subject } from './../../../students/subject';
import { StudentPopupComponent } from './student-popup/student-popup.component';
import { Component, OnInit, Input } from '@angular/core';
import { StudentClass } from '../../../studentClass/studentClass';
import { Student } from '../../../students/student';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StudentService } from '../../../students/student.service';
import { Teacher } from '../../../teachers/teacher';
import { MatCheckboxChange } from '@angular/material';
import { Attendance } from '../teacher-attendance/attendance';
import { AttendanceService } from '../teacher-attendance/attendance.service';
import { TeacherService } from '../../../teachers/teacher.service';
import { Response } from '../../../general/backend/response';
import { NotificationService } from '../../../notification/notification.service';
import { Consts } from '../../../general/utils/Consts';

@Component({
  selector: 'class-view',
  templateUrl: './class-view.component.html',
  styleUrls: ['./class-view.component.css']
})
export class ClassViewComponent implements OnInit {


  @Input()
  class: StudentClass;

  @Input()
  subject: Subject;

  @Input()
  teacher: Teacher;

  @Input()
  attendanceView: boolean = false;

  students: Student[];

  student2Present = {};
  student2Att = {};

  attendances: Attendance[] = []

  constructor(private dialog: MatDialog, private studentService: StudentService, private attService: AttendanceService, private nService: NotificationService) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.studentService.byClassId(this.class.classId).subscribe(resp => {
      this.students = resp.items;
      this.students.forEach(s => this.attService.byStudentSubjectDate(s.id, this.subject.subjectId, new Date()).subscribe(resp => {
        this.student2Present[s.id] = resp.item ? resp.item.present : false;
        this.student2Att[s.id] = resp.item;
      }))
    });
  }

  attendanceChange(evt: MatCheckboxChange, s: Student){
    if(this.student2Att[s.id] != null){
      this.attService.update(s.id, this.subject.subjectId, new Date(this.student2Att[s.id].date), evt.checked).subscribe(resp => {
        if(Response.isOk(resp)){
          this.student2Present[s.id] = evt.checked
          this.student2Att[s.id].present = evt.checked
          this.nService.showSuccess(Consts.Messages.ATTENDANCE_SAVED)
        } else {
          this.nService.showError(Consts.Messages.ATTENDANCE_SAVE_ERROR)
        }
      });
    } else {
      let att = new Attendance();
      att.date = new Date();
      att.present = evt.checked;
      this.attService.save(att, s.id, this.subject.subjectId).subscribe(resp => {
        if(Response.isOk(resp)){
          this.student2Present[s.id] = resp.item.present;
          this.student2Att[s.id] = resp.item;
          this.nService.showSuccess(Consts.Messages.ATTENDANCE_SAVED)
        } else {
          this.nService.showError(Consts.Messages.ATTENDANCE_SAVE_ERROR)
        }
      })
    }
  }


}
