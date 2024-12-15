"use client";
import { useQuery } from "@tanstack/react-query";
import { Movie } from "@/entities/Movie";
import { useApplicationRepositoryContext } from "@/repository/ApplicationRepositoyContext";
import { TVShow } from "@/entities/TVShow";


const useGetDiscoverMoviesAndShows = () => {
  const { movieRepository, showRepository } = useApplicationRepositoryContext();
  const movies = useQuery<Movie[]>({
    queryKey: ["discover-movies"],
    queryFn: async () => await movieRepository.getDiscoverMovies(),
  });

  const shows = useQuery<TVShow[]>({
    queryKey: ["discover-shows"],
    queryFn: async () => await showRepository.getDiscoverShows(),
  });
  console.log(shows.data, shows.error);
  return {
    movies: movies.data as Movie[],
    shows: shows.data as TVShow[],
    isError: movies.isError || shows.isError,
    isLoading: movies.isLoading || shows.isLoading,
  };
};

export default useGetDiscoverMoviesAndShows;
