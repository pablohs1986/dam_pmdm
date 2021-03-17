import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAsignaturaComponent } from './detail-asignatura.component';

describe('DetailAsignaturaComponent', () => {
  let component: DetailAsignaturaComponent;
  let fixture: ComponentFixture<DetailAsignaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAsignaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
