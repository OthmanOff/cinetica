import { Movie } from "@/entities/Movie";
import { MovieRepository } from "./interface/MovieRepository";
import { Person } from "@/entities/Person";

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
    async getDiscoverMovies(): Promise<Movie[]> {
        try{
            const req = await fetch("/api/movies/discover");
            const data = await req.json()
            return data.data as Promise<Movie[]>
        }
        catch{
            throw new Error("Error while fetching : /api/movies/discover");
        }
    }
    async getInfoMovie(id:number): Promise<Movie>{
        try{
            const req = await fetch(`/api/movies/${id}`);
            const data = await req.json()
            return data.data as Promise<Movie>
        }
        catch{
            throw new Error("Error while fetching : /api/movies/${id}");
        }
    }
    async getCastMovie(id:number): Promise<Person[]> {
        try{
            const req = await fetch(`/api/movies/${id}/cast`);
            const data = await req.json();
            return data.data as Promise<Person[]>;
        }
        catch{
            throw new Error("Error while fetching : /api/movies/${id}/cast");
        }
    }
}