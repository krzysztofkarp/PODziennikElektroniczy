import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user/user';
import { DateParser } from '../../general/utils/dateParser';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input()
  user: User;

  @Input()
  values: object;

  keys: string[];

  parsedDate: string;

  constructor(private parser: DateParser) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.keys = Object.keys(this.values);
    if(this.user){
      this.parsedDate = this.parser.parse(this.user.birthdate)
    }
  }

}
