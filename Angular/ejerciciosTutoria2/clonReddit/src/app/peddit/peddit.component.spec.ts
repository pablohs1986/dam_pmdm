import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedditComponent } from './peddit.component';

describe('PedditComponent', () => {
  let component: PedditComponent;
  let fixture: ComponentFixture<PedditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
