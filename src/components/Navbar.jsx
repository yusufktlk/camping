import React from 'react'

function Navbar() {
  return (
    <div className='lg:flex lg:justify-between lg:mx-24 mt-4 text-[16px] lg:text-base items-center'>
       <img src='navbarlogo.png' className='w-24 lg:w-32 m-auto lg:m-0 mb-2 lg:mb-0 ' />
        <div className='flex gap-x-6 lg:gap-x-12 items-center text-white font-bold ml-12 lg:ml-0'>
            <a className='hover:scale-110 duration-500'>Home</a>
            <a className='hover:scale-110 duration-500'>About</a>
            <a className='hover:scale-110 duration-500'>Campground</a>
            <a className='hover:scale-110 duration-500'>Contact</a>
            <a className='font-bold border-2 border-white rounded-lg w-28 lg:w-32 p-2  text-center center hover:scale-110 duration-500'>BOOK</a>
        </div>
    </div>
  )
}

export default Navbar