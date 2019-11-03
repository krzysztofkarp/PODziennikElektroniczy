import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Student } from '../../../../students/student';
import { Grade } from '../../../../students/grade';
import { NewGradePopupComponent } from '../new-grade-popup/new-grade-popup.component';

@Component({
  selector: 'app-student-popup',
  templateUrl: './student-popup.component.html',
  styleUrls: ['./student-popup.component.css']
})
export class StudentPopupComponent implements OnInit {



  student: Student;
  grades: Grade[];
  teacherView: boolean;

  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) { }

  ngOnInit() {
    this.student = this.data.student;
    //this.grades = this.student.grades[this.data.subject.type];
    this.teacherView = this.data.teacherView;
  }

  save(){
    //this.student.grades[this.data.subject.type] = this.grades;
    this.dialogRef.close(this.student)
  }

  addGrade(){
    let config: MatDialogConfig = {};
    config.disableClose = true;
    this.dialog.open(NewGradePopupComponent, config).afterClosed().subscribe((g: Grade) => {
      this.grades.push(g);
    })
  }

  removeGrade(grade: Grade){
    this.grades = this.grades.filter(g => g != grade);
  }

}
