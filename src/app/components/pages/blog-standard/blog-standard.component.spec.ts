import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogStandardComponent } from './blog-standard.component';

describe('BlogStandardComponent', () => {
  let component: BlogStandardComponent;
  let fixture: ComponentFixture<BlogStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
