// interfaces/movie.interface.ts
export interface Movie {
  id: number; 
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
}

export interface CardMovieProps {
  title: string;
  releaseDate: string;
  rating: number;
  imageUrl: string;
}
