// src/components/ListOfSimilarSeries.tsx
import React from 'react';
import Carousel from '../Carousel';
import CardSerie from './CardSerie';
import { SimilarSeries } from '../../interfaces/serieDetails.interface';
import { NavLink } from 'react-router-dom';

interface ListOfSimilarSeriesProps {
  similarSeries: SimilarSeries[];
}

const ListOfSimilarSeries: React.FC<ListOfSimilarSeriesProps> = ({ similarSeries }) => {
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-2 text-white m-4 p-2">Similar Series</h2>
      <div className="flex justify-center">
        <div className="w-full lg:w-4/5 xl:w-3/4">
          <Carousel<SimilarSeries>
            items={similarSeries}
            renderItem={(similarSerie) => (
              <NavLink to={`/serie/${similarSerie.id}`}>
                <CardSerie serie={similarSerie} />
              </NavLink>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default ListOfSimilarSeries;
