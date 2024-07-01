import React from 'react';
import ListOfMoviesLatest from '../components/ListOfMoviesLatest';
import ListOfMoviesPopular from '../components/ListOfMoviesPopular';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto bg-black">
      <ListOfMoviesLatest />
      <ListOfMoviesPopular/>
    </div>
  );
};

export default Home;
