import { Note } from './../../note/note';
import { Subject } from './../../students/subject';
import { StudentClassService } from './../../studentClass/class-service';
import { Teacher } from './../../teachers/teacher';
import { Component, OnInit, Input } from '@angular/core';
import { StudentClass } from '../../studentClass/studentClass';
import { SubjectService } from '../admin-view/subject-management-view/subject.service';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'teacher-view',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.css']
})
export class TeacherViewComponent implements OnInit {


  @Input()
  user: Teacher;

  classes: StudentClass[];

  subjects: Subject[] = [];

  notes: Note[] = [];

  info: object;

  tabIndex: number = 0;

  constructor(private classService: StudentClassService, private subService: SubjectService) { }

  ngOnInit() {

  }

  ngOnChanges(){
    this.load();
  }


  load(){
    this.subService.byTeacherId(this.user.id).subscribe(resp => {
      this.subjects = resp.items;
      this.prepareValues();
    });

    this.classService.byTeacherId(this.user.id).subscribe(resp => this.classes = resp.items);
  }


  prepareValues(){
    this.info = {};
    this.info["Przedmioty"] = this.subjects.map(s => s.name).join(",");
  }

  tabChange(evt: MatTabChangeEvent){
    this.tabIndex = evt.index;
  }

}
