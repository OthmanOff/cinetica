"use client";

import useGetMovieData from "./useCase/useGetMovieData";
import useGetCastMovie from "./useCase/useGetCastMovie";
import { User } from "lucide-react";
import Image from "next/image";
import useGetImageMovie from "./useCase/useGetImageMovie";
import ImageCarousel from "@/components/ui/ImageCarousel";
interface MovieDetailsProps {
  id: string;
}
const baseUrl = "https://image.tmdb.org/t/p/w500";

const MovieDetails: React.FC<MovieDetailsProps> = ({ id }) => {
  const { movie, isLoading, isError } = useGetMovieData(Number.parseInt(id));
  const { cast } = useGetCastMovie(Number.parseInt(id));
  const { images } = useGetImageMovie(Number.parseInt(id));
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching movie data.</p>;
  }

  return (
    <div className="relative bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center h-full w-full"
        style={{ backgroundImage: `url(${baseUrl + movie.backdrop_path})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="relative z-10 text-white px-4 sm:px-8 py-12 md:flex md:justify-between items-center">
        <div className="flex justify-center md:w-1/3">
          <Image
            src={baseUrl + movie.poster_path}
            alt={movie.title}
            className="w-64 h-96 object-cover rounded-xl shadow-lg"
            width="200"
            height="300"
          />
        </div>

        <div className="md:w-2/3 md:pl-10">
          <h1 className="text-4xl sm:text-5xl font-bold">{movie.title}</h1>
          <p className="text-lg sm:text-xl mt-2">
            {movie.release_date} | {movie.runtime} minutes |{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>

          <div className="flex items-center mt-4">
            <span className="text-xl font-semibold">{movie.vote_average}</span>
            <span className="ml-2 text-gray-300">TMDB Rating</span>
          </div>

          <p className="mt-4 text-base sm:text-lg">{movie.overview}</p>
          <div className="flex items-center mt-4">
            <span className="text-xl font-semibold">{cast?.length} actors</span>
          </div>
          <div className="flex flex-wrap gap-4">
            {cast?.map((person) => (
              <div key={person.name} className="flex items-center mt-4">
                {person.profile_path ? (
                  <Image
                    src={baseUrl + person.profile_path}
                    alt={person.name}
                    className="w-12 h-12 rounded-full"
                    width="200"
                    height="300"
                  />
                ) : (
                  <User className="w-12 h-12 rounded-full" />
                )}

                <span className="ml-2 text-gray-300">{person.character}</span>
              </div>
            ))}
          </div>
        </div>
      
      </div>
      
      <ImageCarousel images={images} />
    </div>
  );
};

export default MovieDetails;
