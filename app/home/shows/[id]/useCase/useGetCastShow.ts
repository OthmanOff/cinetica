'use client'
import { useQuery } from "@tanstack/react-query";
import { useApplicationRepositoryContext } from "@/repository/ApplicationRepositoyContext";
import { Person } from "@/entities/Person";

const useGetCastShow = (id:number) => {
  const { showRepository } = useApplicationRepositoryContext();
  const { data, isLoading, isError } = useQuery<Person[]>({
    queryKey: ["shows-credits-"+id],
    queryFn: async () => await showRepository.getCastShow(id),
  });
  const cast = data as Person[];
  return { cast, isLoading, isError };
};

export default useGetCastShow;