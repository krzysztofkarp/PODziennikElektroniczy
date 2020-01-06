import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectManagementViewComponent } from './subject-management-view.component';

describe('SubjectManagementViewComponent', () => {
  let component: SubjectManagementViewComponent;
  let fixture: ComponentFixture<SubjectManagementViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectManagementViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectManagementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
