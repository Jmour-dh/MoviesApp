// src/pages/Serie.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSerieById } from '../api/serie';
import { SeriesDetails } from '../interfaces/serieDetails.interface';
import BannerSerie from '../components/BannerSerie';
import ListOfSimilarSeries from '../components/ListOfSimilarSeries';
import Loading from '../components/Loading';

const Serie: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [serie, setSerie] = useState<SeriesDetails | null>(null);

  useEffect(() => {
    const fetchSerie = async () => {
      if (id) {
        try {
          const serieData = await getSerieById(Number(id));
          setSerie(serieData);
        } catch (error) {
          console.error('Error fetching serie details:', error);
        }
      }
    };

    fetchSerie();
  }, [id]);

  if (!serie) {
    return <Loading />;
  }

  const similarSeriesTransformed = serie.similarSeries.map(similar => ({
    ...similar,
    backdrop_path: null,
    genres: [],
    homepage: null,
    trailerKey: null
  }));

  return (
    <div className="w-full mx-auto bg-black">
      <BannerSerie serie={serie} />
      <ListOfSimilarSeries similarSeries={similarSeriesTransformed} />
    </div>
  );
};

export default Serie;
