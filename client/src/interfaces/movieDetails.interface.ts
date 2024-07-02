export interface Genre {
  id: number;
  name: string;
}

export interface Cast {
  id: number;
  name: string;
  profile_path: string;
}

export interface Credit {
  cast: Cast[];
}

export interface Video {
  key: string;
  site: string;
  type: string;
}

export interface SimilarMovie {
  id: number;
  title: string;
  release_date: string;
  vote_average: number; 
  poster_path: string;
}

export interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  genres: Genre[];
  credits: Credit;
  trailerKey: string | null;
  similarMovies: SimilarMovie[];
}
