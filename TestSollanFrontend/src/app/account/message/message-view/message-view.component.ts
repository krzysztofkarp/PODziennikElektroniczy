import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../message.service';
import { User } from '../../../user/user';
import { StudentService } from '../../../students/student.service';
import { ParentService } from '../../../parents/parent.service';
import { TeacherService } from '../../../teachers/teacher.service';
import { Student } from '../../../students/student';
import { Teacher } from '../../../teachers/teacher';
import { Parent } from '../../../parents/parent';
import { UserType } from '../../../user/userType';
import { Message } from '../message';
import { MatDialog, MatDialogConfig, MatTabChangeEvent } from '@angular/material';
import { Util } from '../../../general/utils/util';
import { MessagePopupComponent } from '../message-popup/message-popup.component';
import { MessageParams } from '../message-popup/messageParams';
import { NotificationService } from '../../../notification/notification.service';
import { Consts } from '../../../general/utils/Consts';
import { Response } from '../../../general/backend/response';

@Component({
  selector: 'message-view',
  templateUrl: './message-view.component.html',
  styleUrls: ['./message-view.component.css']
})
export class MessageViewComponent implements OnInit {



  @Input()
  sender: User;

  parents: Parent[];

  students: Student[];

  teachers: Teacher[];

  myMessages: Message[];

  received: Message[];

  sent: Message[];

  recipients: User[] = [];

  tabIndex: number = 0;

  constructor(private nService: NotificationService, private dialog: MatDialog, private service: MessageService, private sService: StudentService, private pService: ParentService, private tService: TeacherService) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.load();
    this.loadMessages();
  }


  onSend(){
    let config = new MatDialogConfig();
    config.data = Util.clone(this.recipients);
    this.dialog.open(MessagePopupComponent, config).afterClosed().subscribe((params: MessageParams) => {
      if(params){
        params.message.sender = this.sender.type;
        this.service.send(params.message, this.sender.id, params.recipientId).subscribe(resp => {
            if(Response.isOk(resp)){
              this.sent.unshift(resp.item);
              this.nService.showSuccess(Consts.Messages.MESSAGE_SENT);
            } else {
              this.nService.showError(Consts.Messages.MESSAGE_SENT_ERROR);
            }
        })
      }
    }); 
  }


  load(){
    switch(this.sender.type){
      case UserType.STUDENT:
        this.loadTeachers(); 
        break;
      case UserType.TEACHER:
        this.loadStudents();
        this.loadParents(); 
        break;
      case UserType.PARENT:
        this.loadTeachers(); break;
    }
  }

  loadMessages(){
    switch(this.sender.type){
      case UserType.STUDENT:
       this.service.byStudentId(this.sender.id).subscribe(resp => this.handleLoaded(resp.items)); break;
      case UserType.TEACHER:
        this.service.byTeacherId(this.sender.id).subscribe(resp => this.handleLoaded(resp.items)); break;
      case UserType.PARENT:
        this.service.byParentId(this.sender.id).subscribe(resp => this.handleLoaded(resp.items)); break;
    }
  }


  loadParents(){
    this.pService.getAll().subscribe(resp => {
      this.parents = resp.items;
      this.recipients.push(...resp.items);
    });
  }

  loadTeachers(){
    this.tService.getAll().subscribe(resp =>{
      this.teachers = resp.items;
      this.recipients.push(...resp.items);
    });
  }

  loadStudents(){
    this.sService.getAll().subscribe(resp => {
      this.students = resp.items;
      this.recipients.push(...resp.items);
    });
  }

  handleLoaded(messages: Message[]){
    this.myMessages = messages;
    this.received = messages.filter(m => m.recipient == this.sender.type).reverse();
    this.sent = messages.filter(m => m.sender == this.sender.type).reverse();
  }

  tabChange(evt: MatTabChangeEvent){
    this.tabIndex = evt.index;
  }

}
