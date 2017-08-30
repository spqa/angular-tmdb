import {Movie} from "./movie";

export class MoviesList {
  page: number;
  total_results: number;
  total_pages: number;
  results: Movie[];
}
