import { GradeType, Grade } from './../../../../students/grade';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-new-grade-popup',
  templateUrl: './new-grade-popup.component.html',
  styleUrls: ['./new-grade-popup.component.css']
})
export class NewGradePopupComponent implements OnInit {

  types = [GradeType.KRATKÓWKA, GradeType.ODPOWIEDZ, GradeType.SPRAWDZIAN, GradeType.ZADANIE];

  grade: Grade;

  constructor(private dialogRef: MatDialogRef<NewGradePopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.grade = new Grade();
   }

  ngOnInit() {
  }

  onAdd(){
    this.grade.date = new Date();
    this.dialogRef.close(this.grade);
  }

}
