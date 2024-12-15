import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import MovieCard from "@/components/ui/MovieCard";
import ShowCard from "@/components/ui/ShowCard";
import { Movie } from "@/entities/Movie";
import { TVShow } from "@/entities/TVShow";
import { Film,Tv } from "lucide-react";
const DiscoverCarrousel = ({
  movies,
  shows,
}: {
  movies: Movie[];
  shows: TVShow[];
}) => {
  return (
    <div>
      <span className="flex items-center gap-2 text-2xl m-4">
        <Film />
        Movies
      </span>
      <Carousel>
        <CarouselContent>
          {movies.map((movie) => (
            <CarouselItem
              key={movie.id}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <MovieCard movie={movie} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <span className="flex items-center gap-2 text-2xl m-4">
        <Tv />
        TV Shows
      </span>
      <Carousel className="w-full mt-8 h-14 ">
        <CarouselContent>
          {shows.map((show) => (
            <CarouselItem
              key={show.id}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <ShowCard movie={show} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default DiscoverCarrousel;
