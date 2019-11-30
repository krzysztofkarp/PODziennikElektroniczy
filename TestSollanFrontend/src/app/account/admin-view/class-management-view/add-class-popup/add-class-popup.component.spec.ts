import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassPopupComponent } from './add-class-popup.component';

describe('AddClassPopupComponent', () => {
  let component: AddClassPopupComponent;
  let fixture: ComponentFixture<AddClassPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClassPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClassPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
