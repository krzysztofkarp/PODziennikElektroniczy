import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsMainViewComponent } from './posts-main-view.component';

describe('PostsMainViewComponent', () => {
  let component: PostsMainViewComponent;
  let fixture: ComponentFixture<PostsMainViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsMainViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
