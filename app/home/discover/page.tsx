'use client'
import useGetDiscoverMoviesAndShows from "./useCase/useGetDiscoverMoviesAndShows";
import DiscoverCarrousel from "../../../components/ui/discoverCarrousel";
const Discover = () => {
  const { movies, shows, isError, isLoading } = useGetDiscoverMoviesAndShows();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error :&#40;</p>;
  return (
   <DiscoverCarrousel movies={movies} shows={shows} />
  );
};
export default Discover;
