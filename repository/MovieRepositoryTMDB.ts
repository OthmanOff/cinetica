import { Movie } from "@/app/entities/Movie";
import { MovieRepository } from "./interface/MovieRepository";

export class MovieRepositoryTMDB implements MovieRepository{
    async getPopularMovies(): Promise<Movie[]> {
        try{
            const req = await fetch("/api/movies/popular");
            const data = await req.json()
            return data.data as Promise<Movie[]>
        }
        catch{
            throw new Error("Error while fetching : /api/movies/popular");
        }
        
    }
    async getNowPlayingMovies(): Promise<Movie[]> {
        try{
            const req = await fetch("/api/movies/now-playing");
            const data = await req.json()
            return data.data as Promise<Movie[]>
        }
        catch{
            throw new Error("Error while fetching : /api/movies/now-playing");
        }
    }
    async getTopRatedMovies(): Promise<Movie[]> {
        try{
            const req = await fetch("/api/movies/top-rated");
            const data = await req.json()
            return data.data as Promise<Movie[]>
        }
        catch{
            throw new Error("Error while fetching : /api/movies/top-rated");
        }
    }
    
}