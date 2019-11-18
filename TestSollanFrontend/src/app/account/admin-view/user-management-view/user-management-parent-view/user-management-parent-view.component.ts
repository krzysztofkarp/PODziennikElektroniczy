import { Component, OnInit } from '@angular/core';
import { ParentService } from '../../../../parents/parent.service';
import { Parent } from '../../../../parents/parent';

@Component({
  selector: 'user-management-parent-view',
  templateUrl: './user-management-parent-view.component.html',
  styleUrls: ['./user-management-parent-view.component.css']
})
export class UserManagementParentViewComponent implements OnInit {


  parents: Parent[];

  constructor(private pService: ParentService) { }

  ngOnInit() {
    this.loadParents();
  }

  loadParents(){
    this.pService.getAll().subscribe(resp => this.parents = resp.items);
  }

}
