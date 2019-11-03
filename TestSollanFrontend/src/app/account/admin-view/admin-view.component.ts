import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user/user';
import { AdminView, AdminViewType } from './adminViews';

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

  constructor() { }

  ngOnInit() {

  }

  initMap(){
    let titles = ["User management"]
  }



}
