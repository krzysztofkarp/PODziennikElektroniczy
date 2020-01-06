import { Parent } from './../../parents/parent';
import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../students/student';
import { StudentService } from '../../students/student.service';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'parent-view',
  templateUrl: './parent-view.component.html',
  styleUrls: ['./parent-view.component.css']
})
export class ParentViewComponent implements OnInit {


  @Input()
  user:Parent;


  children: Student[];

  info = {};

  tabIndex = 0;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    
  }

  ngOnChanges(){
    this.loadChildren();
  }

  loadChildren(){
    this.studentService.byParentId(this.user.id).subscribe(resp => {
      this.children = resp.items;
    })
  }

  tabChange(evt: MatTabChangeEvent){
    this.tabIndex = evt.index;
}

}
