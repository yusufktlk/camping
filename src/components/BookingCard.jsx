import React from 'react'

function BookingCard() {
  return (
    <div className='flex justify-around items-center gap-x-4 text-[7px] lg:text-base lg:px-12 lg:pt-2 font-bold bg-white rounded-lg min-w-[375px] w-[455px] max-w-[468px] lg:max-w-[1200px] lg:w-[1200px] h-[100px] lg:h-[150px] lg:m-auto mt-[360px] lg:mt-[550px] text-[#345E40] '>
        <div>
            <div className='flex gap-x-2 items-center mb-4'>
                <img src='date.png' className='w-4 xl:h-4' />  
                <h1>CHECK IN</h1>
            </div>
            <input type='date'  className='border-b-2 border-black'/>
        </div>

        <div>
            <div className='flex gap-x-2 items-center mb-4'>
                <img src='date.png' className='w-4 h-4' />  
                <h1>CHECK OUT</h1>
            </div>
            <input type='date' className='border-b-2 border-black'/>
        </div>

        <div>
            <div className='flex gap-x-2 items-center mb-4'>
                <img src='guest.png' className='w-4 h-4' />  
                <h1>GUEST</h1>
            </div>
            <select  className='border-b-2 border-black'>
                <option>1 Adult</option>
                <option>2 Adult</option>
                <option>3 Adult</option>
                <option>1 Adult + 1 Kid</option>
                <option>2 Adult + 2 Kid</option>
                <option>3 Adult + 3 Kid</option>
            </select>
        </div>
        <div>
            <div className='flex gap-x-2 items-center mb-4'>
                <img src='accommodation.png' className='w-4 h-4' />  
                <h1>ACCOMMODATION</h1>
            </div>
            <select  className='border-b-2 border-black w-full'>
                <option>Camper</option>
                <option>Caravan</option>
                <option>Tent</option>
                <option>Glamp</option>
                <option>Cabin</option>
            </select>
        </div>
        <button className='bg-[#345E40] h-10 lg:h-12 w-12 lg:w-44 rounded-lg text-white'>BOOK NOW</button>
    </div>
  )
}

export default BookingCard