'use client'

import { useQuery } from "@tanstack/react-query";
import { Movie } from "@/entities/Movie";
import { useApplicationRepositoryContext } from "@/repository/ApplicationRepositoyContext";

const useGetMovieData = (id:number) => {
  const { movieRepository } = useApplicationRepositoryContext();
  const { data, isLoading, isError } = useQuery<Movie>({
    queryKey: ["movie-"+id],
    queryFn: async () => await movieRepository.getInfoMovie(id),
  });
  const movie = data as Movie;
  return { movie, isLoading, isError };
};

export default useGetMovieData;