import { Component, OnInit } from '@angular/core';
import { StudentClass } from '../../../../studentClass/studentClass';
import { ClassProfile } from '../../../../studentClass/classProfile';
import { Consts } from '../../../../general/utils/Consts';
import { MatDialogRef } from '@angular/material';
import { NotificationService } from '../../../../notification/notification.service';


@Component({
  selector: 'app-add-class-popup',
  templateUrl: './add-class-popup.component.html',
  styleUrls: ['./add-class-popup.component.css']
})
export class AddClassPopupComponent implements OnInit {

  newClass: StudentClass;
  title: string = Consts.Messages.NEW_CLASS;
  profiles = [ClassProfile.MAT_GEO, ClassProfile.MAT_INF, ClassProfile.HUMAN, ClassProfile.LANG, ClassProfile.BIOL_CHEM];

  constructor(private dialogRef: MatDialogRef<AddClassPopupComponent>, private nService: NotificationService) { 
    this.newClass = new StudentClass();
  }

  ngOnInit() {

  }

  onAdd(){
    if(this.nameValid())
      this.dialogRef.close(this.newClass);
    else  
      this.nService.showError(Consts.Messages.CLASS_NAME_NOT_VALID);
  }

  onCancel(){
    this.dialogRef.close();
  }

  nameValid(){
    return Consts.Regex.CLASS_NAME.test(this.newClass.name);
  }

}
