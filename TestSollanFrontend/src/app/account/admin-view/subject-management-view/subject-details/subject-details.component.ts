import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from '../../../../students/subject';
import { TeacherService } from '../../../../teachers/teacher.service';
import { Response } from '../../../../general/backend/response';
import { Teacher } from '../../../../teachers/teacher';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { SelectPopupComponent } from '../../user-management-view/user-row/select-popup/select-popup.component';
import { SubjectService } from '../subject.service';
import { NotificationService } from '../../../../notification/notification.service';
import { Consts } from '../../../../general/utils/Consts';

@Component({
  selector: 'subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.css']
})
export class SubjectDetailsComponent implements OnInit {


  @Input()
  subject: Subject

  @Input()
  subjects: Subject[]

  @Output()
  close: EventEmitter<any> = new EventEmitter<any>();

  allTeachers: Teacher[] = [];

  teachers: Teacher[] = [];

  constructor(private tService: TeacherService, private subService: SubjectService, private dialog: MatDialog, private nService: NotificationService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.loadTeachers();
  }

  loadTeachers() {
    this.tService.bySubjectId(this.subject.subjectId).subscribe(resp => {
      if (Response.isOk(resp)) {
        this.teachers = resp.items;
      }
    })

    this.tService.getAll().subscribe(resp => this.allTeachers = resp.items)
  }

  onClose() {
    this.close.emit()
  }

  onSelect() {
    let config = new MatDialogConfig();
    config.data = { items: this.allTeachers, select: true, label: "Wybierz nauczyciela" }
    this.dialog.open(SelectPopupComponent, config).afterClosed().subscribe(item => {
      if (item) {
        this.tService.addSubject(this.subject.subjectId, item.id).subscribe(resp => {
          if(Response.isOk(resp)){
            this.nService.showSuccess(Consts.Messages.TEACHER_ASSIGNED);
          } else {
            this.nService.showError(Consts.Messages.TEACHER_ASSIGN_ERROR);
          }
        })
      }
    })



  }

}
