import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuniactionViewComponent } from './communiaction-view.component';

describe('CommuniactionViewComponent', () => {
  let component: CommuniactionViewComponent;
  let fixture: ComponentFixture<CommuniactionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommuniactionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommuniactionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
