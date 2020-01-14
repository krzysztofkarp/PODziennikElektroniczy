import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../../students/student';
import { GradeService } from '../../../students/grade.service';
import { SubjectService } from '../../admin-view/subject-management-view/subject.service';
import { StudentClass } from '../../../studentClass/studentClass';
import { StudentClassService } from '../../../studentClass/class-service';
import { Response } from '../../../general/backend/response';
import { Subject } from '../../../students/subject';
import { Grade } from '../../../students/grade';

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
  subject2Avg: object = {};

  subjects: Subject[]

  avg: any = "";

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
              this.subject2Avg[sub.subjectId] = this.calculateAvg(resp.items);
              this.getAverage();
            })
          });
        })
      }
    })
  }

  getGrades(s: Subject){

  }

  calculateAvg(grades: Grade[]){
    let valuesSum = 0;
    let wagesSum = 0;
    let values = grades.map(g => [g.value, g.importance]);
    let wages = grades.map(g => g.importance);
    let avg;
    if(values.length>0){
      wages.forEach(w => wagesSum+=w);
      values.forEach(w => valuesSum += w[0] * w[1]);
      avg = (valuesSum/wagesSum).toFixed(2);
    }
    return avg;
  }

  getAverage(){
    let sum = 0;
    let values = Object.entries(this.subject2Avg).filter(pair => pair[1]).map(pair => pair[1]);
    values.forEach(v => sum += Number.parseInt(v));
    let val = (sum/values.length).toFixed(2);
    this.avg = val;
  }

  download(){
    this.gradeService.download(this.student.id, this.studentClass.classId);
  }


}
