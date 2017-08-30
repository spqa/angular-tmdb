import {Component, Input, OnInit} from '@angular/core';
import {Tvshow} from "../../models/tvshow";

@Component({
  selector: 'app-tv-show-poster',
  templateUrl: './tv-show-poster.component.html',
  styleUrls: ['./tv-show-poster.component.sass']
})
export class TvShowPosterComponent implements OnInit {

  @Input() tvshow: Tvshow;
  constructor() { }

  ngOnInit() {
  }

}
