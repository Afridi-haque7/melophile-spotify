// import React from 'react'
import {
  VolumeX,
  Volume2,
} from "lucide-react";
import { Slider } from "@mui/material";

const VolumeController = () => {
  return (
    <div className=" flex justify-center px-5 gap-5 items-center">
      <Volume2 className="w-8 h-8"/>
      <Slider/>
    </div>
  )
}

export default VolumeController
