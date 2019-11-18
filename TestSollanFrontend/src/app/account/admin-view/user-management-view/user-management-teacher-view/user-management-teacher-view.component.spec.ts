import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementTeacherViewComponent } from './user-management-teacher-view.component';

describe('UserManagementTeacherViewComponent', () => {
  let component: UserManagementTeacherViewComponent;
  let fixture: ComponentFixture<UserManagementTeacherViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManagementTeacherViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementTeacherViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
