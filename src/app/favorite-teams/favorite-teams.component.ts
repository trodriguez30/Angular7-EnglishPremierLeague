import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { Team } from "../team";

@Component({
  selector: 'app-favorite-teams',
  templateUrl: './favorite-teams.component.html',
  styleUrls: ['./favorite-teams.component.css']
})
export class FavoriteTeamsComponent implements OnInit {

  teams: Team[] = [];

  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit() {
    console.log(localStorage.getItem('favorites'))
    this.teams = JSON.parse(localStorage.getItem('favorites'));
  }

}
