import { Component, OnInit, Input } from '@angular/core';
import { Teacher } from '../../../teachers/teacher';
import { SubjectService } from '../../admin-view/subject-management-view/subject.service';
import { StudentClassService } from '../../../studentClass/class-service';
import { StudentClass } from '../../../studentClass/studentClass';
import { Subject } from '../../../students/subject';

@Component({
  selector: 'teacher-attendance',
  templateUrl: './teacher-attendance.component.html',
  styleUrls: ['./teacher-attendance.component.css']
})
export class TeacherAttendanceComponent implements OnInit {



  @Input()
  teacher: Teacher;

  @Input()
  subjects: Subject[]

  classes: StudentClass[];


  subject2Classes: object = {};





  constructor(private classService: StudentClassService) { }

  ngOnInit() {
    this.loadClasses();
  }

  loadClasses(){
    this.subjects.forEach(s => {
      this.classService.byTeacherAndSubject(this.teacher.id, s.subjectId).subscribe(resp => {
        this.subject2Classes[s.subjectId] = resp.items;
      })
    })
  }

  tabChange($event){

  }

}
