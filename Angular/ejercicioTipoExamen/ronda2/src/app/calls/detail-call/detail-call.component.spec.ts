import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCallComponent } from './detail-call.component';

describe('DetailCallComponent', () => {
  let component: DetailCallComponent;
  let fixture: ComponentFixture<DetailCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
