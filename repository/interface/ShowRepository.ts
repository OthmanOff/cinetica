import { TVShow } from "@/entities/TVShow";



export interface ShowRepository{
    getPopularShows(): Promise<TVShow[]>;
    getOnAirgShows(): Promise<TVShow[]>;
    getTopRatedShows(): Promise<TVShow[]>;
}
