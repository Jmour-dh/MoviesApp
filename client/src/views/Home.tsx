import React from 'react';
import ListOfMoviesLatest from '../components/Movie/ListOfMoviesLatest';
import ListOfMoviesPopular from '../components/Movie/ListOfMoviesPopular';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto bg-black">
      <ListOfMoviesLatest />
      <ListOfMoviesPopular/>
    </div>
  );
};

export default Home;
