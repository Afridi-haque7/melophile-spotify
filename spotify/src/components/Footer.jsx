// import React from 'react'

import MusicController from "./MusicController";
import VolumeController from "./VolumeController";

const Footer = () => {
  return (
    <div
      className="w-full pb-10 z-10 flex sticky 
    bottom-0 bg-gradient-to-b from-zinc-900 to-gray-900 
    text-white justify-between items-center overflow-hidden"
    >
      <div className="basis-1/5 flex justify-start items-center text-white pl-5 pt-2">
        <img
          src="https://marketplace.canva.com/EAFLwztjloU/1/0/1600w/canva-black-ethereal-trendy-modern-album-cover-_mKJmQbqzNA.jpg"
          alt=""
          className="w-16 h-16 mr-2 object-contain"
        />
        <div>
          <h2>Song</h2>
          <p>Singer</p>
        </div>
      </div>
      <div className="basis-3/5">
        <MusicController />
      </div>
      <div className="basis-1/5">
        <VolumeController />
      </div>
    </div>
  );
}

export default Footer
