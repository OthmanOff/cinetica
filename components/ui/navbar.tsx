import React from "react";
import { Input } from "@/components/ui/input";
const Navbar: React.FC = () => {
  return (
    <div className="w-full h-14 flex justify-between items-center px-4 border-b-2 border-stone-400/50">
      <span className="text-2xl dark:text-white">🎬 Cinetica</span>
      <Input
        placeholder="Search a movie..."
        className="w-290 rounded-xl"
      ></Input>
    </div>
  );
};

export default Navbar