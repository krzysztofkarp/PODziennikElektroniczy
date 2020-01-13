import { Component, OnInit, Input } from '@angular/core';
import { StatementService } from './statement.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MessagePopupComponent } from '../message/message-popup/message-popup.component';
import { MessageParams } from '../message/message-popup/messageParams';
import { Response } from '../../general/backend/response';
import { Consts } from '../../general/utils/Consts';
import { Message } from '../message/message';
import { NotificationService } from '../../notification/notification.service';

@Component({
  selector: 'statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.css']
})
export class StatementsComponent implements OnInit {

  @Input()
  isAdmin: boolean;

  statements: Message[] = [];

  loading: boolean;

  constructor(private service: StatementService, private dialog: MatDialog, private nService: NotificationService) { }

  ngOnInit() {
    this.load();
  }

  load(){
    this.loading = true;
    this.service.getStatements().subscribe(resp => setTimeout(() => {
      this.statements = resp.items.reverse();
      this.loading = false;
    }, 1000));
  }

  onSend(){
    let config = new MatDialogConfig();
    this.dialog.open(MessagePopupComponent, config).afterClosed().subscribe((params: MessageParams) => {
      if(params){
        this.service.sendStatement(params.message).subscribe(resp => {
            if(Response.isOk(resp)){
              this.statements.push(resp.item);
              this.nService.showSuccess(Consts.Messages.MESSAGE_SENT);
            } else {
              this.nService.showError(Consts.Messages.MESSAGE_SENT_ERROR);
            }
        })
      }
    }); 
  }

}
