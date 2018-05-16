import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

@Injectable()
export class DestinationService {

  private baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  createDestination(tripid: String, itineraryid: String) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.baseUrl}/trip/${tripid}/itinerary/${itineraryid}`, options)
      .toPromise();
  }

}
