"use client";
import useGetShowData from "./useCase/useGetShowsData";
import Image from "next/image";
import useGetCastShow from "./useCase/useGetCastShow";
import { User } from "lucide-react";
interface ShowDetailsProps {
  id: string;
}
const baseUrl = "https://image.tmdb.org/t/p/w500";
const TVShowPage: React.FC<ShowDetailsProps> = ({ id }) => {
  const { show, isLoading, isError } = useGetShowData(Number.parseInt(id));
  const { cast } = useGetCastShow(Number.parseInt(id));
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error :&#40;</p>;
  }

  return (
    <div className="relative bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center h-full w-full"
        style={{ backgroundImage: `url(${baseUrl + show.backdrop_path})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="relative z-10 text-white px-4 sm:px-8 py-12 md:flex md:justify-between items-center">
        <div className="flex justify-center md:w-1/3">
          <Image
            src={baseUrl + show.poster_path}
            alt={show.name}
            className="w-64 h-96 object-cover rounded-xl shadow-lg"
            width="200"
            height="300"
          />
        </div>

        <div className="md:w-2/3 md:pl-10">
          <h1 className="text-4xl sm:text-5xl font-bold">{show.name}</h1>
          <p className="text-lg sm:text-xl mt-2">
            {show.genres.map((genre) => genre.name).join(", ")} |{" "}
            {show.first_air_date}{" "}
          </p>
          <p>
            {show.number_of_episodes} episodes | {show.number_of_seasons}{" "}
            seasons
          </p>

          <div className="flex items-center mt-4">
            <span className="text-xl font-semibold">{show.vote_average}</span>
            <span className="ml-2 text-gray-300">IMDb Rating</span>
          </div>

          <p className="mt-4 text-base sm:text-lg">{show.overview} </p>
          <p className="text-3xl mt-4">Cast :</p>
          <div className="flex flex-wrap gap-4 ">
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
    </div>
  );
};

export default TVShowPage;
