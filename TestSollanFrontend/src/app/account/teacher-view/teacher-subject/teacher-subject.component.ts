import { Component, OnInit, Input } from '@angular/core';
import { Subject } from '../../../students/subject';
import { Teacher } from '../../../teachers/teacher';
import { StudentClassService } from '../../../studentClass/class-service';
import { StudentClass } from '../../../studentClass/studentClass';

@Component({
  selector: 'teacher-subject',
  templateUrl: './teacher-subject.component.html',
  styleUrls: ['./teacher-subject.component.css']
})
export class TeacherSubjectComponent implements OnInit {


  @Input()
  subject: Subject;

  @Input()
  teacher: Teacher;

  classes: StudentClass[];

  constructor(private classService: StudentClassService) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.loadClasses();
  }

  loadClasses(){
    this.classService.byTeacherAndSubject(this.teacher.id, this.subject.subjectId).subscribe(resp => this.classes = resp.items)
  }

  tabChange($event){
    
  }

}
