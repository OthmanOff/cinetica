"use client";
import useGetPopularMovies from "./useCase/useGetOnTheAirShows";
import ShowCard from "@/components/ui/ShowCard";
export default function Popular() {
  const { data, isLoading, isError } = useGetPopularMovies();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error :&#40;</p>;
  return (
    <div className=" justify-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {data?.map((movie) => (
        <ShowCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}
