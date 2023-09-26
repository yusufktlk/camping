import React from 'react'

function Bonfire() {
  return (
    <div className='mb-14 lg:mb-24 relative ml-4 lg:ml-12 w-[420px] lg:w-[1250px]'>
        <img src='bonfire.png' className='lg:mx-24 lg:h-[500px]  opacity-90  ' />
        <h1 className='text-sm lg:text-5xl font-bold text-white w-[390px] lg:w-[800px] absolute top-10 lg:top-40 left-6 lg:left-[420px]'>A Bonfire Is Basically Just A Nightclub In The Mountains</h1>
        <button className='border-2 border-white text-white absolute bottom-12 lg:bottom-40 left-28 lg:left-[570px] lg:p-3 w-[200px] lg:w-[300px] rounded-lg'>CHECK AVAILABILITY</button>
    </div>
  )
}

export default Bonfire