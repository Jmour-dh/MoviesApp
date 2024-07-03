import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Search from './components/Search';

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
    <header className="bg-gray-800 text-white py-4 flex justify-between items-center px-4">
      <div>
        <NavLink to="/">
          <h1 className="text-2xl font-bold">MovieApp</h1>
        </NavLink>
      </div>
      <nav className="flex space-x-6">
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
      <div className="w-1/3">
        <Search />
      </div>
    </header>
  );
};

export default Header;
