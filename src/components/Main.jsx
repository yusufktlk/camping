import React from 'react'
import Navbar from './Navbar'
import BookingCard from './BookingCard'

function Main() {
  return (
    <div>
        <Navbar />
        <img src='bg.png' className='absolute top-0 -z-50 h-[500px] lg:h-screen bg-cover ' />
        <BookingCard />
    </div>
  )
}

export default Main