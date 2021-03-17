import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRecetasComponent } from './nav-recetas.component';

describe('NavRecetasComponent', () => {
  let component: NavRecetasComponent;
  let fixture: ComponentFixture<NavRecetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavRecetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
