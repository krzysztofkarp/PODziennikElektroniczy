import { StudentService } from './../../../students/student.service';
import { Teacher } from './../../../teachers/teacher';
import { StudentClass } from './../../../studentClass/studentClass';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Note } from './../../../note/note';
import { Component, OnInit, Input } from '@angular/core';
import { NotePopupComponent } from './note-popup/note-popup.component';
import { Student } from '../../../students/student';
import { NoteService } from '../../../note/note.service';
import { DateParser } from '../../../general/utils/dateParser';
import { NoteDeleteParams } from './note/noteDeleteParams';
import { Response } from '../../../general/backend/response';
import { NotificationService } from '../../../notification/notification.service';
import { Consts } from '../../../general/utils/Consts';

@Component({
  selector: 'notes-view',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {



  notes: Note[] = [];

  @Input()
  teacher: Teacher;

  @Input()
  student: Student;

  @Input()
  deleteDisabled: Student;

  students: Student[] = [];

  noteAuthor: Teacher;
  
  noteRecipent: Student;

  constructor(private dialog: MatDialog, private nService: NotificationService, private noteService: NoteService, private studentService: StudentService, private parser: DateParser) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.load();
  }

  load(){
    if(!this.student){
      this.noteService.byTeacherId(this.teacher.id).subscribe(resp => this.notes = resp.items);
    } else{
      this.noteService.byStudentId(this.student.id).subscribe(resp => this.notes = resp.items);
    }
   
    this.studentService.getAll().subscribe(resp => this.students = resp.items);
  }

  deleteNote(params: NoteDeleteParams){
    this.noteService.remove(params.note, params.studentId, params.teacherId).subscribe(resp => {
      if(Response.isOk(resp)){
        this.nService.showSuccess(Consts.Messages.NOTE_REMOVED);
        this.notes = this.notes.filter(n => n.id != params.note.id)
      } else {
        this.nService.showError(Consts.Messages.NOTE_REMOVED_ERROR);
      }
    })
  }

  onAdd(){

  }

 




  

}
