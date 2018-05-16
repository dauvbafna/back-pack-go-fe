import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trip.service';
import { ItineraryService } from '../../services/itinerary.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trip-detail-page',
  templateUrl: './trip-detail-page.component.html',
  styleUrls: ['./trip-detail-page.component.css']
})
export class TripDetailPageComponent implements OnInit {
  trip: Object;
  tripId: string;
  itinerary: any;
  itineraryStatus = false;
  itineraryId: String;

  constructor(private tripService: TripService, private itineraryService: ItineraryService,
    private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.tripId = params.id;
     const getTripPromise = this.tripService.getOne(this.tripId);
     const getItineraryPromise = this.itineraryService.getOneByTripId(this.tripId);
     Promise.all([getTripPromise, getItineraryPromise])
     .then((data) => {
       setTimeout(() => {
         this.trip = data[0];
         if (data[1].length !== 0) {
          this.itineraryId = data[1][0]._id;
          this.itineraryStatus = true;
         }
         console.log(this.trip);
       }, 1500);
     });
   });
  }

  newItinerary(id) {
    this.activatedRoute.params.subscribe((params) => {
      this.itineraryService.createItinerary(this.tripId)
      .then((data) => {
        console.log(data);
        this.itinerary = data;
        this.router.navigate(['/trip', this.tripId, 'itinerary', this.itinerary._id]);
      });
    });
  }

}
