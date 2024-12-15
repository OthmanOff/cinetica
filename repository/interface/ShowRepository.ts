import { TVShow } from "@/app/entities/TVShow";



export interface ShowRepository{
    getPopularShows(): Promise<TVShow[]>;
    getOnAirgShows(): Promise<TVShow[]>;
    getTopRatedShows(): Promise<TVShow[]>;
}
