import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

@Injectable()
export class TripService {
  private baseUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  listAll(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/trip`, options)
      .toPromise();
  }

    getOne(id: string): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/trip/${id}`, options)
      .toPromise();
  }

  createTrip(trip) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.baseUrl}/trip/create`, trip, options)
      .toPromise();
  }

  inviteOne(user, tripID){
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.baseUrl}/trip/${tripID}/invite`, {user}, options)
      .toPromise();
  }
}


