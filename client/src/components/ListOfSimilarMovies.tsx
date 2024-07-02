import React from 'react';
import Carousel from './Carousel';
import CardMovie from './CardMovie';
import { SimilarMovie } from '../interfaces/movieDetails.interface';
import { NavLink } from 'react-router-dom';

interface ListOfSimilarMoviesProps {
  similarMovies: SimilarMovie[];
}

const ListOfSimilarMovies: React.FC<ListOfSimilarMoviesProps> = ({ similarMovies }) => {
  return (
    <div className="mt-4 ">
      <h2 className="text-2xl font-bold mb-2 text-white m-4 p-2">Similar Movies</h2>
      <div className="flex justify-center">
        <div className="w-full lg:w-4/5 xl:w-3/4">
          <Carousel
            items={similarMovies}
            renderItem={(similarMovie) => (
              <NavLink to={`/movie/${similarMovie.id}`}>
              <CardMovie
               movie={similarMovie}
              />
              </NavLink>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default ListOfSimilarMovies;
