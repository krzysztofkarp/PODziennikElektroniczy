import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../../../../user/user';
import { Subject } from '../../../../students/subject';
import { StudentClass } from '../../../../studentClass/studentClass';

@Component({
  selector: 'user-container',
  templateUrl: './generic-user-container.component.html',
  styleUrls: ['./generic-user-container.component.css']
})
export class GenericUserContainerComponent implements OnInit {



  @Input()
  users: User[];

  @Input()
  data: any[];

  @Input()
  classes: StudentClass[];

  @Input()
  subjects: Subject[];

  @Output()
  userSaved: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  userDeleted: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  deleteUser(user: User){
    this.userDeleted.emit(user);
  }

  saveUser(user: User){
    this.userSaved.emit(user);
  }

}
