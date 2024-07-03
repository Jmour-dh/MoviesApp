import React, { useState } from 'react';
import { MovieDetails } from '../../interfaces/movieDetails.interface';

interface BannerProps {
  movie: MovieDetails;
}

const Banner: React.FC<BannerProps> = ({ movie }) => {
  const { backdrop_path, title, overview, trailerKey, credits } = movie;
  const [showTrailerModal, setShowTrailerModal] = useState(false);

  const openTrailerModal = () => {
    setShowTrailerModal(true);
  };

  const closeTrailerModal = () => {
    setShowTrailerModal(false);
  };

  return (
    <div className="relative w-full h-[75vh] md:h-[70vh] lg:h-[70vh]">
      <img
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center px-4 md:px-8 z-10">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={title}
          className="w-40 h-60 md:w-56 md:h-80 rounded-lg mb-4 md:mb-0 md:mr-8 border border-yellow-300"
        />
        <div className="text-center md:text-left text-white max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
          <p className="text-base md:text-lg mb-4">{overview}</p>
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold mb-2">Actors</h2>
            <ul className="flex flex-wrap justify-center md:justify-start">
              {credits.cast.slice(0, 5).map((actor) => (
                <li key={actor.id} className="mr-4 mb-4 flex items-center">
                  <img
                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                    alt={actor.name}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-2"
                  />
                  <p className="text-sm md:text-base">{actor.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={openTrailerModal}
            className="text-blue-500 underline bg-white px-4 py-2 rounded-md shadow-lg hover:bg-gray-200"
          >
            Watch Trailer
          </button>
        </div>
      </div>

      {showTrailerModal && trailerKey && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-20 px-4">
          <div className="relative w-full max-w-[560px]">
            <button onClick={closeTrailerModal} className="absolute top-2 right-2 text-white text-xl">
              &times;
            </button>
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="mt-4"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
