import axios from "axios";
import { MovieDetails, Video, Credit, SimilarMovie } from '../interfaces/movieDetails.interface';

const API_URL = import.meta.env.VITE_TMDB_API_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const getLatestMovies = async () => {
    try {
        const response = await axios.get(`${API_URL}/movie/now_playing`, {
            params: {
                api_key: API_KEY,
            },
        });
        
        return response.data.results;
    } catch (error) {
        console.error("Erreur lors de la récupération des derniers films:", error);
        throw error;
    }
};

export const getMovieById = async (movieId: number): Promise<MovieDetails> => {
    try {
        const movieResponse = await axios.get(`${API_URL}/movie/${movieId}`, {
            params: {
                api_key: API_KEY,
            },
        });
        const movieData = movieResponse.data;

        const trailerResponse = await axios.get(`${API_URL}/movie/${movieId}/videos`, {
            params: {
                api_key: API_KEY,
            },
        });
        const trailers: Video[] = trailerResponse.data.results.filter((video: Video) => video.type === 'Trailer');
        const trailerKey: string | null = trailers.length > 0 ? trailers[0].key : null;
        const similarMoviesResponse = await axios.get(`${API_URL}/movie/${movieId}/similar`, {
            params: {
                api_key: API_KEY,
            },
        });
        const similarMovies: SimilarMovie[] = similarMoviesResponse.data.results;
        const creditsResponse = await axios.get(`${API_URL}/movie/${movieId}/credits`, {
            params: {
                api_key: API_KEY,
            },
        });
        const credits: Credit = creditsResponse.data;

        return {
            ...movieData,
            trailerKey,
            similarMovies,
            credits,
        };
    } catch (error) {
        console.error(`Erreur lors de la récupération du film avec l'ID ${movieId}:`, error);
        throw error;
    }
};

export const getPopularMovies = async () => {
    try {
        const response = await axios.get(`${API_URL}/movie/popular`, {
            params: {
                api_key: API_KEY,
            },
        });
        
        return response.data.results;
    } catch (error) {
        console.error("Erreur lors de la récupération des films les plus populaires:", error);
        throw error;
    }
};
