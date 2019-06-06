import { StudentService } from './../../../students/student.service';
import { Teacher } from './../../../teachers/teacher';
import { StudentClass } from './../../../studentClass/studentClass';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Note } from './../../../note/note';
import { Component, OnInit, Input } from '@angular/core';
import { NotePopupComponent } from './note-popup/note-popup.component';
import { Student } from '../../../students/student';
import { NoteService } from '../../../note/note.service';

@Component({
  selector: 'notes-view',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {



  @Input()
  notes: Note[];

  @Input()
  teacher: Teacher;

  @Input()
  classes: StudentClass[];

  students: Student[] = []

  constructor(private dialog: MatDialog, private noteService: NoteService) { }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.classes){
      this.classes.forEach(c => this.students.push(...c.students.filter(s => !this.students.includes(s))));
    }
  }


  onAdd(){
    let config: MatDialogConfig = {};
    config.data = { teacherId: this.teacher.id, students: this.students};
    config.disableClose = true;
    this.dialog.open(NotePopupComponent, config).afterClosed().subscribe(note => {
       this.noteService.add(note).subscribe(resp => {
         if(resp && resp.item){
           this.notes.push(resp.item);
         }
       })
    })
  }

}
