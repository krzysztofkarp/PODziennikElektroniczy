import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotificationData, NotificationType } from './notificationData';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {


  NotificationType = NotificationType;
  addedClass: string;

  constructor(private dialogRef: MatDialogRef<NotificationComponent>, @Inject(MAT_DIALOG_DATA) public data: NotificationData) { }

  ngOnInit() {
    this.setClass();
  }

  setClass(){
    switch(this.data.type){
      case NotificationType.ERROR: this.addedClass = NotificationType.ERROR.toString().toLowerCase(); break;
      case NotificationType.SUCCESS: this.addedClass = NotificationType.SUCCESS.toString().toLowerCase(); break;
      case NotificationType.WARNING: this.addedClass = NotificationType.WARNING.toString().toLowerCase(); break;
    }
  }

}
