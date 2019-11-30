import { Component, OnInit } from '@angular/core';
import { StudentClass } from '../../../../studentClass/studentClass';
import { ClassProfile } from '../../../../studentClass/classProfile';
import { Consts } from '../../../../general/utils/Consts';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-add-class-popup',
  templateUrl: './add-class-popup.component.html',
  styleUrls: ['./add-class-popup.component.css']
})
export class AddClassPopupComponent implements OnInit {

  newClass: StudentClass;
  title: string = Consts.Messages.NEW_CLASS;
  profiles = [ClassProfile.MAT_GEO, ClassProfile.MAT_INF, ClassProfile.HUMAN, ClassProfile.LANG, ClassProfile.BIOL_CHEM];

  constructor(private dialogRef: MatDialogRef<AddClassPopupComponent>) { 
    this.newClass = new StudentClass();
  }

  ngOnInit() {

  }

  onAdd(){
    this.validate();
    this.dialogRef.close(this.newClass);
  }

  onCancel(){
    this.dialogRef.close();
  }

  validate(){
    let result = Consts.Regex.CLASS_NAME.test(this.newClass.name);
    console.log(result)
  }

}
