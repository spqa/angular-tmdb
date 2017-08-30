import {TvshowEpisode} from './tvshow-episode';

export class TvshowSeason {
  _id: string;
  air_date: string;
  name: string;
  overview: string;
  id: number;
  poster_path: string;
  season_number: number;
  episodes: TvshowEpisode[];
}

