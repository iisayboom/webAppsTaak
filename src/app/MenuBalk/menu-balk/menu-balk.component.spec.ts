import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBalkComponent } from './menu-balk.component';

describe('MenuBalkComponent', () => {
  let component: MenuBalkComponent;
  let fixture: ComponentFixture<MenuBalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
