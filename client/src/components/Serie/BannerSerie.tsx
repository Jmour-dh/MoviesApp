import React, { useState } from "react";
import { SeriesDetails } from "../../interfaces/serieDetails.interface";

interface BannerSerieProps {
  serie: SeriesDetails;
}

const BannerSerie: React.FC<BannerSerieProps> = ({ serie }) => {
  const { backdrop_path, name, overview, trailerKey, credits } = serie;
  const [showTrailerModal, setShowTrailerModal] = useState(false);
  const [showNoVideoMessage, setShowNoVideoMessage] = useState(false);

  const openTrailerModal = () => {
    if (trailerKey) {
      setShowTrailerModal(true);
    } else {
      setShowNoVideoMessage(true);
    }
  };

  const closeTrailerModal = () => {
    setShowTrailerModal(false);
    setShowNoVideoMessage(false);
  };

  return (
    <div className="relative w-full h-[550px]">
      <img
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={`https://image.tmdb.org/t/p/w300${serie.poster_path}`}
              alt={name}
              className="border border-yellow-300 w-40 h-60 md:w-auto md:h-auto rounded-lg mb-4 md:mb-0 md:mr-4"
            />
            <div className="w-[800px] md:text-left text-white">
              <h1 className="text-4xl font-bold mb-4">{name}</h1>
              <p className="text-lg mb-4">{overview}</p>
              <div className="mb-4">
                <h2 className="text-2xl font-bold mb-2">Actors</h2>
                <ul className="flex flex-wrap">
                  {credits.cast.slice(0, 5).map((actor) => (
                    <li key={actor.id} className="mr-4 mb-4 flex items-center">
                      <img
                        src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                        alt={actor.name}
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full mr-2"
                      />
                      <p className="text-sm">{actor.name}</p>
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
              {showNoVideoMessage && (
                <p className="text-red-500 mt-2">No video available.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {showTrailerModal && trailerKey && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-10">
          <div className="relative w-full max-w-[560px]">
            <button
              onClick={closeTrailerModal}
              className="absolute top-2 right-2 text-white text-xl"
            >
              &times;
            </button>
            <iframe
              width="560"
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

export default BannerSerie;
