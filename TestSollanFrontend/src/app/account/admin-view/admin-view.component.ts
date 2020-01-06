import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { User } from '../../user/user';
import { AdminView, AdminViewType } from './adminViews';
import { ClassManagementViewComponent } from './class-management-view/class-management-view.component';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  @Input()
  user:User;

  views = AdminView.ADMIN_VIEWS;
  view2Title: any;
  AdminViewType = AdminViewType;

  @ViewChild(ClassManagementViewComponent)
  classView: ClassManagementViewComponent;

  constructor() { }

  ngOnInit() {

  }

  initMap(){
    
  }

  tabChange(evt: MatTabChangeEvent){
    if(evt.index != 1){
      this.classView.closeDetails()
    }
  }



}
