import React from 'react'

function News() {
  return (
    <div className='mt-24'>
        <h1 className='text-lg text-[#97A483] font-bold text-center lg:text-left lg:mx-32 '>NEWS</h1>
        <div className='flex justify-between mx-10 lg:mx-32 mt-4 items-center'>
            <h1 className='text-3xl lg:text-4xl font-bold tracking-wide'>Lastest Articles</h1>
            <button className='bg-[#345E40] text-white p-3 rounded-lg w-[150px]'>EXPLORE</button>
        </div>
        
        <div className='grid grid-cols-3 mx-4 lg:mx-32 mt-16 gap-x-4 lg:gap-x-28 text-center lg:text-left'>
           <div>
                <img src='news1.png' className='w-[350px]' />
                <p className='font-bold text-sm lg:w-[350px] mt-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, in?</p>
                <button className='mt-4 bg-black text-white h-[30px] w-[80px] rounded-lg'>Read</button>
           </div>
           <div>
                <img src='news2.png' className='w-[350px]' />
                <p className='font-bold text-sm lg:w-[350px] mt-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, in?</p>
                <button className='mt-4 bg-black text-white h-[30px] w-[80px] rounded-lg'>Read</button>
           </div>
           <div>
                <img src='news3.png' className='w-[350px]' />
                <p className='font-bold text-sm lg:w-[350px] mt-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, in?</p>
                <button className='mt-4 bg-black text-white h-[30px] w-[80px] rounded-lg'>Read</button>
           </div>
        </div>
    </div>
  )
}

export default News