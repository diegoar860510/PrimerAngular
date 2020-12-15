import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FifaDataService {

  constructor(private httpClient: HttpClient) {

  }

  public getTeams() {
    return this.httpClient.get<any>('https://myfakeapi.com/api/football/teams');
  }

  public getStadiums() {
    return this.httpClient.get<any>('https://myfakeapi.com/api/football/stadiums');
  }

}
