import { Movie } from "@/entities/Movie";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
const baseUrl = "https://image.tmdb.org/t/p/w500";
interface CardProps {
  movie: Movie;
}
const MovieCard: React.FC<CardProps> = ({ movie }: CardProps) => {
  return (
    <Link href={`/home/movies/now-playing/${movie.id}`}>
      <div
        className={cn(
          "relative group rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform hover:scale-105"
        )}
      >
        <Image
          src={baseUrl + movie.poster_path}
          alt={movie.title}
          className="w-full h-full object-cover"
          width="200"
          height="300"
        ></Image>

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity"></div>

        <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <h3 className="text-lg font-semibold">{movie.title}</h3>
          <p className="text-sm text-gray-300 line-clamp-2">{movie.overview}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
