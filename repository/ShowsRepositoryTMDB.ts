import { Person } from "@/entities/Person";
import { TVShow } from "@/entities/TVShow";
import { ShowRepository } from "@/repository/interface/ShowRepository";

export class ShowRepositoryTMDB implements ShowRepository {
  async getPopularShows(): Promise<TVShow[]> {
    try {
      const req = await fetch("/api/shows/popular");
      const data = await req.json();
      return data.data as Promise<TVShow[]>;
    } catch {
      throw new Error("Error while fetching : /api/shows/popular");
    }
  }
  async getOnAirShows(): Promise<TVShow[]> {
    try {
      const req = await fetch("/api/shows/on-the-air");
      const data = await req.json();
      return data.data as Promise<TVShow[]>;
    } catch {
      throw new Error("Error while fetching : /api/shows/on-the-air");
    }
  }
  async getTopRatedShows(): Promise<TVShow[]> {
    try {
      const req = await fetch("/api/shows/top-rated");
      const data = await req.json();
      return data.data as Promise<TVShow[]>;
    } catch {
      throw new Error("Error while fetching : /api/shows/top-rated");
    }
  }
  async getDiscoverShows(): Promise<TVShow[]> {
    try {
      const req = await fetch("/api/shows/discover");
      const data = await req.json();
      return data.data as Promise<TVShow[]>;
    } catch {
      throw new Error("Error while fetching : /api/shows/discover");
    }
  }
  async getInfoShows(id: number): Promise<TVShow> {
    try {
      const req = await fetch(`/api/shows/${id}`);
      const data = await req.json();
      return data.data as Promise<TVShow>;
    } catch {
      throw new Error("Error while fetching : /api/shows/${id}");
    }
  }
  async getCastShow(id: number): Promise<Person[]> {
    try {
      const req = await fetch(`/api/shows/${id}/cast`);
      const data = await req.json();
      return data.data as Promise<Person[]>;
    } catch {
      throw new Error("Error while fetching : /api/shows/${id}/cast");
    }
  }
}
