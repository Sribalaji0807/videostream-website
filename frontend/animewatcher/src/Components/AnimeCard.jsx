import React from 'react'
import {FaPlay} from 'react-icons/fa'
import image from '../assets/AOT_Thumbnail.jpg'
import { LuSubtitles } from "react-icons/lu";
export default function AnimeCard() {
  return (
    <div className='relative flex flex-col items-center'>
      <div className='relative'>
        <img 
          src={image} 
          alt="Attack on Titan" 
          className='w-60 transition-transform duration-300 transform hover:scale-105 hover:z-10' 
        />

        {/* Play button that appears on hover */}
        <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300'>
          <FaPlay className='text-white text-3xl' />
        </div>
      </div>

      <div className='mt-1 flex flex-row gap-1 items-center'>
        <LuSubtitles />
        <p>34</p>
      </div>
      <p>Attack On Titan</p>
    </div>
  )
}
