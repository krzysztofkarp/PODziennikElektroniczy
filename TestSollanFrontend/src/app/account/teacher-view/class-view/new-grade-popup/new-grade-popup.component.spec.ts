import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGradePopupComponent } from './new-grade-popup.component';

describe('NewGradePopupComponent', () => {
  let component: NewGradePopupComponent;
  let fixture: ComponentFixture<NewGradePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGradePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGradePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
