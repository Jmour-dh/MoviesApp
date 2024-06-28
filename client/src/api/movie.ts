import axios from "axios";

const API_URL = import.meta.env.VITE_TMDB_API_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;


export const getLatestMovies = async () => {
    try {
        const response = await axios.get(`${API_URL}/movie/now_playing`, {
            params: {
                api_key: API_KEY,
            },
        });
        console.log(response.data.results);
        
        return response.data.results;
    } catch (error) {
        console.error("Erreur lors de la récupération des derniers films:", error);
        throw error;
    }
};
