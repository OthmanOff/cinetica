'use client'
import MovieCard from "../../../components/ui/MovieCard";
import ShowCard from "../../../components/ui/ShowCard";
import useGetDiscoverMoviesAndShows from "./useCase/useGetDiscoverMoviesAndShows";
import DiscoverCarrousel from "./Components/discoverCarrousel";
const Discover = () => {
  const { movies, shows, isError, isLoading } = useGetDiscoverMoviesAndShows();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error :&#40;</p>;
  return (
   <DiscoverCarrousel movies={movies} shows={shows} />
  );
};
export default Discover;
