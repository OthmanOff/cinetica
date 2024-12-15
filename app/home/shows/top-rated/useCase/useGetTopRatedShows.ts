'use client'
import { useQuery } from "@tanstack/react-query";
import { useApplicationRepositoryContext } from "@/repository/ApplicationRepositoyContext";
import { TVShow } from "@/entities/TVShow";

const useGetTopRatedShows = () => {
  const { showRepository } = useApplicationRepositoryContext();
  const { data, isLoading, isError } = useQuery<TVShow[]>({
    queryKey: ["popular-movies"],
    queryFn: async () => await showRepository.getTopRatedShows(),
  });
  return { data, isLoading, isError };
};

export default useGetTopRatedShows;