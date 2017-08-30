import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesListComponent} from "./components/movies-list/movies-list.component";
import {Page404Component} from "./shared/components/page-404/page-404.component";
import {MovieDetailComponent} from "./components/movie-detail/movie-detail.component";
import {FullSearchComponent} from "./components/full-search/full-search.component";

const routes: Routes = [
  {
    path: '',
    component: MoviesListComponent,
    pathMatch: 'full'
  },
  {
    path: 'movie-list/:type',
    component: MoviesListComponent
  },
  {
    path: 'movie/:slug',
    component: MovieDetailComponent
  },
  {
    path: 'search/:query',
    component: FullSearchComponent
  },
  {
    path: 'search',
    component: FullSearchComponent
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
