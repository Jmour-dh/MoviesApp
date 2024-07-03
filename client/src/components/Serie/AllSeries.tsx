import React, { useState, useEffect, useCallback } from 'react';
import { getAllSeries } from '../../api/serie';
import { Series, AllSeriesProps } from '../../interfaces/serie.interface';
import CardSerie from './CardSerie'; 
import { NavLink } from 'react-router-dom';

const AllSeries: React.FC<AllSeriesProps> = ({ selectedCategory, startDate, endDate }) => {
    const [series, setSeries] = useState<Series[]>([]);
    const [filteredSeries, setFilteredSeries] = useState<Series[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSeries = async () => {
            try {
                const allSeries = await getAllSeries(selectedCategory);
                setSeries(allSeries);
                setFilteredSeries(allSeries);
            } catch (error) {
                setError('Erreur lors de la récupération des séries');
            }
        };

        fetchSeries();
    }, [selectedCategory]);

    const filterSeries = useCallback(() => {
        let filtered = [...series];

        if (startDate) {
            filtered = filtered.filter(serie => new Date(serie.first_air_date) >= new Date(startDate)); 
        }
        if (endDate) {
            filtered = filtered.filter(serie => new Date(serie.first_air_date) <= new Date(endDate));
        }

        setFilteredSeries(filtered);
    }, [series, startDate, endDate]);

    useEffect(() => {
        filterSeries();
    }, [series, startDate, endDate, filterSeries]);

    return (
        <div className="container mx-auto mt-8 px-3">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {filteredSeries.map((serie) => (
                    <div key={serie.id} className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs">
                        <NavLink to={`/serie/${serie.id}`}>
                            <CardSerie serie={serie} />
                        </NavLink>
                    </div>
                ))}
            </div>
            {error && <p className="text-red-500 mt-4">Erreur: {error}</p>}
        </div>
    );
};

export default AllSeries;
