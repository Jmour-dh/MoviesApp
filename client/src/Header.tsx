import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Search from './components/Search/Search';

const Header: React.FC = () => {
  const location = useLocation();

  const categories = [
    { to: '/', text: 'Home' },
    { to: '/movies', text: 'Movies' },
    { to: '/series', text: 'Series' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-gray-800 text-white py-4 flex flex-wrap items-center justify-between px-4 md:px-8">
      <div className="flex-shrink-0 mb-4 md:mb-0">
        <NavLink to="/">
          <h1 className="text-2xl font-bold">MovieApp</h1>
        </NavLink>
      </div>
      <nav className="flex-grow flex justify-center space-x-4 mb-4 md:mb-0">
        {categories.map((category, index) => (
          <NavLink
            key={index}
            to={category.to}
            className={`text-white hover:text-gray-400 ${isActive(category.to) ? 'text-yellow-500 font-bold' : ''}`}
          >
            {category.text}
          </NavLink>
        ))}
      </nav>
      <div className="w-full md:w-1/3">
        <Search />
      </div>
    </header>
  );
};

export default Header;
