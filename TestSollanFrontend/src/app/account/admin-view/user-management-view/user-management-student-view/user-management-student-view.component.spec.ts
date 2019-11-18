import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementStudentViewComponent } from './user-management-student-view.component';

describe('UserManagementStudentViewComponent', () => {
  let component: UserManagementStudentViewComponent;
  let fixture: ComponentFixture<UserManagementStudentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManagementStudentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementStudentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
