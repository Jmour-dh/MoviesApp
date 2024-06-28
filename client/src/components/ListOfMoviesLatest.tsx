import React, { useEffect, useState } from 'react';
import { getLatestMovies } from '../api/movie';
import CardMovie from './CardMovie';

const ListOfMoviesLatest: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const latestMovies = await getLatestMovies();
        setMovies(latestMovies);
      } catch (error) {
        setError('Erreur lors de la récupération des films');
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4">Derniers Films</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        {movies.map((movie) => (
          <CardMovie
            key={movie.id}
            title={movie.title}
            releaseDate={movie.release_date}
            rating={movie.vote_average}
            imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ListOfMoviesLatest;
