'use client'
import { useQuery } from "@tanstack/react-query";
import { useApplicationRepositoryContext } from "@/repository/ApplicationRepositoyContext";
import { Image } from "@/entities/Image";

const useGetImageMovie = (id:number) => {
  const { movieRepository } = useApplicationRepositoryContext();
  const { data, isLoading, isError } = useQuery<Image[]>({
    queryKey: ["movies-images-"+id],
    queryFn: async () => await movieRepository.getImagesMovie(id),
  });
  const images = data as Image[];
  return { images, isLoading, isError };
};

export default useGetImageMovie;