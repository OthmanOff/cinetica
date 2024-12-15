import {Movie} from "@/app/entities/Movie";

export interface MovieRepository{
    getPopularMovies(): Promise<Movie[]>;
    getNowPlayingMovies(): Promise<Movie[]>;
    getTopRatedMovies(): Promise<Movie[]>;
}
