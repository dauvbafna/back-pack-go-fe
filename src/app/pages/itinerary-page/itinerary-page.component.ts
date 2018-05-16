import { Component, OnInit, ViewChild, ElementRef, NgZone} from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { } from '@types/googlemaps';
import { ItineraryService } from '../../services/itinerary.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DestinationService } from '../../services/destination.service';
import { error } from 'util';

@Component({
  selector: 'app-itinerary-page',
  templateUrl: './itinerary-page.component.html',
  styleUrls: ['./itinerary-page.component.css']
})
export class ItineraryPageComponent implements OnInit {
  @ViewChild('search') public searchElement: ElementRef;

  place: any;
  itinerary: any;
  startDate: any;
  endDate: any;
  destinationList: any;
  destinations = [];
  itineraryid: String;

  constructor(private mapsAPILoader:  MapsAPILoader, private ngZone: NgZone, private itineraryService: ItineraryService,
    private destinationService: DestinationService, private activatedRoute: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, {types: ['geocode']});

      autocomplete.addListener ('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          this.place = place;
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
        });
      });
    });

    this.activatedRoute.params.subscribe((params) => {
      this.itineraryid = params.id;
   });
  }

  handleAddClick() {
    const destination = {
      destinationName: this.place.formatted_address,
      startDate : this.startDate,
      endDate : this.endDate,
      place_id : this.place.place_id,
      location: { coordinates: [ this.place.geometry.location.lat(), this.place.geometry.location.lng() ] },
      photoUrl: this.place.photos[0].getUrl({maxWidth: 100, maxHeight: 100})
    };
    this.destinations.push(destination);
    console.log(this.destinations);
  }

  addDestinations() {
    this.itineraryService.updateDestinations(this.itineraryid, this.destinations )
    .then(result => {
      console.log(result);
      this.destinationList = result.destination;
      this.router.navigate(['trip',result.trip,'destinations']);
    })
    .catch(err => {
      console.log(err);
    });
    this.destinations = [];
  }

}
