import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotarIngredientesComponent } from './anotar-ingredientes.component';

describe('AnotarIngredientesComponent', () => {
  let component: AnotarIngredientesComponent;
  let fixture: ComponentFixture<AnotarIngredientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotarIngredientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotarIngredientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
