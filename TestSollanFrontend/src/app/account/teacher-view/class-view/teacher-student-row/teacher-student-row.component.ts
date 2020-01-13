import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../../../students/student';
import { GradeService } from '../../../../students/grade.service';
import { Grade } from '../../../../students/grade';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NewGradePopupComponent } from '../new-grade-popup/new-grade-popup.component';
import { Subject } from '../../../../students/subject';
import { NotificationService } from '../../../../notification/notification.service';
import { Consts } from '../../../../general/utils/Consts';
import { Response } from '../../../../general/backend/response';
import { NoteService } from '../../../../note/note.service';
import { NotePopupComponent } from '../../notes/note-popup/note-popup.component';
import { Teacher } from '../../../../teachers/teacher';
import { StudentClass } from '../../../../studentClass/studentClass';

@Component({
  selector: 'teacher-student-row',
  templateUrl: './teacher-student-row.component.html',
  styleUrls: ['./teacher-student-row.component.css']
})
export class TeacherStudentRowComponent implements OnInit {


  @Input()
  student: Student;

  @Input()
  subject: Subject;

  @Input()
  teacher: Teacher;

  @Input()
  sClass: StudentClass

  headerLabel: string;

  grades: Grade[];

  avg: string;

  constructor(private gradeService: GradeService, private dialog: MatDialog, private nService: NotificationService, private noteService: NoteService) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.headerLabel = [this.student.firstName, this.student.secondName].join(' ');
    this.loadGrades();
  }

  loadGrades(){
    this.gradeService.byStudentAndSubject(this.student.id, this.subject.subjectId).subscribe(resp => {
      this.grades = resp.items;
      this.calculateAvg();
    });
  }

  onGrade(){
    let config = new MatDialogConfig();
    this.dialog.open(NewGradePopupComponent).afterClosed().subscribe(grade => {
      if(grade){
        this.gradeService.add(grade, this.student.id, this.subject.subjectId).subscribe(resp => {
          if(Response.isOk(resp)){
            this.nService.showSuccess(Consts.Messages.GRADE_SAVED);
            this.loadGrades();
          } else {
            this.nService.showError(Consts.Messages.GRADE_SAVED_ERROR)
          }
        })
      }
    })
  }

  deleteGrade(grade: Grade){
      this.gradeService.remove(this.student.id, this.subject.subjectId, grade.gradeId).subscribe(resp => {
        if(Response.isOk(resp)){
          this.loadGrades();
          this.nService.showSuccess(Consts.Messages.GRADE_REMOVED)
        } else {
          this.nService.showError(Consts.Messages.GRADE_REMOVED_ERROR)
        }
      })
  }

  onNote(){
    this.dialog.open(NotePopupComponent).afterClosed().subscribe(note => {
      if(note){
        this.noteService.add(note, this.student.id, this.teacher.id).subscribe(resp => {
          if(Response.isOk(resp)){
            this.nService.showSuccess(Consts.Messages.NOTE_SAVED);
          } else {
            this.nService.showError(Consts.Messages.NOTE_SAVED_ERROR);
          }
        })
      }
    })
  }


  calculateAvg(){
    let valuesSum = 0;
    let wagesSum = 0;
    let values = this.grades.map(g => [g.value, g.importance]);
    let wages = this.grades.map(g => g.importance);

    if(values.length>0){
      wages.forEach(w => wagesSum+=w);
      values.forEach(w => valuesSum += w[0] * w[1]);
      this.avg = (valuesSum/wagesSum).toFixed(2);
    }
  }

  download(){
    this.gradeService.download(this.student.id, this.sClass.classId);
  }

}
