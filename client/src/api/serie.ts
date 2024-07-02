import axios from "axios";
import {
  SeriesDetails,
  Video,
  Credit,
  SimilarSeries,
} from "../interfaces/serieDetails.interface";

const API_URL = import.meta.env.VITE_TMDB_API_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const getSerieById = async (
  seriesId: number
): Promise<SeriesDetails> => {
  try {
    const seriesResponse = await axios.get(`${API_URL}/tv/${seriesId}`, {
      params: {
        api_key: API_KEY,
      },
    });
    const seriesData = seriesResponse.data;

    const trailerResponse = await axios.get(
      `${API_URL}/tv/${seriesId}/videos`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );
    const trailers: Video[] = trailerResponse.data.results.filter(
      (video: Video) => video.type === "Trailer"
    );
    const trailerKey: string | null =
      trailers.length > 0 ? trailers[0].key : null;

    const similarSeriesResponse = await axios.get(
      `${API_URL}/tv/${seriesId}/similar`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );
    const similarSeries: SimilarSeries[] = similarSeriesResponse.data.results;

    const creditsResponse = await axios.get(
      `${API_URL}/tv/${seriesId}/credits`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );
    const credits: Credit = creditsResponse.data;

    return {
      ...seriesData,
      trailerKey,
      similarSeries,
      credits,
    };
  } catch (error) {
    console.error(
      `Erreur lors de la récupération de la série avec l'ID ${seriesId}:`,
      error
    );
    throw error;
  }
};

export const getAllSeries = async (category: string = "popular") => {
  try {
    const url = `${API_URL}/tv/${category}`;

    const response = await axios.get(url, {
      params: {
        api_key: API_KEY,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Erreur lors de la récupération des séries:", error);
    throw error;
  }
};
