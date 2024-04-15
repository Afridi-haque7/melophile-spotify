// import React from 'react'

import Body from "./Body"
import Footer from "./Footer"
import Sidebar from "./Sidebar"

const Player = ({ spotify }) => {
  return (
    <div className="h-[100vh] w-full flex flex-col bg-slate-100 overflow-hidden">
      <div className="z-1 flex flex-row h-full overflow-hidden">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <div className="z-10">
        <Footer />
      </div>
    </div>
  );
}

export default Player
