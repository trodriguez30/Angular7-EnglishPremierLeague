import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { FavoriteTeamsComponent } from './favorite-teams/favorite-teams.component';

const routes: Routes = [
  { path: '', component: TeamsListComponent },
  { path: 'favorite-teams', component: FavoriteTeamsComponent },
  { path: 'team-details/:id', component: TeamDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
