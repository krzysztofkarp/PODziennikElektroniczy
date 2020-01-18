import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../../user/user';
import { UserType } from '../../../../../user/userType';
import { Student } from '../../../../../students/student';
import { SubjectService } from '../../../subject-management-view/subject.service';
import { Subject } from '../../../../../students/subject';
import { StudentClass } from '../../../../../studentClass/studentClass';
import { Parent } from '../../../../../parents/parent';
import { StudentClassService } from '../../../../../studentClass/class-service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { SelectPopupComponent } from '../select-popup/select-popup.component';
import { Response } from '../../../../../general/backend/response';
import { NotificationService } from '../../../../../notification/notification.service';
import { Consts } from '../../../../../general/utils/Consts';
import { TeacherService } from '../../../../../teachers/teacher.service';

@Component({
  selector: 'user-type-details',
  templateUrl: './user-type-details.component.html',
  styleUrls: ['./user-type-details.component.css']
})
export class UserTypeDetailsComponent implements OnInit {



  @Input()
  user: User;

  @Input()
  classes: StudentClass[];

  @Input()
  subjects: Subject[];

  @Output()
  classChanged: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  subjectsChanged: EventEmitter<any> = new EventEmitter<any>();

  mappedUser;


  teacherSubjects: Subject[] = [];
  subjectsString: string;
  classesString: string;
  teacherClasses: StudentClass[] = [];

  @Input()
  studentClass: StudentClass;
  parent: Parent;

  UserType = UserType;

  constructor(private subService: SubjectService, 
    private classService: StudentClassService,
    private teacherService: TeacherService, 
    private dialog: MatDialog, 
    private notificationService: NotificationService) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.loadData();
  }

  loadData(){
    if(this.user.type == UserType.TEACHER){
      this.subService.byTeacherId(this.user.id).subscribe(resp => {
        this.teacherSubjects = resp.items;
        this.setSubjectsString();
        this.subjectsString = this.teacherSubjects.map(s => s.name).join(",")
      });

      this.classService.byTeacherId(this.user.id).subscribe(resp => {
        this.teacherClasses = resp.items;
        this.classesString = this.teacherClasses.map(cl =>cl.name).join(",")
      })
    }

    if(this.user.type == UserType.STUDENT){
      if(!this.studentClass)
        this.classService.byStudentId(this.user.id).subscribe(resp => {
          this.studentClass = resp.item;
      })
    }
  }

  changeClass(){
    let data = { items: this.classes, select: true, label: "Wybierz klasę"}
    let config = new MatDialogConfig();
    config.data = data;
    this.dialog.open(SelectPopupComponent, config).afterClosed().subscribe(newClass => {
      if(newClass){
        this.classService.addStudent(newClass.classId, this.user.id).subscribe(resp => {
          if(Response.isOk(resp)){
            this.studentClass = newClass;
            this.classChanged.emit({id: this.user.id, classId: newClass.classId})
            this.notificationService.showSuccess(Consts.Messages.CHANGES_SAVED)
          } else {
            this.notificationService.showError(Consts.Messages.CHANGES_SAVED_ERROR)
          }
           
        });
      }
    })
  }

  changeClasses(){
    let data = { items: this.classes, select: false, label: "Wybierz klasy"}
    let config = new MatDialogConfig();
    config.data = data;
    this.dialog.open(SelectPopupComponent, config).afterClosed().subscribe(items => {
      if(items){

      }
    })
  }

  
  changeSubjects(){
    let data = { items: this.subjects, select: false, label: "Wybierz przedmioty"}
    let config = new MatDialogConfig();
    config.width ="400px"
    config.data = data;
    this.dialog.open(SelectPopupComponent, config).afterClosed().subscribe(items => {
      if(items){
          this.teacherService.addSubjects(items.map(i => i.subjectId), this.user.id).subscribe(resp => {
            if(Response.isOk(resp)){
              this.teacherSubjects = items;
              this.setSubjectsString();
              this.subjectsChanged.emit({ teacher: this.user.id, items: items});
              this.notificationService.showSuccess(Consts.Messages.CHANGES_SAVED)
            } else {
              this.notificationService.showError(Consts.Messages.CHANGES_SAVED_ERROR)
            }
          })
      }
    })
  }

  setSubjectsString(){
    this.subjectsString = this.teacherSubjects.map(s => s.name).join(",")
  }



}
