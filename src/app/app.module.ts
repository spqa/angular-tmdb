import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpModule} from "@angular/http";
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {MoviesListComponent} from './components/movies-list/movies-list.component';
import {MoviePosterComponent} from './components/movie-poster/movie-poster.component';
import {PosterPipePipe} from './shared/pipes/poster-pipe.pipe';
import {LoadingComponent} from './shared/components/loading/loading.component';
import {MovieDetailComponent} from './components/movie-detail/movie-detail.component';
import {Page404Component} from './shared/components/page-404/page-404.component';
import {ErrorComponent} from './shared/components/error/error.component';
import {SubstrPipe} from './shared/pipes/substr.pipe';
import {SlugPipe} from './shared/pipes/slug.pipe';
import {BackgroundImageDirective} from './shared/directives/background-image.directive';
import {FullSearchComponent} from './components/full-search/full-search.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TMDBService} from "./shared/services/tmdb.service";
import {TvShowPosterComponent} from './components/tv-show-poster/tv-show-poster.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MoviesListComponent,
    MoviePosterComponent,
    PosterPipePipe,
    LoadingComponent,
    MovieDetailComponent,
    Page404Component,
    ErrorComponent,
    SubstrPipe,
    SlugPipe,
    BackgroundImageDirective,
    FullSearchComponent,
    TvShowPosterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'app-root'}),
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TMDBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
