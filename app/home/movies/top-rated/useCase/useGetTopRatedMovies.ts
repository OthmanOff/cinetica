'use client'
import { useQuery } from "@tanstack/react-query";
import { Movie } from "@/entities/Movie";
import { useApplicationRepositoryContext } from "@/repository/ApplicationRepositoyContext";

const useGetPopularMovies = () => {
  const { movieRepository } = useApplicationRepositoryContext();
  const { data, isLoading, isError } = useQuery<Movie[]>({
    queryKey: ["popular-movies"],
    queryFn: async () => await movieRepository.getTopRatedMovies(),
  });
  return { data, isLoading, isError };
};

export default useGetPopularMovies;