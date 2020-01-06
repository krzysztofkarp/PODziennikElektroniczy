import { Component, OnInit, Input } from '@angular/core';
import { SubjectService } from './subject.service';
import { Subject } from '../../../students/subject';
import { MatDialog } from '@angular/material';
import { NewSubjectPopupComponent } from './new-subject-popup/new-subject-popup.component';
import { Response } from '../../../general/backend/response';
import { NotificationService } from '../../../notification/notification.service';
import { Consts } from '../../../general/utils/Consts';
import { TeacherService } from '../../../teachers/teacher.service';
import { Teacher } from '../../../teachers/teacher';

@Component({
  selector: 'subject-management-view',
  templateUrl: './subject-management-view.component.html',
  styleUrls: ['./subject-management-view.component.css']
})
export class SubjectManagementViewComponent implements OnInit {

  subjects: Subject[];

  @Input()
  visible: boolean

  selectedSubject: Subject;

  constructor(private subService: SubjectService, private dialog: MatDialog, private notficationService: NotificationService, private tService: TeacherService) { }

  ngOnInit() {
    this.load();
  }


  load(){
    this.subService.getAll().subscribe(resp => {
      this.subjects = resp.items;
    });
  }

  onAdd(){  
    this.dialog.open(NewSubjectPopupComponent).afterClosed().subscribe(subject => {
      if(subject){
        this.validate(subject, () => {
          this.subService.save(subject).subscribe(resp => {
            if(Response.isOk(resp)){
              this.notficationService.showSuccess(Consts.Messages.SUBJECT_SAVED);
              this.subjects.push(resp.item);
            } else {
              this.notficationService.showError(Consts.Messages.SUBJECT_SAVED_ERROR)
            }
          })
        })
      }
    })
  }

  onRemove(subject: Subject){
    this.subService.remove(subject).subscribe(resp => {
      if(Response.isOk(resp)){
        this.notficationService.showSuccess(Consts.Messages.SUBJECT_DELETED);
        this.subjects = this.subjects.filter(sb => sb.subjectId != subject.subjectId);
      } else {
        this.notficationService.showError(Consts.Messages.SUBJECT_DELETE_ERROR);
      }
    })
  }

  validate(sub: Subject, after: () => void){
    if(this.subjects.map(s => s.name.toLowerCase()).includes(sub.name.toLowerCase())){
      this.notficationService.showWarning(Consts.Messages.SUBJECT_EXISTS);
      return;
    }

    if(Consts.Regex.SUBJECT_NAME.test(sub.name)){
      this.notficationService.showWarning(Consts.Messages.SUBJECT_NAME_NOT_VALID);
      return;
    }

    after();
  }

  onDetails(s: Subject){
    this.selectedSubject = s;
  }

  closeDetails(){
    this.selectedSubject = null;
  }

}
