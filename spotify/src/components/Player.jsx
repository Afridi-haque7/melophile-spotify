// import React from 'react'

import Body from "./Body"
import Footer from "./Footer"
import Sidebar from "./Sidebar"

const Player = () => {
  return (
    <div className="h-[100vh] w-full flex flex-col bg-slate-100">
      {/* <div>
        <Header />
      </div> */}
      <div className="z-1 flex flex-row h-full">
        <Sidebar />
        <Body />
      </div>
      <div className="z-10">
        <Footer />
      </div>
    </div>
  );
}

export default Player
