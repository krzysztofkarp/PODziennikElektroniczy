import { Subject } from './../../../students/subject';
import { StudentPopupComponent } from './student-popup/student-popup.component';
import { Component, OnInit, Input } from '@angular/core';
import { StudentClass } from '../../../studentClass/studentClass';
import { Student } from '../../../students/student';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StudentService } from '../../../students/student.service';

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
  teacherView: boolean;

  constructor(private dialog: MatDialog, private studentService: StudentService) { }

  ngOnInit() {
  }


  onManage(student: Student){
    let config: MatDialogConfig = {};
    config.data = { student: student, subject: this.subject, teacherView: this.teacherView};
    config.disableClose = true;
    this.dialog.open(StudentPopupComponent, config).afterClosed().subscribe(student => {
        this.studentService.update(student).subscribe(resp => console.log(resp));
    })
  }

}
