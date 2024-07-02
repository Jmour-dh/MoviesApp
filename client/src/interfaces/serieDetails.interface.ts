import { BaseSerie,Series } from './serie.interface';

export interface SeriesDetails {
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  genres: {
      id: number;
      name: string;
  }[];
  homepage: string | null;
  trailerKey: string | null;
  similarSeries: SimilarSeries[];
  credits: Credit;
}

export interface Video {
  id: string;
  key: string;
  name: string;
  type: string;
}

export interface SimilarSeries extends BaseSerie {}

export interface SeriesDetails extends Series {
  similarSeries: SimilarSeries[];
  credits: Credit;
}


export interface Credit {
  cast: {
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
  }[];
  crew: {
    id: number;
    name: string;
    job: string;
    profile_path: string | null;
  }[];
}
