import { Input } from "@/components/ui/input";
import { Airplay, Film, LayoutGrid, Settings, Smile, UsersRound } from "lucide-react";
export default function home() {
  return (
    <div className="flex h-full flex-col w-full">
      <div className="w-full h-14 flex justify-between items-center px-4 border-b-2 border-stone-400/50">
        <span className="text-2xl">🎬 Cinetica</span>

        <Input placeholder="Search a movie..." className="w-290 rounded-xl"></Input>
      </div>
      <div className="flex h-full">
        <div className="text-xl flex flex-[0.5]  flex-col border-r-2 border-stone-400/50 h-full box-border">
          <span className="flex gap-2 p-4">
            <LayoutGrid />
            Discover
          </span>

          <span className=" text-[#646464] px-2">Movies</span>
          <div className="flex flex-col px-4 my-2 gap-2">
            <span className="flex items-center gap-2">
              <Film />
              Now Playing
            </span>
            <span className="flex items-center gap-2">
              <UsersRound />
              Popular
            </span>
            <span className="flex items-center gap-2">
              <Smile />
              Top rated
            </span>
          </div>
          <span className="text-[#646464] px-2">TV Shows</span>
          <div className="flex flex-col px-4 my-2 gap-2">
            <span className="flex items-center gap-2">
              <Airplay />
              On the air
            </span>
            <span className="flex items-center gap-2">
              <UsersRound />
              Popular
            </span>
            <span className="flex items-center gap-2">
              <Smile />
              Top Rated
            </span>
          </div>
        </div>
        <div className="flex-[2] w-full p-2">
          <p className="text-2xl flex items-center gap-2"><Settings /> Coding in progress</p>
        </div>
      </div>
    </div>
  );
}
