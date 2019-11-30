import { Component, OnInit } from '@angular/core';
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


  parents: Parent[];

  constructor(private pService: ParentService, private nService: NotificationService) { }

  ngOnInit() {
    this.loadParents();
  }

  loadParents(){
    this.pService.getAll().subscribe(resp => this.parents = resp.items);
  }

  parentDeleted(user: User){
    this.pService.remove(user.id).subscribe(resp => console.log(resp));
  }

  parentSaved(p){
    this.pService.remove(p.id).subscribe(resp => {
      if(Response.isOk(resp)){
        this.nService.showSuccess(Consts.Messages.PARENT_SAVED)
      } else {
        this.nService.showError(Consts.Messages.USER_SAVE_ERROR);
      }
    })
  }

}
