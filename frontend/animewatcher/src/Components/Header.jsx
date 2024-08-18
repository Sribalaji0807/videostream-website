import React from 'react'
import { Navbar } from 'flowbite-react'
import {CgProfile} from 'react-icons/cg'
export default function Header() {
  return (
 <Navbar className='mt-4'>
  <div className='w-full flex justify-between gap-2 flex-wrap items-between'>

  <Navbar.Toggle className='lg:hidden'/>

  <Navbar.Brand className='flex-3'>
    <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">Anime Watcher</span>
  </Navbar.Brand>
  <Navbar.Collapse className='hidden lg:flex mt-5 flex-2'>
    <Navbar.Link href="/">GENRES</Navbar.Link>
    <Navbar.Link href="/about">TYPES</Navbar.Link>
    <Navbar.Link href="/contact">UPDATED</Navbar.Link>
    <Navbar.Link href="/contact">ADDED</Navbar.Link>
    <Navbar.Link href="/contact">ONGOING</Navbar.Link>
    <Navbar.Link href="/contact">UPCOMING</Navbar.Link>
    <Navbar.Link href="/contact">SCHEDULE</Navbar.Link>

  </Navbar.Collapse>
<div className='flex gap-5'>   
  <div className='min-w-screen'>
    <button className='float-left bg-red-500 p-3 '>EN</button>
    <button className='p-3'>JP</button>
  </div>
  <div className='flex   items-center gap-2'>
  <CgProfile className='text-lg' />
  <button>Sign in</button>
  </div>
  </div>
</div>
 </Navbar>
    
  )
}
