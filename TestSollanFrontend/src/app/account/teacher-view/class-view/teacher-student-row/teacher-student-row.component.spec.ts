import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherStudentRowComponent } from './teacher-student-row.component';

describe('TeacherStudentRowComponent', () => {
  let component: TeacherStudentRowComponent;
  let fixture: ComponentFixture<TeacherStudentRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherStudentRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherStudentRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
