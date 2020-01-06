import { NoteService } from './../../note/note.service';
import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../students/student';
import { Note } from '../../note/note';
import { GradeService } from '../../students/grade.service';
import { Grade } from '../../students/grade';
import { StudentClassService } from '../../studentClass/class-service';
import { StudentClass } from '../../studentClass/studentClass';
import { SubjectService } from '../admin-view/subject-management-view/subject.service';
import { Subject } from '../../students/subject';
import { DateParser } from '../../general/utils/dateParser';

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

  grades: Grade[];

  subjects: Subject[];

  studentClass: StudentClass;

  parsedDate: string;

  info: object;

  constructor(private noteService: NoteService,
    private subService: SubjectService, 
    private gradeService: GradeService,
    private parser: DateParser, 
    private classService: StudentClassService) { }

  ngOnInit() {
    this.loadAll();
  }

  loadGrades(){
    this.gradeService.byStudentId(this.user.id).subscribe(resp => this.grades = resp.items);
  }

  loadAll(){
    this.gradeService.byStudentId(this.user.id).subscribe(resp => this.grades = resp.items);
    this.classService.byStudentId(this.user.id).subscribe(resp => {
      this.studentClass = resp.item;
      this.prepareInfo();
      this.parsedDate = this.parser.parse(this.user.birthdate);
      this.subService.byClassId(this.studentClass.classId).subscribe(resp => this.subjects = resp.items);
    });
  }

  prepareInfo(){
    this.info = {};
    this.info["Klasa"] = this.studentClass.name;
    this.info["Profil"] = this.studentClass.profile;
  }

}
