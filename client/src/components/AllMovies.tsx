import React, { useState, useEffect, useCallback } from 'react';
import { getAllMovies } from '../api/movie';
import { Movie,AllMoviesProps } from '../interfaces/movie.interface';
import CardMovie from './CardMovie';
import { NavLink } from 'react-router-dom';



const AllMovies: React.FC<AllMoviesProps> = ({ selectedCategory, startDate, endDate }) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const allMovies = await getAllMovies(selectedCategory);
                setMovies(allMovies);
                setFilteredMovies(allMovies);
            } catch (error) {
                setError('Erreur lors de la récupération des films');
            }
        };

        fetchMovies();
    }, [selectedCategory]);

    const filterMovies = useCallback(() => {
        let filtered = [...movies];

        if (startDate) {
            filtered = filtered.filter(movie => new Date(movie.release_date) >= new Date(startDate));
        }
        if (endDate) {
            filtered = filtered.filter(movie => new Date(movie.release_date) <= new Date(endDate));
        }

        setFilteredMovies(filtered);
    }, [movies, startDate, endDate]);

    useEffect(() => {
        filterMovies();
    }, [movies, startDate, endDate, filterMovies]);

    return (
        <div className="container mx-auto mt-8 px-3">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {filteredMovies.map((movie) => (
                    <div key={movie.id} className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs">
                      <NavLink to={`/movie/${movie.id}`}>
                      <CardMovie movie={movie} />
                      </NavLink>
                        
                    </div>
                ))}
            </div>
            {error && <p className="text-red-500 mt-4">Erreur: {error}</p>}
        </div>
    );
};

export default AllMovies;
