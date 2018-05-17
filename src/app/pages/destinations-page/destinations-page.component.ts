import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { TripService } from '../../services/trip.service';
import { ItineraryService } from '../../services/itinerary.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-destinations-page',
  templateUrl: './destinations-page.component.html',
  styleUrls: ['./destinations-page.component.css']
})

export class DestinationsPageComponent implements OnInit {

  currentJustify = 'fill';
  trip: any;
  tripId: string;
  itinerary: any;
  itineraryId: String;
  destinations: any;
  queryString: any;

  constructor(private tripService: TripService, private itineraryService: ItineraryService,
    private activatedRoute: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer ) {
      this.queryString = sanitizer.bypassSecurityTrustResourceUrl(`https://www.google.com/maps/embed/v1/search?key=${environment.gmKey}&q=barcelona`);
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.tripId = params.id;
     const getTripPromise = this.tripService.getOne(this.tripId);
     const getItineraryPromise = this.itineraryService.getOneByTripId(this.tripId);
     Promise.all([getTripPromise, getItineraryPromise])
     .then((data) => {
          console.log(data);
          this.destinations = data[1][0].destination;
          console.log(this.destinations);
         this.trip = data[0];
         if (data[1].length !== 0) {
          this.itineraryId = data[1][0]._id;
         }
     });
   });
  }

  handleMapLoad(destination) {
    this.queryString = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.google.com/maps/embed/v1/search?key=${environment.gmKey}&q=${destination.destinationName}`);
    console.log(this.queryString);
  }

  handleThingsToDo(destination) {
    this.queryString = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.google.com/maps/embed/v1/search?key=${environment.gmKey}&q=things+to+do+in+${destination.destinationName}`);
    console.log(this.queryString);
  }

  handleRestaurants(destination) {
    this.queryString = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.google.com/maps/embed/v1/search?key=${environment.gmKey}&q=restaurants+in+${destination.destinationName}`);
    console.log(this.queryString);
  }
}
