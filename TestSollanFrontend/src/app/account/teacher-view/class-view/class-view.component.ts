import { Subject } from './../../../students/subject';
import { StudentPopupComponent } from './student-popup/student-popup.component';
import { Component, OnInit, Input } from '@angular/core';
import { StudentClass } from '../../../studentClass/studentClass';
import { Student } from '../../../students/student';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StudentService } from '../../../students/student.service';
import { Teacher } from '../../../teachers/teacher';

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

  students: Student[];

  constructor(private dialog: MatDialog, private studentService: StudentService) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.studentService.byClassId(this.class.classId).subscribe(resp => this.students = resp.items);
  }


}
