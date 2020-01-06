import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Consts } from '../../../../general/utils/Consts';
import { Subject } from '../../../../students/subject';
import { NotificationService } from '../../../../notification/notification.service';

@Component({
  selector: 'app-new-subject-popup',
  templateUrl: './new-subject-popup.component.html',
  styleUrls: ['./new-subject-popup.component.css']
})
export class NewSubjectPopupComponent implements OnInit {

  title = Consts.Messages.ADD_SUBJECT;
  newSubject: Subject;


  constructor(private dialogRef: MatDialogRef<NewSubjectPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private nService: NotificationService) { 
    this.newSubject = new Subject();
  }

  ngOnInit() {
  }

  onAdd(){
    if(Consts.Regex.FIRST_NAME.test(this.newSubject.name))
      this.dialogRef.close(this.newSubject);
    else
      this.nService.showWarning(Consts.Messages.SUBJECT_NAME_NOT_VALID);
  }

  onCancel(){
    this.dialogRef.close();
  }

}
