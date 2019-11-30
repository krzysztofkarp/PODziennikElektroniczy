import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { StudentClassService } from '../../../studentClass/class-service';
import { AddClassPopupComponent } from './add-class-popup/add-class-popup.component';
import { Response } from '../../../general/backend/response';
import { NotificationService } from '../../../notification/notification.service';
import { Consts } from '../../../general/utils/Consts';
import { StudentClass } from '../../../studentClass/studentClass';

@Component({
  selector: 'class-management-view',
  templateUrl: './class-management-view.component.html',
  styleUrls: ['./class-management-view.component.css']
})
export class ClassManagementViewComponent implements OnInit {



  classes: StudentClass[];

  constructor(private dialog: MatDialog, private service: StudentClassService, private nService: NotificationService) { }

  ngOnInit() {
    this.loadClasses();
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
        this.classes.unshift(cl);
        this.nService.showSuccess(Consts.Messages.CLASS_SAVED);
      } else {
        this.nService.showError(Consts.Messages.CLASS_SAVE_ERROR);
      }
    })
  }

  loadClasses(){
    this.service.getAll().subscribe(resp => {
      this.classes = resp.items;
      console.log(this.classes);
    });
  }

}
