import axios from 'axios';

const API_URL = import.meta.env.VITE_TMDB_API_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

interface SearchResult {
  id: number;
  title?: string;
  name?: string;
  media_type: 'movie' | 'tv';
}

export const fetchSearchResults = async (query: string): Promise<SearchResult[]> => {
  try {
    const response = await axios.get(`${API_URL}/search/multi`, {
      params: {
        api_key: API_KEY,
        query: query
      }
    });

    return response.data.results;
  } catch (error) {
    console.error("Error fetching search results:", error);
    return [];
  }
};
