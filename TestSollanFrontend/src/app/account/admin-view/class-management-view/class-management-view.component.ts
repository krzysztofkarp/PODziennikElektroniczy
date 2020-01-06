import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { StudentClassService } from '../../../studentClass/class-service';
import { AddClassPopupComponent } from './add-class-popup/add-class-popup.component';
import { Response } from '../../../general/backend/response';
import { NotificationService } from '../../../notification/notification.service';
import { Consts } from '../../../general/utils/Consts';
import { StudentClass } from '../../../studentClass/studentClass';
import { Student } from '../../../students/student';
import { StudentService } from '../../../students/student.service';
import { SubjectService } from '../subject-management-view/subject.service';
import { Subject } from '../../../students/subject';
import { TeacherService } from '../../../teachers/teacher.service';
import { Teacher } from '../../../teachers/teacher';

@Component({
  selector: 'class-management-view',
  templateUrl: './class-management-view.component.html',
  styleUrls: ['./class-management-view.component.css']
})
export class ClassManagementViewComponent implements OnInit {



  classes: StudentClass[];
  selectedClass: StudentClass;
  students: Student[];
  subjects: Subject[];
  teachers: Teacher[];

  @Input()
  visible: boolean

  constructor(private dialog: MatDialog, 
    private service: StudentClassService,
    private subService: SubjectService,
    private teacherService: TeacherService, 
    private nService: NotificationService, 
    private studentService: StudentService) { }

  ngOnInit() {
    this.load();
  }



  onAddClass(){
    this.dialog.open(AddClassPopupComponent).afterClosed().subscribe(cl => {
      if(cl){
        this.saveClass(cl);
      }
    });
  }

  saveClass(cl){
    this.service.saveOrUpdate(cl).subscribe(resp => {
      if(Response.isOk(resp)){
        this.classes.push(resp.item);
        this.sortClasses();
        this.nService.showSuccess(Consts.Messages.CLASS_SAVED);
      } else {
        this.nService.showError(Consts.Messages.CLASS_SAVE_ERROR);
      }
    })
  }

  load(){
    this.service.getAll().subscribe(resp => {
      this.classes = resp.items;
      this.sortClasses();
    });

    this.studentService.getAll().subscribe(resp => {
      this.students = resp.items;
    })

    this.subService.getAll().subscribe(resp => {
      this.subjects = resp.items;
    })

    this.teacherService.getAll().subscribe(resp => {
      this.teachers = resp.items;
    })
  }

  removeClass(cl: StudentClass){
    this.service.remove(cl).subscribe(resp => {
      if(Response.isOk(resp)){
        this.nService.showSuccess(Consts.Messages.CLASS_DELETED)
        this.classes = this.classes.filter(cla => cla.classId != cl.classId);
      } else {
        this.nService.showError(Consts.Messages.CLASS_DELETE_ERROR);
      }
    })
  }

  selectClass(c){
    this.selectedClass = c;
  }

  closeDetails(){
    this.selectedClass = null;
  }

  sortClasses(){
    this.classes.sort((c1, c2) => c1.name.localeCompare(c2.name));
  }

}
