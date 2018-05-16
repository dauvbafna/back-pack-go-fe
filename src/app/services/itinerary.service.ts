import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ItineraryService {
  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  createItinerary(tripid: String) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.baseUrl}/trip/${tripid}/itinerary`, options)
      .toPromise();
  }

  getOne(tripid: string, itineraryid: string): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/trip/${tripid}/itinerary/${itineraryid}`, options)
      .toPromise();
  }

  getOneByTripId(tripid: string): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/trip/${tripid}/get-itinerary/`, options)
      .toPromise();
  }

  updateDestinations(itineraryId, destinations): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.put(`${this.baseUrl}/trip/itinerary/${itineraryId}`, destinations, options)
      .toPromise();
  }

}
