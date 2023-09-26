import React from 'react'
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <div className='lg:flex lg:justify-between lg:mx-24 mt-4 text-[12px] lg:text-base items-center'>
       <img src='navbarlogo.png' className='w-24 lg:w-32 m-auto lg:m-0 mb-2 lg:mb-0 ' />
        <div className='flex gap-x-8 lg:gap-x-12 items-center text-white font-bold ml-8 lg:ml-0'>
            <Link to="home" spy={true} smooth={true} offset={0} duration={700} className="transition duration-500 hover:scale-125 cursor-pointer">Home</Link>
            <Link to="about" spy={true} smooth={true} offset={0} duration={700} className="transition duration-500 hover:scale-125 cursor-pointer">About</Link>
            <Link to="activity" spy={true} smooth={true} offset={50} duration={1000} className="transition duration-500 hover:scale-125 cursor-pointer">Campground</Link>
            <Link to="footer" spy={true} smooth={true} offset={50} duration={1000} className="transition duration-500 hover:scale-125 cursor-pointer">Contact</Link>
            <Link to="booking" spy={true} smooth={true} offset={50} duration={1000} className='font-bold border-2 border-white rounded-lg w-28 lg:w-32 p-2  text-center center hover:scale-110 duration-500 cursor-pointer'>BOOK</Link>
        </div>
    </div>
  )
}

export default Navbar