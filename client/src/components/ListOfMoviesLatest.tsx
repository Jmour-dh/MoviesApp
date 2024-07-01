import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import CardMovie from './CardMovie';
import { getLatestMovies } from '../api/movie';
import { Movie } from '../interfaces/movie.interface';
import { NavLink } from 'react-router-dom';

const ListOfMoviesLatest: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
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
      <h1 className="text-3xl font-bold  text-white mx-4 p-2">Latest movies</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex justify-center">
        <div className="w-full lg:w-4/5 xl:w-3/4">
          <Carousel
            items={movies}
            renderItem={(movie) => (
              <NavLink to={`/movie/${movie.id}`}>
                 <CardMovie
                key={movie.id}
                title={movie.title}
                releaseDate={movie.release_date}
                rating={movie.vote_average}
                imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
              </NavLink>
             
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default ListOfMoviesLatest;
