import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.sass']
})
export class MoviePosterComponent implements OnInit {

  @Input() movie: Movie;
  constructor() { }

  ngOnInit() {
  }

}
