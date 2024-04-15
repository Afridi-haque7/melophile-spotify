// import React from 'react'
import {
  CirclePlay,
  CirclePause,
  Shuffle,
  SkipBack,
  SkipForward,
  VolumeX,
  Volume2,
  Heart,
  Repeat,
} from "lucide-react";



const MusicController = () => {
  return (
    <div className="text-white w-full p-2 flex justify-around items-center">
      <Shuffle className="w-5 h-5 font-bold sm:w-7 sm:h-7 cursor-pointer transition ease-in-out duration-150 hover:scale-110" />
      <SkipBack className="w-5 h-5 font-bold sm:w-7 sm:h-7 cursor-pointer transition ease-in-out duration-150 hover:scale-110" />
      <CirclePlay className="w-5 h-5 font-bold sm:w-14 sm:h-14 cursor-pointer transition ease-in-out duration-150 hover:scale-110" />
      <SkipForward className="w-5 h-5 font-bold sm:w-7 sm:h-7 cursor-pointer transition ease-in-out duration-150 hover:scale-110" />
      <Repeat className="w-5 h-5 font-bold sm:w-7 sm:h-7 cursor-pointer transition ease-in-out duration-150 hover:scale-110" />
    </div>
  );
}

export default MusicController
