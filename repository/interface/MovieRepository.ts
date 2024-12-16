import { Image } from "@/entities/Image";
import {Movie} from "@/entities/Movie";
import { Person } from "@/entities/Person";

export interface MovieRepository{
    getPopularMovies(): Promise<Movie[]>;
    getNowPlayingMovies(): Promise<Movie[]>;
    getTopRatedMovies(): Promise<Movie[]>;
    getDiscoverMovies(): Promise<Movie[]>;
    getInfoMovie(id:number): Promise<Movie>;
    getCastMovie(id:number): Promise<Person[]>;
    getImagesMovie(id:number): Promise<Image[]>;
}
