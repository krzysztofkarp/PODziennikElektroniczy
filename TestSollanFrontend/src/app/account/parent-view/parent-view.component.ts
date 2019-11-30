import { Parent } from './../../parents/parent';
import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../students/student';
import { StudentService } from '../../students/student.service';

@Component({
  selector: 'parent-view',
  templateUrl: './parent-view.component.html',
  styleUrls: ['./parent-view.component.css']
})
export class ParentViewComponent implements OnInit {


  @Input()
  user:Parent;


  children: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    
  }

  ngOnChanges(){
  
    
  }

}
