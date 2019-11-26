import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamCardComponent } from './team-card/team-card.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { FavoriteTeamsComponent } from './favorite-teams/favorite-teams.component';
import { TeamFavoriteCardComponent } from './team-favorite-card/team-favorite-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamCardComponent,
    TeamDetailComponent,
    TeamsListComponent,
    FavoriteTeamsComponent,
    TeamFavoriteCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
