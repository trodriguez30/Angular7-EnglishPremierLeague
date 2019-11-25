import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamsListComponent } from './teams-list/teams-list.component';

const routes: Routes = [
  { path: '', component: TeamsListComponent },
  { path: 'team-details/:id', component: TeamDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
