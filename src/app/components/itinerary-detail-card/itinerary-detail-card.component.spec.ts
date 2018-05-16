import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItineraryDetailCardComponent } from './itinerary-detail-card.component';

describe('ItineraryDetailCardComponent', () => {
  let component: ItineraryDetailCardComponent;
  let fixture: ComponentFixture<ItineraryDetailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItineraryDetailCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItineraryDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
