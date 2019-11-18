import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../../../teachers/teacher.service';
import { Teacher } from '../../../../teachers/teacher';

@Component({
  selector: 'user-management-teacher-view',
  templateUrl: './user-management-teacher-view.component.html',
  styleUrls: ['./user-management-teacher-view.component.css']
})
export class UserManagementTeacherViewComponent implements OnInit {

  teachers: Teacher[];

  constructor(private tService: TeacherService) { }

  ngOnInit() {
    this.loadTeachers();
  }

  loadTeachers(){
    this.tService.getAll().subscribe(resp => this.teachers = resp.items);
  }

}
