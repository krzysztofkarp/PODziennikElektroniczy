import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Message } from '../message';
import { User } from '../../../user/user';
import { UserType } from '../../../user/userType';
import { MessageParams } from './messageParams';

@Component({
  selector: 'app-message-popup',
  templateUrl: './message-popup.component.html',
  styleUrls: ['./message-popup.component.css']
})
export class MessagePopupComponent implements OnInit {


  message:Message;
  type2Label: object = {};
  recipient: User;

  constructor(private dialogRef: MatDialogRef<MessagePopupComponent>, @Inject(MAT_DIALOG_DATA) public data: User[]) { 
    this.message = new Message();
    this.message.date = new Date();
  }

  ngOnInit() {
    this.assign();
  }

  assign(){
      this.type2Label[UserType.STUDENT] = "Uczeń";
      this.type2Label[UserType.PARENT] = "Rodzic";
      this.type2Label[UserType.TEACHER] = "Nauczyciel";
  }

  onCancel(){
    this.dialogRef.close();
  }

  onSend(){
    this.message.recipient = this.recipient.type;
    this.dialogRef.close(new MessageParams(this.message, this.recipient.id));
  }

}
