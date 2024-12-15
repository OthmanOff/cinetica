"use client";

import useGetMovieData from "./useCase/useGetMovieData";

import Image from "next/image";
interface MovieDetailsProps {
  id: string;
}
const baseUrl = "https://image.tmdb.org/t/p/w500";

const MovieDetails: React.FC<MovieDetailsProps> = ({ id }) => {
  const { movie, isLoading, isError } = useGetMovieData(Number.parseInt(id));

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching movie data.</p>;
  }

  return (
    <div className="relative bg-black h-full">
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
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
