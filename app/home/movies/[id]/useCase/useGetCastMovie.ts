'use client'
import { useQuery } from "@tanstack/react-query";
import { useApplicationRepositoryContext } from "@/repository/ApplicationRepositoyContext";
import { Person } from "@/entities/Person";

const useGetCastMovie = (id:number) => {
  const { movieRepository } = useApplicationRepositoryContext();
  const { data, isLoading, isError } = useQuery<Person[]>({
    queryKey: ["movies-credits-"+id],
    queryFn: async () => await movieRepository.getCastMovie(id),
  });
  const cast = data as Person[];
  return { cast, isLoading, isError };
};

export default useGetCastMovie;