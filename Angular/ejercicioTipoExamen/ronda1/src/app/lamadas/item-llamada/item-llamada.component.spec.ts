import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLlamadaComponent } from './item-llamada.component';

describe('ItemLlamadaComponent', () => {
  let component: ItemLlamadaComponent;
  let fixture: ComponentFixture<ItemLlamadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemLlamadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemLlamadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
