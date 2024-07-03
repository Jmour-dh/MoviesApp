// src/components/CardSerie.tsx
import React from 'react';
import { BaseSerie } from '../../interfaces/serie.interface';

interface CardSerieProps {
  serie: BaseSerie;
}

const CardSerie: React.FC<CardSerieProps> = ({ serie }) => {
  if (!serie) {
    return null;
  }

  const formattedRating = (serie.vote_average * 10).toFixed(0);

  const getRatingColor = (rating: number) => {
    if (rating >= 8) return 'text-green-500';
    if (rating >= 5) return 'text-yellow-500';
    return 'text-red-500';
  };

  const circumference = 2 * Math.PI * 20;
  const progress = serie.vote_average / 10;
  const offset = circumference * (1 - progress);

  return (
    <div className="w-[95%] bg-white rounded-lg overflow-hidden shadow-lg m-4 border border-yellow-200">
      <div className="relative">
        <img
          className="w-full h-80 object-cover"
          src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
          alt={serie.name}
        />
        <div className="absolute top-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 text-center">
          <div className="font-bold text-xl">{serie.name}</div>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600 text-sm">{serie.first_air_date}</span>
          <div className="flex justify-center items-center relative">
            <svg className="w-12 h-12">
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
                className={`${getRatingColor(serie.vote_average)}`}
                strokeWidth="4"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="20"
                cx="25"
                cy="25"
                transform="rotate(-90 25 25)"
              />
              <text
                className="text-xs font-bold text-center text-white"
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
              >
                {formattedRating}%
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSerie;
