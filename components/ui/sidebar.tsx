import { Airplay, Film, LayoutGrid, Smile, UsersRound } from "lucide-react";
import React from "react";
const Sidebar: React.FC = () => { return <div className="text-xl flex flex-[0.5]  flex-col border-r-2 border-stone-400/50 h-full box-border">
    <span className="flex gap-2 p-4 ">
        <LayoutGrid />
        Discover
    </span>
    <span className=" text-[#646464] px-2 ">Movies</span>
    <div className="flex flex-col px-4 my-2 gap-2">
        <span className="flex items-center gap-2 ">
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
</div>;
}

export default Sidebar;