import React from 'react'
import image from '../../assets/AOT_Thumbnail.jpg'
export default function AnimeVideo() {
  return (
   <div>
    <video src="video.mp4" className='w-full h-[60vh]' poster={image} controls></video>
   </div>
  )
}
