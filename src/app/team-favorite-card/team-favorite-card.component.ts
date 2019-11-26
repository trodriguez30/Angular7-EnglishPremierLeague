import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Team } from '../team';

@Component({
  selector: 'app-team-favorite-card',
  templateUrl: './team-favorite-card.component.html',
  styleUrls: ['./team-favorite-card.component.css']
})
export class TeamFavoriteCardComponent implements OnInit {

  @Input() team: Team;
  teams: any = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  deleteFromFavorites(team){
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    for( let i = 0; i < favorites.length; i++){ 
      if ( favorites[i].idTeam === team.idTeam) {
        favorites.splice(i, 1); 
      }
   }
   localStorage.setItem('favorites', JSON.stringify(favorites));
   alert('Equipo eliminado a favoritos correctamente, recargue para ver los cambios');
  }

}
