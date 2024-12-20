import { Person } from "@/entities/Person";
import { TVShow } from "@/entities/TVShow";

export interface ShowRepository{
    getPopularShows(): Promise<TVShow[]>;
    getOnAirShows(): Promise<TVShow[]>;
    getTopRatedShows(): Promise<TVShow[]>;
    getDiscoverShows(): Promise<TVShow[]>;
    getInfoShows(id:number): Promise<TVShow>;
    getCastShow(id:number): Promise<Person[]>;
}
