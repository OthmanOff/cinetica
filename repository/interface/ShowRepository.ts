import { TVShow } from "@/entities/TVShow";

export interface ShowRepository{
    getPopularShows(): Promise<TVShow[]>;
    getOnAirShows(): Promise<TVShow[]>;
    getTopRatedShows(): Promise<TVShow[]>;
    getDiscoverShows(): Promise<TVShow[]>;
}
