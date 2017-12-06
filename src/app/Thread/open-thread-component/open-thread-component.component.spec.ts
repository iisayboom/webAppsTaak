import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenThreadComponentComponent } from './open-thread-component.component';

describe('OpenThreadComponentComponent', () => {
  let component: OpenThreadComponentComponent;
  let fixture: ComponentFixture<OpenThreadComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenThreadComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenThreadComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
