// import React from 'react'
import { Search } from "lucide-react";
import { useStateProvider } from "../utils/StateProvider";

const Header = () => {
  const [{user}, dispatch] = useStateProvider();

  return (
    <div className="w-full p-5 flex justify-between items-center sticky top-0 bg-gradient-to-b to-cyan-900 from-slate-900">
      <div className="flex basis-3/5 relative">
        <Search className="absolute top-2 left-2 cursor-pointer text-white" />
        <input
          type="text"
          className="w-full h-10 
        bg-transparent border border-white/30 rounded-full
        p-2 pl-10"
        />
      </div>
      <div className="flex basis-2/5 justify-end items-center gap-4 text-white">
        <img
          src={user?.images[0].url}
          alt="Bordered avatar"
          className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
        />
        <h4 className="font-bold text-xl">{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header
