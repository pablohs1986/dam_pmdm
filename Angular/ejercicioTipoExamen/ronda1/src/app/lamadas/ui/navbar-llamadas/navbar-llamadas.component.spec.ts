import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLlamadasComponent } from './navbar-llamadas.component';

describe('NavbarLlamadasComponent', () => {
  let component: NavbarLlamadasComponent;
  let fixture: ComponentFixture<NavbarLlamadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarLlamadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarLlamadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
