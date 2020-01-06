import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSubjectPopupComponent } from './new-subject-popup.component';

describe('NewSubjectPopupComponent', () => {
  let component: NewSubjectPopupComponent;
  let fixture: ComponentFixture<NewSubjectPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSubjectPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSubjectPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
