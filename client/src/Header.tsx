import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const categories = [
    { to: '/series', text: 'Series' },
    { to: '/movies', text: 'Movies' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-gray-800 text-white py-4 flex justify-around">
      <div>
        <NavLink to={"/"}>
          <h1 className="text-2xl font-bold pl-2">MovieApp</h1>
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
    </header>
  );
};

export default Header;
