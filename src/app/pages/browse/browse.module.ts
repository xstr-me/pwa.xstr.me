import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseComponent } from './browse.component';
import { routing } from './browse.routing';
import { MoviesComponent } from './movies/movies.component';
import { TVShowsComponent } from './tvshows/tvshows.component'

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [BrowseComponent, MoviesComponent, TVShowsComponent]
})
export class BrowseModule { }