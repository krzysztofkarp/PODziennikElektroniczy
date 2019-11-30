import { Note } from './../../note/note';
import { Subject } from './../../students/subject';
import { StudentClassService } from './../../studentClass/class-service';
import { Teacher } from './../../teachers/teacher';
import { Component, OnInit, Input } from '@angular/core';
import { StudentClass } from '../../studentClass/studentClass';
import { NoteService } from '../../note/note.service';

@Component({
  selector: 'teacher-view',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.css']
})
export class TeacherViewComponent implements OnInit {


  @Input()
  user: Teacher;

  classes: StudentClass[];

  sub: Subject

  notes: Note[];

  constructor(private classService: StudentClassService, private noteService: NoteService) { }

  ngOnInit() {
  }

}
