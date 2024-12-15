import { Airplay, Film, LayoutGrid, Smile, UsersRound } from "lucide-react";
import React from "react";
import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <div className="text-xl flex flex-[0.5]  flex-col border-r-2 border-stone-400/50 h-full box-border">
      <span className="flex gap-2 p-4 ">
        <LayoutGrid />
        Discover
      </span>
      <span className=" text-[#646464] px-2 ">Movies</span>
      <div className="flex flex-col px-4 my-2 gap-2">
        <span className="flex items-center gap-2 ">
          <Film />
          <Link href="/home/movies/now-playing">Now Playing</Link>
        </span>
        <span className="flex items-center gap-2">
          <UsersRound />
          <Link href="/home/movies/popular">Popular</Link>
        </span>
        <span className="flex items-center gap-2">
          <Smile />
          <Link href="/home/movies/top-rated">Top rated</Link>
        </span>
      </div>
      <span className="text-[#646464] px-2">TV Shows</span>
      <div className="flex flex-col px-4 my-2 gap-2">
        <span className="flex items-center gap-2">
          <Airplay />
          <Link href="/home/shows/on-the-air">On the air</Link>
        </span>
        <span className="flex items-center gap-2">
          <UsersRound />
          <Link href="/home/shows/popular">Popular</Link>
        </span>
        <span className="flex items-center gap-2">
          <Smile />
          <Link href="/home/shows/top-rated"> Top Rated</Link>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
