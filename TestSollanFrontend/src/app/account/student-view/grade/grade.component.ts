import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Grade } from '../../../students/grade';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {


  @Input()
  grade: Grade;

  @Input()
  canDelete: boolean = true;

  @Output()
  delete: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  teacherView: boolean = false;


  tooltip: string;

  constructor(private pipe: DatePipe) { }

  ngOnInit() {
    
  }

  ngOnChanges(){
    if(this.grade){
      this.tooltip = "Waga: "+this.grade.importance + "\n"+ this.grade.description;
    }
  }

  deleteGrade(){
    this.delete.emit(this.grade);
  }

}
