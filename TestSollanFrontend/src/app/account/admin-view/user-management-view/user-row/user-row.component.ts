import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../user/user';

@Component({
  selector: 'user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.css']
})
export class UserRowComponent implements OnInit {
  

  @Input()
  user: User;

  headerLabel: string;

  @Output()
  saveUser: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  deleteUser: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.user){
      this.headerLabel = [this.user.firstName, this.user.secondName].join(" ");
    }   
  }

  onSave(){
    this.saveUser.emit(this.user);
  }

  onDelete(){
    this.deleteUser.emit(this.user);
  }

}
