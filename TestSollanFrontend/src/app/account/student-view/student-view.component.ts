import { NoteService } from './../../note/note.service';
import { Grade, GradeType } from './../../students/grade';
import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../students/student';
import { Note } from '../../note/note';

@Component({
  selector: 'student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {


  @Input()
  user: Student;

  keys: string[] = [];

  notes: Note[];

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.keys = Object.keys(this.user.grades);
    this.noteService.forStudent(this.user.id).subscribe(resp => this.notes = resp.items);
  }

}
