import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trip.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-trip-page',
  templateUrl: './create-trip-page.component.html',
  styleUrls: ['./create-trip-page.component.css']
})
export class CreateTripPageComponent implements OnInit {

  error: String;
  tripName: String;
  startDate: Date;
  endDate: Date;

  constructor(private tripService: TripService, private router: Router) { }

  ngOnInit() {
  }

  submitForm(form) {
      const trip = {
        tripName: this.tripName,
        startDate: this.startDate,
        endDate: this.endDate
      };
      this.tripService.createTrip(trip)
      .then((result) => {
        this.router.navigate(['/trip']);
      })
      .catch((err) => {
            this.error = err.error.code;
          });
  }

}
