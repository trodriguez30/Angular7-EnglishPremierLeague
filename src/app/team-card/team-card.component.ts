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
  teams: any = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  addToFavorites(team){
    let favorites = JSON.parse(localStorage.getItem('favorites'));
      if(favorites){
        let cont = 0;
        favorites.map( t =>  t.idTeam === team.idTeam ?  cont++ : null );
        if(cont != 0){
          alert('El equipo ya está agregado a favorito');
        }else{
          favorites.push(team);
          localStorage.setItem('favorites', JSON.stringify(favorites));
          alert('Equipo agregado a favoritos correctamente');
        }
      }else{
          this.teams.push(team);
          localStorage.setItem('favorites', JSON.stringify(this.teams));
    }
   
  }

}
