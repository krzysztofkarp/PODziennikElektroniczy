import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { StudentClass } from '../../../../studentClass/studentClass';
import { Student } from '../../../../students/student';
import { StudentService } from '../../../../students/student.service';
import { Subject } from '../../../../students/subject';
import { Response } from '../../../../general/backend/response';
import { NotificationService } from '../../../../notification/notification.service';
import { Consts } from '../../../../general/utils/Consts';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { SelectPopupComponent } from '../../user-management-view/user-row/select-popup/select-popup.component';
import { StudentClassService } from '../../../../studentClass/class-service';
import { SubjectService } from '../../subject-management-view/subject.service';
import { Teacher } from '../../../../teachers/teacher';
import { TeacherService } from '../../../../teachers/teacher.service';

@Component({
  selector: 'class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.css']
})
export class ClassDetailsComponent implements OnInit {


  @Input()
  selectedClass: StudentClass;

  @Input()
  allStudents: Student[]

  @Input()
  allSubjects: Subject[];

  @Input()
  allTeachers: Teacher[];

  @Input()
  allClasses: StudentClass[];

  students: Student[] = [];

  subjects: Subject[] = [];

  buttonLabel = "Usuń z klasy"

  @Output()
  closeDetails: EventEmitter<any> = new EventEmitter<any>();

  sub2Teacher: object = {};

  constructor(private studentService: StudentService, 
    private classService: StudentClassService,
    private nService: NotificationService,
    private subService: SubjectService,
    private tService: TeacherService, 
    private dialog: MatDialog) { }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.selectedClass){
      this.loadStudents();
      this.loadSubjects();
    }
  }

  loadStudents(){
      this.studentService.byClassId(this.selectedClass.classId).subscribe(resp => {
        this.students = resp.items;
      })
    }

  loadSubjects(){
    this.subService.byClassId(this.selectedClass.classId).subscribe(resp => {
      this.subjects = resp.items;
      this.subjects.forEach(s => {
        this.tService.byClassAndSubjectId(s.subjectId, this.selectedClass.classId).subscribe(resp => {
          this.sub2Teacher[s.subjectId] = resp.item;
        })
      })
    });

    this.subService.getAll().subscribe(resp => this.allSubjects = resp.items);
  }


  onClose(){
    this.closeDetails.emit();
  }

  deleteUser(student: Student){
    this.classService.removeStudent(this.selectedClass.classId, student.id).subscribe(resp => {
      if(Response.isOk(resp)){
        this.students = this.students.filter(s => s.id != student.id);
        this.selectedClass.numberOfStudents--;
        this.nService.showSuccess(Consts.Messages.STUDENT_REMOVED_FROM_CLASS);
      } else {
        this.nService.showError(Consts.Messages.USER_SAVE_ERROR)
      }
    })
  }

  assignUser(){
    let config = new MatDialogConfig();
    let sts = this.allStudents.filter(a => !this.students.map(st => st.id).includes(a.id));
    config.data = { items: sts, select: false, label: "Wybierz ucznia"}

    if(sts.length == 0){
      this.nService.showWarning(Consts.Messages.NO_STUDENTS);
    } else {
      this.dialog.open(SelectPopupComponent, config).afterClosed().subscribe(items => {
        if(items){
          items = items.filter(it => !this.students.map(s => s.id).includes(it.id))
          if(items.length> 0){
            this.classService.addStudents(this.selectedClass.classId, items.map(i => i.id)).subscribe(resp => {
              if(Response.isOk(resp)){
                this.students.push(...items);
                this.selectedClass.numberOfStudents = this.students.length;
              }
            })
          }
        
        }
      })
    }

 
  }

  assignSubject(){
    let config = new MatDialogConfig();
    let sts = this.allSubjects.filter(a => !this.subjects.map(st => st.subjectId).includes(a.subjectId));
    config.data = { items: sts, select: false, label: "Wybierz przedmiot"}

    if(sts.length == 0){
      this.nService.showWarning(Consts.Messages.NO_SUBJECTS);
    } else {
      this.dialog.open(SelectPopupComponent, config).afterClosed().subscribe(items => {
        if(items){
          items = items.filter(it => !this.subjects.map(s => s.subjectId).includes(it.subjectId))
          if(items.length> 0){
            this.classService.addSubjects(this.selectedClass.classId, items.map(i => i.subjectId)).subscribe(resp => {
              if(Response.isOk(resp)){
                this.subjects.push(...items);
              }
            })
          }
        
        }
      })
    }
  }

  onRemove(s: Subject){
    this.classService.removeSubject(this.selectedClass.classId, s.subjectId).subscribe(resp => {
      if(Response.isOk(resp)){
        this.subjects = this.subjects.filter(sub => sub.subjectId != s.subjectId);
        this.nService.showSuccess(Consts.Messages.SUBJECT_DELETED);
      } else {
        this.nService.showError(Consts.Messages.SUBJECT_DELETE_ERROR);
      }
    })
  }

  chooseTeacher(s: Subject){
      this.tService.bySubjectId(s.subjectId).subscribe(resp => {
        if(Response.isOk(resp)){
          let config = new MatDialogConfig();
          config.data = { items: resp.items, select: true, label: "Wybierz prowadzącego"}
      
          if(resp.items.length == 0){
            this.nService.showWarning(Consts.Messages.NO_TEACHERS);
          } else {
            this.dialog.open(SelectPopupComponent, config).afterClosed().subscribe(item => {
              if(item){
                  this.tService.addClass(this.selectedClass.classId, item.id, s.name).subscribe(resp => {
                    if(Response.isOk(resp)){
                      this.nService.showSuccess(Consts.Messages.TEACHER_ASSIGNED);
                      this.sub2Teacher[s.subjectId] = item;
                    } else {
                      this.nService.showError(Consts.Messages.TEACHER_ASSIGN_ERROR);
                    }
                  })
              }
            })
          }
        }
      })
  }

  getTeacher(id){
    let obj: Teacher =  this.sub2Teacher[id];
      if(obj){
        return "Prowadzący: "+obj.firstName + ' ' + obj.secondName
      } else {
        return "";
      }
  }

  classChange(data:any){
    if(data.classId != this.selectedClass.classId){
      this.students = this.students.filter(s => s.id != data.id);
    }
  }

  


}
