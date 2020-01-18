import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { Message } from '../message';
import { MessageService } from '../message.service';
import { User } from '../../../user/user';
import { DateParser } from '../../../general/utils/dateParser';
import { Response } from '../../../general/backend/response';
import { MatExpansionPanel } from '@angular/material';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input()
  message: Message;

  @Input()
  sent: boolean;


  @Input()
  isAdmin: boolean;

  @Input()
  statement: boolean = false;

  author: User;
  recipient: User;
  title: string;
  dateString: string;

  exapnded;

  constructor(private service: MessageService, private parser: DateParser) { }

  ngOnInit() {

    setTimeout(() => {
      this.exapnded = false;
    }, 1000);
  }

  ngOnChanges(){
    this.load();
  }


  load(){
    if(!this.statement){
      if(this.sent)
      this.service.byTypeAndId(this.message.messageId, this.message.recipient).subscribe(resp => {
        this.recipient = resp.item;
        this.setTitle();
      });
    else{
      this.service.byTypeAndId(this.message.messageId, this.message.sender).subscribe(resp =>{
        this.author = resp.item;
        this.setTitle();
      });
    }
    } else {
      this.setTitle();
    }
  }



  setTitle(){
    if(!this.statement){
      if(this.sent){
        this.title = "Do: " + [this.recipient.firstName, this.recipient.secondName].join(" ");
      } else {
        this.title = "Od: " + [this.author.firstName, this.author.secondName].join(" ");
      }
    } else {
      this.title = "Administrator";
    }

    this.dateString = this.parser.parse(this.message.date);
  }

  updateMessage($event){
    if(!this.message.opened && !this.sent){
      this.service.setOpened(this.message.messageId).subscribe(resp => {
        if(Response.isOk(resp)){
          this.message.opened = true
        }
      })
    }
  }

}
