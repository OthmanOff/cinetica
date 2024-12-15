'use client'
import { useQuery } from "@tanstack/react-query";
import { useApplicationRepositoryContext } from "@/repository/ApplicationRepositoyContext";
import { TVShow } from "@/entities/TVShow";

const useGetPopularShows = () => {
  const { showRepository } = useApplicationRepositoryContext();
  const { data, isLoading, isError } = useQuery<TVShow[]>({
    queryKey: ["popular-movies"],
    queryFn: async () => await showRepository.getPopularShows(),
  });
  return { data, isLoading, isError };
};

export default useGetPopularShows;