'use client'

import { useQuery } from "@tanstack/react-query";
import { useApplicationRepositoryContext } from "@/repository/ApplicationRepositoyContext";
import { TVShow } from "@/entities/TVShow";


const useGetShowData = (id:number) => {
  const { showRepository } = useApplicationRepositoryContext();
  const { data, isLoading, isError } = useQuery<TVShow>({
    queryKey: ["shows-"+id],
    queryFn: async () => await showRepository.getInfoShows(id),
  });
  console.log(data);
  const show = data as TVShow;
  console.log("from usecase");
  console.log(show);
  return { show, isLoading, isError };
};

export default useGetShowData;