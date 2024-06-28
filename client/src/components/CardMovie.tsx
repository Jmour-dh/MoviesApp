import React from 'react';
import {CardMovieProps} from "../interfaces/movie.interface";


const CardMovie: React.FC<CardMovieProps> = ({ title, releaseDate, rating, imageUrl }) => {
  const formattedRating = (rating * 10).toFixed(0);

  const getRatingColor = (rating: number) => {
    if (rating >= 8) return 'stroke-green-500';
    if (rating >= 5) return 'stroke-yellow-500';
    return 'stroke-red-500';
  };

  const circumference = 2 * Math.PI * 20;
  const offset = circumference - (circumference * rating / 10);

  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs rounded overflow-hidden shadow-lg m-4">
      <div className="relative">
        <img className="w-full" src={imageUrl} alt={title} />
        <div className="absolute top-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 text-center">
          <div className="font-bold text-xl">{title}</div>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600 text-sm">{releaseDate}</span>
          <div className="relative flex justify-center items-center">
            <svg className="w-12 h-12 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-12 lg:h-12">
              <circle
                className="text-gray-300"
                strokeWidth="4"
                stroke="currentColor"
                fill="transparent"
                r="20"
                cx="25"
                cy="25"
              />
              <circle
                className={`${getRatingColor(rating)}`}
                strokeWidth="4"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="20"
                cx="40"
                cy="25"
                transform="rotate(-90 32 32)"
              />
            </svg>
            <span className="absolute text-xs font-bold">{formattedRating}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
