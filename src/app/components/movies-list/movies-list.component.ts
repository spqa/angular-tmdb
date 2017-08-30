import {Component, OnInit} from '@angular/core';
import {MoviesList} from "../../models/movies-list";
import {TMDBService} from "../../shared/services/tmdb.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.sass'],
  providers: []
})
export class MoviesListComponent implements OnInit {

  movies: MoviesList;
  constructor(private tmdb: TMDBService,private route: ActivatedRoute) {

    this.route.paramMap.subscribe((params: ParamMap)=>{
      let type = params.get("type");
      if (type){
        this.movies=null;
        this.tmdb.getMovieList(type).subscribe(
          movies=>{
            this.movies=movies;
            console.log(this.movies);
          });

      }
    });
  }

  ngOnInit() {
  }

}
