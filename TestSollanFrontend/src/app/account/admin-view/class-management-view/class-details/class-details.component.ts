import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { StudentClass } from '../../../../studentClass/studentClass';
import { Student } from '../../../../students/student';
import { StudentService } from '../../../../students/student.service';

@Component({
  selector: 'class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.css']
})
export class ClassDetailsComponent implements OnInit {


  @Input()
  selectedClass: StudentClass;

  students: Student[] = [];

  @Output()
  closeDetails: EventEmitter<any> = new EventEmitter<any>();

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.selectedClass){
      this.loadStudents();
    }
  }

  loadStudents(){
    this.studentService.byClassId(this.selectedClass.classId).subscribe(resp => {
      this.students = resp.items;
      console.log(this.students);
    })
  }

  onClose(){
    this.closeDetails.emit();
  }

}
