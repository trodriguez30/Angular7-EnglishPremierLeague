import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Team } from '../team';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit {
  @Input() team: Team;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
