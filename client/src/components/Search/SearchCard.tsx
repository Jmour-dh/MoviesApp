// src/components/SearchCard.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { SearchResult } from '../../interfaces/search.interface';

interface SearchCardProps {
  result: SearchResult;
  onClick: () => void;
}

const SearchCard: React.FC<SearchCardProps> = ({ result, onClick }) => {
  return (
    <li
      key={result.id}
      className="flex items-center p-2 border-b border-gray-200 hover:bg-gray-100"
    >
      <img
        src={`https://image.tmdb.org/t/p/w92${result.poster_path}`}
        alt={result.title || result.name}
        className="w-12 h-16 rounded-md object-cover mr-4"
      />
      <div className="flex-1">
        <NavLink
          to={`/${result.media_type === 'movie' ? 'movie' : 'serie'}/${result.id}`}
          className="text-blue-600 hover:underline"
          onClick={onClick}
        >
          <h3 className="font-semibold">{result.title || result.name}</h3>
        </NavLink>
        <p className="text-sm text-gray-600">
          {result.media_type === 'movie' ? result.release_date : result.first_air_date}
        </p>
      </div>
    </li>
  );
};

export default SearchCard;
