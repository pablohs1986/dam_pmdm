import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCallsComponent } from './navbar-calls.component';

describe('NavbarCallsComponent', () => {
  let component: NavbarCallsComponent;
  let fixture: ComponentFixture<NavbarCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarCallsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
