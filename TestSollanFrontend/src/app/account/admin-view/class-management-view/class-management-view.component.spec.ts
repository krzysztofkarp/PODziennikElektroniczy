import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassManagementViewComponent } from './class-management-view.component';

describe('ClassManagementViewComponent', () => {
  let component: ClassManagementViewComponent;
  let fixture: ComponentFixture<ClassManagementViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassManagementViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassManagementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
