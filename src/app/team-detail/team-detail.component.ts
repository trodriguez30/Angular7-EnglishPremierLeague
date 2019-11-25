import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  team: any;
  players: any = [];
  eventsLast: any = [];
  eventsNext: any = [];
  eventsSeason: any = [];
  positionTable: any = [];

  constructor(
    private teamService: TeamService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.teamService.getTeamDetails(params.get('id')).subscribe(team => {
        this.team = team["teams"][0];
      })
      this.teamService.getTeamPlayers(params.get('id')).subscribe(players => {
        this.players = players;
      })
    this.teamService.getEventslast(params.get('id')).subscribe(last => {
        this.eventsLast = last;
      })
      this.teamService.getEventsNext(params.get('id')).subscribe(next => {
        this.eventsNext = next;
      })
      this.teamService.getPositionTable().subscribe(table => {
        this.positionTable = table;
      })

    });

  }

}
