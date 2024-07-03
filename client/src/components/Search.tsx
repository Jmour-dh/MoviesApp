import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchSearchResults } from '../api/search';
import { SearchResult } from '../interfaces/search.interface';


const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setQuery(query);

    if (query.length < 3) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    setIsDropdownVisible(true);

    const searchResults = await fetchSearchResults(query);
    setResults(searchResults);
    setIsLoading(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleResultClick = () => {
    setIsDropdownVisible(false);
    setQuery('');
    setResults([]);
  };

  return (
    <div className="relative" ref={searchRef}>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        className="w-full p-2 border border-gray-300 rounded-md bg-gray-800 text-white"
        placeholder="Search for movies or series..."
      />
      {isLoading && <p className="mt-2 text-gray-500">Loading...</p>}
      {isDropdownVisible && (
        <ul className="mt-4 max-h-80 overflow-y-scroll space-y-2 absolute bg-gray-800 w-full rounded-md z-20">
          {results.map((result) => (
            <li key={result.id} className="flex items-center p-2 border-b border-gray-200 hover:bg-gray-100">
              <img
                src={`https://image.tmdb.org/t/p/w92${result.poster_path}`}
                alt={result.title || result.name}
                className="w-12 h-16 rounded-md object-cover mr-4"
              />
              <div className="flex-1">
                <NavLink
                  to={`/${result.media_type === 'movie' ? 'movie' : 'serie'}/${result.id}`}
                  className="text-blue-600 hover:underline"
                  onClick={handleResultClick}
                >
                  <h3 className="font-semibold">{result.title || result.name}</h3>
                </NavLink>
                <p className="text-sm text-gray-600">
                  {result.media_type === 'movie' ? result.release_date : result.first_air_date}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
