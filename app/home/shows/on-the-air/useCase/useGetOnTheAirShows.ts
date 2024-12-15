'use client'
import { useQuery } from "@tanstack/react-query";
import { useApplicationRepositoryContext } from "@/repository/ApplicationRepositoyContext";
import { TVShow } from "@/entities/TVShow";

const useGetOnTheAirShows = () => {
  const { showRepository } = useApplicationRepositoryContext();
  const { data, isLoading, isError } = useQuery<TVShow[]>({
    queryKey: ["popular-movies"],
    queryFn: async () => await showRepository.getOnAirShows(),
  });
  return { data, isLoading, isError };
};

export default useGetOnTheAirShows;