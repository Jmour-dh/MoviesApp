export interface BaseSerie {
  id: number;
  name: string;
  overview: string;
  first_air_date: string;
  vote_average: number;
  poster_path: string | null;
}

export interface Series extends BaseSerie {
  backdrop_path: string | null;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string | null;
  trailerKey: string | null;
}

export interface AllSeriesProps {
  selectedCategory: string;
  startDate: string;
  endDate: string;
}
