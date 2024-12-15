import React from "react";
import { Input } from "@/components/ui/input";

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-auto md:h-14 justify-between items-center p-4 md:px-4 border-b-2 border-stone-400/50 gap-4 md:gap-0">

      <span className="block text-2xl dark:text-white">🎬 Cinetica</span>
      
   
      <Input
        placeholder="Search a movie..."
        className="self-center w-full md:w-80 rounded-xl"
      />
    </div>
  );
};

export default Navbar;
