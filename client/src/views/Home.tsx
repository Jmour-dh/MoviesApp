import React from 'react';
import ListOfMoviesLatest from '../components/ListOfMoviesLatest';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto">
      <ListOfMoviesLatest />
    </div>
  );
};

export default Home;
