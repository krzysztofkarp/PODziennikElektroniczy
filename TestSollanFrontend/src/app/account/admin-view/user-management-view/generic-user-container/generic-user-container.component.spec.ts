import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericUserContainerComponent } from './generic-user-container.component';

describe('GenericUserContainerComponent', () => {
  let component: GenericUserContainerComponent;
  let fixture: ComponentFixture<GenericUserContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericUserContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericUserContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
