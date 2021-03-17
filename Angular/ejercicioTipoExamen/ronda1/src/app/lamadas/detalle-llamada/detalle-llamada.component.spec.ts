import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleLlamadaComponent } from './detalle-llamada.component';

describe('DetalleLlamadaComponent', () => {
  let component: DetalleLlamadaComponent;
  let fixture: ComponentFixture<DetalleLlamadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleLlamadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleLlamadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
