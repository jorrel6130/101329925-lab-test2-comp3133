import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mission } from '../models/mission';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  constructor(private httpClient: HttpClient) { }

  getMissions(): Observable<Mission[]> {
    return this.httpClient.get<Mission[]>('https://api.spacexdata.com/v3/launches')
  }

  getMissionDetails(flight_number: number): Observable<Mission> {
    return this.httpClient.get<Mission>(`https://api.spacexdata.com/v3/launches/${flight_number}`)
  }

  getMissionsByYear(year: number): Observable<Mission[]> {
    return this.httpClient.get<Mission[]>(`https://api.spacexdata.com/v3/launches?launch_year=${year}`)
  }
}
