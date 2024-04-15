// import React from 'react'

import Body from "./Body"
import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"

const Player = () => {
  return (
    <div className="h-[100vh] w-full flex flex-col bg-slate-100 justify-between">
      <div>
        <Header/>
      </div>
      <div className="flex flex-row h-full">
        <Sidebar/>
        <Body/>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  )
}

export default Player
