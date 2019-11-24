import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../../../../user/user';

@Component({
  selector: 'user-container',
  templateUrl: './generic-user-container.component.html',
  styleUrls: ['./generic-user-container.component.css']
})
export class GenericUserContainerComponent implements OnInit {



  @Input()
  users: User[];


  
  @Output()
  userSaved: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  userDeleted: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  deleteUser(user: User){
    console.log(user)
    this.userDeleted.emit(user);
  }

  saveUser(user: User){
    this.userSaved.emit(user);
  }

}
