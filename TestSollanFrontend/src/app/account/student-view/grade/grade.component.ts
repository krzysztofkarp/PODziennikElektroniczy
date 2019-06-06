import { GradeType } from './../../../students/grade';
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

  @Output()
  delete: EventEmitter<any> = new EventEmitter<any>();

  GradeType = GradeType;

  grade2color

  @Input()
  teacherView: boolean = false;

  constructor(private pipe: DatePipe) { }

  ngOnInit() {
    
  }

  getFormatted(){
    let values = [GradeType[this.grade.type], this.pipe.transform(this.grade.date)]
    return values.join(",")
  }

  deleteGrade(){
    this.delete.emit(this.grade);
  }

}
