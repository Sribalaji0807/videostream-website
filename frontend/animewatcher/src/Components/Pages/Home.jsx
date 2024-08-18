import React from 'react'
import AnimeCard from '../AnimeCard'
import { TextInput,Button } from 'flowbite-react'
import {HiOutlineSearch} from 'react-icons/hi'
export default function Home() {
  return (
    <div className='w-full min-h-screen'>
 <div className='w-full h-96 flex flex-col justify-center items-center'>
<div className='min-w-screen flex flex-row gap-4 p-3 '>
<TextInput 
id='search'
placeholder='Search Anime'
icon={HiOutlineSearch}
className='w-96 border-none focus:ring-0'

/>    
<Button className=' border-none outline-none px-3 bg-red-500'>filter</Button>
 </div>
</div>
<AnimeCard />
</div>
  )
}
