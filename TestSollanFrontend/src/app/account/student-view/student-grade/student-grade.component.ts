import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../../students/student';
import { GradeService } from '../../../students/grade.service';
import { SubjectService } from '../../admin-view/subject-management-view/subject.service';
import { StudentClass } from '../../../studentClass/studentClass';
import { StudentClassService } from '../../../studentClass/class-service';
import { Response } from '../../../general/backend/response';
import { Subject } from '../../../students/subject';

@Component({
  selector: 'student-grade',
  templateUrl: './student-grade.component.html',
  styleUrls: ['./student-grade.component.css']
})
export class StudentGradeComponent implements OnInit {


  @Input()
  student: Student;


  studentClass: StudentClass;
  subject2Grades: object = {};

  subjects: Subject[]

  constructor(private gradeService: GradeService, private subService: SubjectService, private classService: StudentClassService) { }

  ngOnInit() {
    
  }

  ngOnChanges(){
    this.load();
  }

  load(){
    this.classService.byStudentId(this.student.id).subscribe(resp => {
      if(Response.isOk(resp)){
        this.studentClass = resp.item;
        this.subService.byClassId(resp.item.classId).subscribe(resp =>{
          this.subjects = resp.items;
          this.subjects.forEach(sub => {
            this.gradeService.byStudentAndSubject(this.student.id, sub.subjectId).subscribe(resp => {
              this.subject2Grades[sub.subjectId] = resp.items;
            })
          })
        })
      }
    })
  }

  getGrades(s: Subject){

  }

}
