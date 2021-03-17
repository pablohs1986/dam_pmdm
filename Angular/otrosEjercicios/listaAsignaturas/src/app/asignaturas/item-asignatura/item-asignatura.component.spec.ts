import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAsignaturaComponent } from './item-asignatura.component';

describe('ItemAsignaturaComponent', () => {
  let component: ItemAsignaturaComponent;
  let fixture: ComponentFixture<ItemAsignaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAsignaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
