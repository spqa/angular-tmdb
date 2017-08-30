import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {TMDBService} from "../../shared/services/tmdb.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {MoviesList} from "../../models/movies-list";
import {FormControl} from "@angular/forms";
import {TvshowList} from "../../models/tvshow-list";
import {SearchResults} from "../../models/search-results";
import {Person} from "../../models/person";

@Component({
  selector: 'app-full-search',
  templateUrl: './full-search.component.html',
  styleUrls: ['./full-search.component.sass']
})
export class FullSearchComponent implements OnInit {

  //when user search by input and press back search result must preserve

  query: Subject<string> = new BehaviorSubject('');
  movies: MoviesList;
  tvshows: TvshowList;
  people: SearchResults<Person>;
  searchControl: FormControl = new FormControl();

  constructor(private route: ActivatedRoute,
              private tmdb: TMDBService
  ) {
    // route param stream

    this.route.paramMap
      .map((params: ParamMap) => {
        return params.get('query');
      })
      .filter(()=>!this.tmdb.isSearched)
      .subscribe(this.query);

    //input stream
    this.searchControl.valueChanges
      .debounceTime(250)
      .filter((query: string) => !!query)
      .subscribe((query: string) => {
        // this.currentQuery = query;
        this.query.next(query)
      });

    // query observer
    this.query
    //filter all empty string
      .filter((query: string) => !!query)
      .subscribe(query => {
        this.tmdb.searchMulti(query);
        console.log(query);
      });

    // search result stream
    this.tmdb.getMovieSearchResults()
      .filter(movies => !!movies)
      .map((movies: MoviesList) => {
        movies.results = movies.results.slice().sort((x, y) => y.popularity - x.popularity);
        return movies;
      })
      .subscribe((results: MoviesList) => this.movies = results);

    this.tmdb.getTvShowSearchResults()
      .filter(movies => !!movies)
      .subscribe((results: TvshowList) => this.tvshows = results);

    this.tmdb.getPeopleSearchResults()
      .filter(movies => !!movies)
      .subscribe((results: SearchResults<Person>) => this.people = results);

  }

  ngOnInit() {
    // this.query.next(this.currentQuery);
  }

}
