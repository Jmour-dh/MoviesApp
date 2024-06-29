// src/components/MovieDetail.tsx
import React from 'react';
import { MovieDetails } from '../interfaces/movieDetails.interface';

interface MovieDetailProps {
  movie: MovieDetails;
  onShowTrailer: () => void;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie, onShowTrailer }) => {
  const { title, overview, poster_path, release_date, genres, credits } = movie;

  return (
    <div className="flex flex-col md:flex-row">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-4"
      />
      <div className="md:w-2/3">
        <p className="mb-4">{overview}</p>
        <p className="mb-4">Release Date: {release_date}</p>
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Genres</h2>
          <ul className="list-disc list-inside">
            {genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
        {credits && credits.cast && (
          <div className="mb-4">
            <h2 className="text-2xl font-bold">Actors</h2>
            <ul className="flex flex-wrap">
              {credits.cast.slice(0, 5).map((actor) => (
                <li key={actor.id} className="mr-4 mb-4">
                  <img
                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                    alt={actor.name}
                    className="w-24 h-24 rounded-full"
                  />
                  <p>{actor.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        <button onClick={onShowTrailer} className="text-blue-500 underline">
          Watch Trailer
        </button>
      </div>
    </div>
  );
};

export default MovieDetail;
