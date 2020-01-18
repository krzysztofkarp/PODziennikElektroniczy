import { Grade } from './../../../../students/grade';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-new-grade-popup',
  templateUrl: './new-grade-popup.component.html',
  styleUrls: ['./new-grade-popup.component.css']
})
export class NewGradePopupComponent implements OnInit {


  grade: Grade;
  wages = [1,2,3,4,5];

  constructor(private dialogRef: MatDialogRef<NewGradePopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.grade = new Grade();
   }

  ngOnInit() {
  }

  onAdd(){
    this.grade.date = new Date();
    this.dialogRef.close(this.grade);
  }

  onCancel(){
    this.dialogRef.close();
  }

  canAdd(){
    return this.grade.value && this.grade.importance && this.grade.description;
  }

}
