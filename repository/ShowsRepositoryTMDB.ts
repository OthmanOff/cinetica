import { TVShow } from "@/entities/TVShow";
import {ShowRepository} from "@/repository/interface/ShowRepository"

export class ShowRepositoryTMDB implements ShowRepository{
    async getPopularShows(): Promise<TVShow[]>{
        try{
            const req = await fetch("/api/shows/popular");
            const data = await req.json()
            return data.data as Promise<TVShow[]>
        }
        catch{
            throw new Error("Error while fetching : /api/shows/popular");
        }
    }
    async getOnAirgShows(): Promise<TVShow[]>{
        try{
            const req = await fetch("/api/shows/on-the-air");
            const data = await req.json()
            return data.data as Promise<TVShow[]>
        }
        catch{
            throw new Error("Error while fetching : /api/shows/on-the-air");
        }
    }
    async getTopRatedShows(): Promise<TVShow[]>{
        try{
            const req = await fetch("/api/shows/top-rated");
            const data = await req.json()
            return data.data as Promise<TVShow[]>
        }
        catch{
            throw new Error("Error while fetching : /api/shows/top-rated");
        }
    }
}
