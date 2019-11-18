import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementParentViewComponent } from './user-management-parent-view.component';

describe('UserManagementParentViewComponent', () => {
  let component: UserManagementParentViewComponent;
  let fixture: ComponentFixture<UserManagementParentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManagementParentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementParentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
