import {Component, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";
import {TMDBService} from "../../shared/services/tmdb.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'
import {Observable} from "rxjs";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass'],
  providers: []
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tmdb: TMDBService,
    private title: Title
  ) {
    this.route.paramMap
      .map((params: ParamMap)=>params.get('slug').split('-').reverse()[0])
      .switchMap((id: string)=>{
        // console.log('sfsdfsfsdfd',id);
        return this.tmdb.getMovieDetail(parseInt(id));
      })
      .catch(err=>{
        // console.log(err);
        this.router.navigate(['**']);
        return Observable.throw(err);
      })
      .subscribe((movie: Movie)=>{
        this.movie=movie;
        this.title.setTitle(movie.title);
      })

  }

  ngOnInit() {
  }

}
