import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationDetailCardComponent } from './reservation-detail-card.component';

describe('ReservationDetailCardComponent', () => {
  let component: ReservationDetailCardComponent;
  let fixture: ComponentFixture<ReservationDetailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationDetailCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
