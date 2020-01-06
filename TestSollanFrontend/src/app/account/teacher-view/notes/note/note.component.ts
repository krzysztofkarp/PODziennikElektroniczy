import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NoteService } from '../../../../note/note.service';
import { Note } from '../../../../note/note';
import { Teacher } from '../../../../teachers/teacher';
import { Student } from '../../../../students/student';
import { DateParser } from '../../../../general/utils/dateParser';
import { NoteDeleteParams } from './noteDeleteParams';

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {


  @Input()
  note: Note;

  @Input()
  canDelete: boolean = true;

  teacher: Teacher;

  student: Student;

  date: string;

  @Output()
  noteDeleted: EventEmitter<any> = new EventEmitter<any>();

  constructor(private service: NoteService, private parser: DateParser) { }

  ngOnInit() {

  }

  ngOnChanges(){
    this.date = this.parser.parse(this.note.date);
    this.load();
  }

  load(){
    this.service.studentByNoteId(this.note.id).subscribe(resp => this.student = resp.item);
    this.service.teacherByNoteId(this.note.id).subscribe(resp => this.teacher = resp.item);
  }

  onDelete(){
    this.noteDeleted.emit(new NoteDeleteParams(this.teacher.id, this.student.id, this.note));
  }

}
