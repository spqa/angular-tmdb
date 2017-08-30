import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";
import {MoviesList} from "../../models/movies-list";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/scan'
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Movie} from "../../models/movie";
import {Person} from "../../models/person";
import {Tvshow} from "../../models/tvshow";
import {TvshowList} from "../../models/tvshow-list";
import {SearchResults} from "../../models/search-results";

@Injectable()
export class TMDBService {

  static API_KEY: string = "25934aea8265118ace7bee0f65c39e5c";
  static API_ENDPOINT = 'https://api.themoviedb.org/3/';

  public isSearched: boolean = false;
  searchTvShowSubject: Subject<TvshowList> = new BehaviorSubject(null);
  searchPeopleSubject: Subject<SearchResults<Person>> = new BehaviorSubject(null);
  searchMovieSubject: Subject<MoviesList> = new BehaviorSubject(null);
  searchQuerySubject: Subject<string> = new Subject<string>();

  constructor(private http: Http) {
    // this.searchMovieSubjec
    this.searchQuerySubject
      .switchMap((query: string) => this.searchMovie(query))
      .subscribe(this.searchMovieSubject);

    this.searchQuerySubject
      .switchMap((query: string) => this.searchTVShow(query))
      .subscribe(this.searchTvShowSubject);

    this.searchQuerySubject
      .switchMap((query: string) => this.searchPeople(query))
      .subscribe(this.searchPeopleSubject);
  }

  public getMovieList(type: string, page?: number): Observable<MoviesList> {
    let params = new URLSearchParams();
    params.set('api_key', TMDBService.API_KEY);
    params.set('language', 'en-US');
    params.set('page', `${page ? page : 1}`);

    const url = `${TMDBService.API_ENDPOINT}movie/${type}?${params.toString()}`;
    return this.http.get(url).map(res => res.json());
  }

  public getMovieDetail(id: number): Observable<Movie> {
    let params = new URLSearchParams();
    params.set('api_key', TMDBService.API_KEY);
    params.set('language', 'en-US');

    const url = `${TMDBService.API_ENDPOINT}movie/${id}?${params.toString()}`;

    return this.http.get(url).map(res => res.json()).catch((err) => Observable.throw(err));
  }

  getMovieSearchResults(): Observable<MoviesList> {
    return this.searchMovieSubject.asObservable();
  }

  getPeopleSearchResults(): Observable<SearchResults<Person>> {
    return this.searchPeopleSubject.asObservable();
  }

  getTvShowSearchResults(): Observable<TvshowList> {
    return this.searchTvShowSubject.asObservable();
  }

  public searchMulti(query: string) {
    this.isSearched = true;
    this.searchQuerySubject.next(query);

  }

  public searchMovie(query: string, page?: number, year?: number): Observable<MoviesList> {
    let params = new URLSearchParams();
    params.set('api_key', TMDBService.API_KEY);
    params.set('language', 'en-US');
    params.set('page', `${page ? page : 1}`);
    params.set('query', query);
    params.set('include_adult', 'false');
    params.set('year', `${year ? year : ''}`);

    const url = `${TMDBService.API_ENDPOINT}search/movie?${params.toString()}`;
    return this.http.get(url).map(res => res.json());
  }

  public searchTVShow(query: string, page?: number, year?: number): Observable<TvshowList> {
    let params = new URLSearchParams();
    params.set('api_key', TMDBService.API_KEY);
    params.set('language', 'en-US');
    params.set('page', `${page ? page : 1}`);
    params.set('query', query);
    params.set('include_adult', 'false');
    params.set('first_air_date_year', `${year ? year : ''}`);

    const url = `${TMDBService.API_ENDPOINT}search/tv?${params.toString()}`;
    return this.http.get(url).map(res => res.json());
  }

  public searchPeople(query: string, page?: number): Observable<SearchResults<Person>> {
    let params = new URLSearchParams();
    params.set('api_key', TMDBService.API_KEY);
    params.set('language', 'en-US');
    params.set('page', `${page ? page : 1}`);
    params.set('query', query);

    const url = `${TMDBService.API_ENDPOINT}search/person?${params.toString()}`;

    return this.http.get(url).map((res) => res.json());

  }

  public getTVShowDetail(id: number): Observable<Tvshow> {
    let params = new URLSearchParams();
    params.set('api_key', TMDBService.API_KEY);
    params.set('language', 'en-US');

    const url = `${TMDBService.API_ENDPOINT}tv/${id}?${params.toString()}`;
    return this.http.get(url).map(res => res.json());
  }

  public getPersonDetail(id: number): Observable<Person> {
    let params = new URLSearchParams();
    params.set('api_key', TMDBService.API_KEY);
    params.set('language', 'en-US');

    const url = `${TMDBService.API_ENDPOINT}person/${id}?${params.toString()}`;
    return this.http.get(url).map(res => res.json());
  }

  public getTVShowList(type: string, page?: number): Observable<TvshowList> {
    let params = new URLSearchParams();
    params.set('api_key', TMDBService.API_KEY);
    params.set('language', 'en-US');
    params.set('page', `${page ? page : 1}`);

    const url = `${TMDBService.API_ENDPOINT}tv/${type}?${params.toString()}`;
    return this.http.get(url).map(res => res.json());
  }


  // input stream subcribe a subject , subject push value to 3 stream : movie, people, tv shows
  // public search

}
