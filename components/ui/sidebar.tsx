import {
  Airplay,
  Film,
  LayoutGrid,
  Smile,
  UsersRound,
  Menu,
} from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";

const Sidebar: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-screen flex overflow-hidden">
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-black text-xl border-r-2 border-stone-400/50 transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:static md:translate-x-0 flex flex-col`}
      >
  
        <span className="flex gap-2 p-4 mt-10">
          <LayoutGrid />
          <Link href="/home/discover">Discover</Link>
        </span>

        <span className="text-[#646464] px-2">Movies</span>
        <div className="flex flex-col px-4 my-2 gap-2">
          <span className="flex items-center gap-2">
            <Film />
            <Link href="/home/movies/now-playing">Now Playing</Link>
          </span>
          <span className="flex items-center gap-2">
            <UsersRound />
            <Link href="/home/movies/popular">Popular</Link>
          </span>
          <span className="flex items-center gap-2">
            <Smile />
            <Link href="/home/movies/top-rated">Top Rated</Link>
          </span>
        </div>


        <span className="text-[#646464] px-2">TV Shows</span>
        <div className="flex flex-col px-4 my-2 gap-2">
          <span className="flex items-center gap-2">
            <Airplay />
            <Link href="/home/shows/on-the-air">On the Air</Link>
          </span>
          <span className="flex items-center gap-2">
            <UsersRound />
            <Link href="/home/shows/popular">Popular</Link>
          </span>
          <span className="flex items-center gap-2">
            <Smile />
            <Link href="/home/shows/top-rated">Top Rated</Link>
          </span>
        </div>
      </div>

  
      <div
        className={`flex-1 h-full overflow-auto transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-0"
        } md:ml-64`}
      >

        <button
          className="md:hidden p-2 text-white rounded-full fixed top-4 left-2 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle Sidebar"
        >
          <Menu />
        </button>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
