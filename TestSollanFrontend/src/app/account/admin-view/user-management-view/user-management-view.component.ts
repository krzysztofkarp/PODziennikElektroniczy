import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddUserPopupComponent } from './add-user-popup/add-user-popup.component';
import { StudentService } from '../../../students/student.service';
import { User } from '../../../user/user';
import { Student } from '../../../students/student';

@Component({
  selector: 'user-management-view',
  templateUrl: './user-management-view.component.html',
  styleUrls: ['./user-management-view.component.css']
})
export class UserManagementViewComponent implements OnInit {

  students: Student[];

  constructor(private dialog: MatDialog, private sService: StudentService) { }

  ngOnInit() {
    this.sService.getAll().subscribe(resp => console.log(resp))
  }

  onAddUser(){
    let config = new MatDialogConfig();
    config.width = "600px";
    this.dialog.open(AddUserPopupComponent).afterClosed().subscribe(user => this.saveUser(user));
  }

  saveUser(user: User){
    if(user){
      this.sService.update(user).subscribe(resp => console.log(resp));
    }
  }

}
