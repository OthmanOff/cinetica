type Genre = {
  id: number;
  name: string;
};

export interface TVShow {
  adult: boolean;
  backdrop_path: string | null;
  genres: Genre[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;  
  number_of_episodes: number;
  number_of_seasons: number;
}
