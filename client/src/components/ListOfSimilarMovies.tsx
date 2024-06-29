import React from 'react';
import { SimilarMovie } from '../interfaces/movieDetails.interface';

interface SimilarMoviesListProps {
  similarMovies: SimilarMovie[];
}

const ListOfSimilarMovies: React.FC<SimilarMoviesListProps> = ({ similarMovies }) => {
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-2">Similar Movies</h2>
      <ul className="flex flex-wrap">
        {similarMovies.map((similarMovie) => (
          <li key={similarMovie.id} className="mr-4 mb-4">
            <img
              src={`https://image.tmdb.org/t/p/w200${similarMovie.poster_path}`}
              alt={similarMovie.title}
              className="w-24 h-24 rounded-lg"
            />
            <p>{similarMovie.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListOfSimilarMovies