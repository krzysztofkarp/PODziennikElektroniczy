import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../../students/student.service';
import { Student } from '../../../../students/student';

@Component({
  selector: 'user-management-student-view',
  templateUrl: './user-management-student-view.component.html',
  styleUrls: ['./user-management-student-view.component.css']
})
export class UserManagementStudentViewComponent implements OnInit {


  students: Student[];

  constructor(private sService: StudentService) { }

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents(){
    this.sService.getAll().subscribe(resp => this.students = resp.items);
  }

}
