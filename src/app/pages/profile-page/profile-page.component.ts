import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  trips: Array<any>;

  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.tripService.listAll()
    .then((data) => {
      this.trips = data;
    });
  }

}
