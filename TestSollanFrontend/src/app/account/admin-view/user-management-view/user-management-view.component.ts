import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatDialog, MatDialogConfig, MatTabChangeEvent } from '@angular/material';
import { AddUserPopupComponent } from './add-user-popup/add-user-popup.component';
import { StudentService } from '../../../students/student.service';
import { User } from '../../../user/user';
import { Student } from '../../../students/student';
import { UserType } from '../../../user/userType';
import { UserService } from '../../../user/user.service';
import { BackendMappings } from '../../../general/utils/backendMappings';
import { NotificationService } from '../../../notification/notification.service';
import { Consts } from '../../../general/utils/Consts';
import { Response } from '../../../general/backend/response';
import { UserManagementStudentViewComponent } from './user-management-student-view/user-management-student-view.component';
import { UserManagementTeacherViewComponent } from './user-management-teacher-view/user-management-teacher-view.component';
import { UserManagementParentViewComponent } from './user-management-parent-view/user-management-parent-view.component';
import { StudentClassService } from '../../../studentClass/class-service';
import { StudentClass } from '../../../studentClass/studentClass';
import { Subject } from '../../../students/subject';
import { SubjectService } from '../subject-management-view/subject.service';
import { TeacherService } from '../../../teachers/teacher.service';
import { ParentService } from '../../../parents/parent.service';
import { Teacher } from '../../../teachers/teacher';
import { Parent } from '../../../parents/parent';

@Component({
  selector: 'user-management-view',
  templateUrl: './user-management-view.component.html',
  styleUrls: ['./user-management-view.component.css']
})
export class UserManagementViewComponent implements OnInit {

  type2Uri: any;
  tabIndex: number = 0;


  @ViewChild(UserManagementStudentViewComponent)
  studentsView: UserManagementStudentViewComponent;

  @ViewChild(UserManagementTeacherViewComponent)
  teachersView: UserManagementTeacherViewComponent;

  @ViewChild(UserManagementParentViewComponent)
  parentsView: UserManagementParentViewComponent;

  classes: StudentClass[];

  subjects: Subject[];

  students: Student[];

  teachers: Teacher[];

  parents: Parent[];

  @Input()
  visible: boolean

  constructor(private dialog: MatDialog,
    private userService: UserService,
    private teacherService: TeacherService,
    private parentService: ParentService,
    private studentService: StudentService,
    private classService: StudentClassService,
    private subjectService: SubjectService,
    private nService: NotificationService) { }

  ngOnInit() {
    this.initMap();
    this.loadData();
  }

  onAddUser(){
    let config = new MatDialogConfig();
    config.width = "600px";
    config.data = {classes:this.classes, students: this.students, subjects: this.subjects};
    this.dialog.open(AddUserPopupComponent, config).afterClosed().subscribe(user => this.saveUser(user));
  }

  saveUser(user: User){
    if(user){
      this.userService.saveUser(user, this.type2Uri[user.type]).subscribe(resp =>{
        if(Response.isOk(resp)){
          this.refreshUsers(user);
          this.nService.showSuccess(Consts.Messages.USER_SAVED);
          user.id = resp.item.id
          this.assignAfter(user);
        } else {
          this.nService.showError(Consts.Messages.USER_SAVE_ERROR);
        }
      });
    }
  }

  initMap(){
    this.type2Uri = {};
    this.type2Uri[UserType.STUDENT] = BackendMappings.Student.SAVE_OR_UPDATE;
    this.type2Uri[UserType.TEACHER] = BackendMappings.Teacher.SAVE_OR_UPDATE;
    this.type2Uri[UserType.PARENT] = BackendMappings.Parent.SAVE_OR_UPDATE;
  }

  tabChange(evt: MatTabChangeEvent){
      this.tabIndex = evt.index;
  }

  refreshUsers(user: User){
      switch(user.type){
        case UserType.STUDENT : this.studentsView.students.push(user); break;
        case UserType.PARENT : this.parents.push(user); break;
        case UserType.TEACHER : this.teachers.push(user); break;
      }
  }

  loadData(){
    this.classService.getAll().subscribe(resp => {
      this.classes = resp.items;
    })
    this.subjectService.getAll().subscribe(resp => {
      this.subjects = resp.items;
    });

    this.loadStudents();
    this.loadParents();
    this.loadTeachers();
  }

  loadStudents(){
    this.studentService.getAll().subscribe(resp => {
      this.students = resp.items;
    })
  }

  loadTeachers(){
    this.teacherService.getAll().subscribe(resp => {
      this.teachers = resp.items;
    })
  }

  loadParents(){
    this.parentService.getAll().subscribe(resp => {
      this.parents = resp.items;
    })
  }

  assignAfter(user:User){
    if(user.type == UserType.STUDENT){
      this.classService.addStudent(user.properties[Consts.Properties.STUDENT_CLASS].classId, user.id).subscribe(resp => {
        if(!Response.isOk(resp))
          this.nService.showError(Consts.Messages.USER_SAVE_ERROR)
      });
    }

    if(user.type == UserType.TEACHER){
      let subs: Subject[] = user.properties[Consts.Properties.TEACHER_SUBJECTS];
      let ids = subs.map(s => s.subjectId);
      this.teacherService.addSubjects(ids, user.id).subscribe(resp => {
        if(!Response.isOk(resp))
          this.nService.showError(Consts.Messages.USER_SAVE_ERROR)
      });
    }


    if(user.type == UserType.PARENT){
      let subs: Student[] = user.properties[Consts.Properties.CHILDREN];
      let ids = subs.map(s => s.id);
      this.parentService.addChildren(ids, user.id).subscribe(resp => {
        if(!Response.isOk(resp))
          this.nService.showError(Consts.Messages.USER_SAVE_ERROR)
      });
    }
   
  }

  studentDeleted(id: string){
    this.students = this.students.filter(s => s.id != id)
  }

  teacherDeleted(id: string){
    this.teachers = this.teachers.filter(s => s.id != id)
  }

  parentDeleted(id: string){
    this.parents = this.parents.filter(s => s.id != id)
  }

}
