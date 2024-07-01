import React from 'react';

const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <h2 className="text-lg font-bold mb-2">MovieApp</h2>
        <p className="text-sm mb-4">© {year} MovieApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
