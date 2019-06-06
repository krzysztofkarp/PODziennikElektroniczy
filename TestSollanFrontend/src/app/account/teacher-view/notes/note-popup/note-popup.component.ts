import { Note } from './../../../../note/note';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { Student } from '../../../../students/student';

@Component({
  selector: 'app-note-popup',
  templateUrl: './note-popup.component.html',
  styleUrls: ['./note-popup.component.css']
})
export class NotePopupComponent implements OnInit {


  note: Note;
  teacherId: string
  students: Student[];

  constructor(public dialogRef: MatDialogRef<NotePopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.note = new Note();
   }

  ngOnInit() {
    this.teacherId = this.data.teacherId;
    this.students = this.data.students;
    this.note.from = this.teacherId;
  }

  onAdd(){
    if(this.note.description && this.note.to)
      this.dialogRef.close(this.note);
    else
      alert("Uzupełnij wszystkie pola!")
  }

}
