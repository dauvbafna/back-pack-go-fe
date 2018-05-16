import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDetailCardComponent } from './experience-detail-card.component';

describe('ExperienceDetailCardComponent', () => {
  let component: ExperienceDetailCardComponent;
  let fixture: ComponentFixture<ExperienceDetailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceDetailCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
