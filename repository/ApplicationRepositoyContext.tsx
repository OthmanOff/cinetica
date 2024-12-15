import { createContext, useContext, PropsWithChildren } from "react";
import { MovieRepository } from "./interface/MovieRepository";
import { MovieRepositoryTMDB } from "./MovieRepositoryTMDB";
import { ShowRepositoryTMDB } from "./ShowsRepositoryTMDB";
import { ShowRepository } from "./interface/ShowRepository";

interface ApplicationRepository {
  movieRepository: MovieRepository,
  showRepository : ShowRepository
}
const ApplicationRepositoryContext =
  createContext<ApplicationRepository | null>(null);

export const useApplicationRepositoryContext = () => {
  const context = useContext(ApplicationRepositoryContext);
  if (context == null) {
    throw new Error(
      "useApplicationRepositoryContext must me wrap in a ApplicationRepositoryContext"
    );
  }
  return context;
};

export const ApplicationRepositoryContextProvider = ({
  children,
}: PropsWithChildren) => {
  return (
    <ApplicationRepositoryContext.Provider
      value={{ movieRepository: new MovieRepositoryTMDB(), showRepository: new ShowRepositoryTMDB()}}
    >
      {children}
    </ApplicationRepositoryContext.Provider>
  );
};