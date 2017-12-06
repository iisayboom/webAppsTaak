import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadReplyComponentComponent } from './thread-reply-component.component';

describe('ThreadReplyComponentComponent', () => {
  let component: ThreadReplyComponentComponent;
  let fixture: ComponentFixture<ThreadReplyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadReplyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadReplyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
