import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ParentService } from '../../../../parents/parent.service';
import { Parent } from '../../../../parents/parent';
import { User } from '../../../../user/user';
import { NotificationService } from '../../../../notification/notification.service';
import { Consts } from '../../../../general/utils/Consts';
import { Response } from '../../../../general/backend/response';

@Component({
  selector: 'user-management-parent-view',
  templateUrl: './user-management-parent-view.component.html',
  styleUrls: ['./user-management-parent-view.component.css']
})
export class UserManagementParentViewComponent implements OnInit {



  @Input()
  parents: Parent[];

  @Output()
  userDeleted: EventEmitter<any> = new EventEmitter<any>();

  constructor(private pService: ParentService, private nService: NotificationService) { }

  ngOnInit() {
    
  }

 

  parentDeleted(user: User){
    this.pService.remove(user.id).subscribe(resp =>{
      if(Response.isOk(resp)){
        this.nService.showSuccess(Consts.Messages.PARENT_DELETED);
        this.userDeleted.emit(user.id)
      } else {
        this.nService.showError(Consts.Messages.USER_REMOVE_ERROR);
      }
    });
  }

  parentSaved(p){
    this.pService.saveOrUpdate(p).subscribe(resp => {
      if(Response.isOk(resp)){
        this.nService.showSuccess(Consts.Messages.PARENT_SAVED)
      } else {
        this.nService.showError(Consts.Messages.USER_SAVE_ERROR);
      }
    })
  }

}
