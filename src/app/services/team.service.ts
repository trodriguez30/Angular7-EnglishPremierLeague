import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  
  URL_API = "https://www.thesportsdb.com/api/v1/json/1/";

  constructor(private httpClient: HttpClient) {
  }

  public getTeamsList(){
    return this.httpClient.get(`${this.URL_API}search_all_teams.php?l=English%20Premier%20League`);
  }

  public getTeamDetails(idTeam){
    return this.httpClient.get(`${this.URL_API}lookupteam.php?id=${idTeam}`);
  }

  public getTeamPlayers(idTeam){
    return this.httpClient.get(`${this.URL_API}lookup_all_players.php?id=${idTeam}`);
  }

  public getEventslast(idTeam){
    return this.httpClient.get(`${this.URL_API}eventslast.php?id=${idTeam}`);
  }

  public getEventsNext(idTeam){
    return this.httpClient.get(`${this.URL_API}eventsnext.php?id=${idTeam}`);
  }

  public getPositionTable(){
    return this.httpClient.get(`${this.URL_API}lookuptable.php?l=4328&s=1920`);
  }

}
