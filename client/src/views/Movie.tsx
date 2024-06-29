// src/views/Movie.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../api/movie';
import { MovieDetails } from '../interfaces/movieDetails.interface';
import Banner from '../components/Banner';
import ListOfSimilarMovies from '../components/ListOfSimilarMovies';

const Movie: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetails | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      if (id) {
        try {
          const movieData = await getMovieById(Number(id));
          setMovie(movieData);
        } catch (error) {
          console.error('Error fetching movie details:', error);
        }
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="w-full mx-auto">
      <Banner movie={movie} />
      <ListOfSimilarMovies similarMovies={movie.similarMovies} />
    </div>
  );
};

export default Movie;
