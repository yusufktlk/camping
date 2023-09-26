import React from 'react'

function Activity() {
  return (
    <div className='lg:flex lg:gap-x-44 mt-24 lg:mt-28 lg:mx-32 mb-32' id='activity'>
        <div>
            <h1 className='lg:text-xl text-center lg:text-left text-[#97A483] font-bold' >ACTIVITY</h1>
            <p className='text-2xl lg:text-5xl font-bold ml-4 lg:ml-0 lg:w-[550px] mt-4'>Camp Will Be For You What You Want It To Be.</p>
            <div className='relative ml-2 lg:ml-0'>
                <img src='activitybg.png' className='w-[550px] mt-12 lg:mt-40' />
                <img src='activity.png' className='w-[300px] lg:w-[400px] absolute top-0 left-20' />
            </div>
        </div>
        <div className='flex gap-x-12 lg:gap-x-20'>
            <div className='flex flex-col gap-y-12 lg:gap-y-32 ml-3 lg:ml-0 mt-12 lg:mt-0'>
                <div className='flex flex-col gap-y-4'>
                    <img src='activity1.png' className='w-20' />
                    <h1 className='text-xl font-bold'>Wild Life</h1>
                    <p className='w-[200px] lg:w-[250px] tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, aperiam officia incidunt voluptate voluptates cumque.</p>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <img src='activity3.png' className='w-20' />
                    <h1 className='text-xl font-bold'>Canoeing</h1>
                    <p className='w-[200px] lg:w-[250px] tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, aperiam officia incidunt voluptate voluptates cumque.</p>
                </div>
            </div>

            <div className='flex flex-col gap-y-32 mt-32 lg:mt-20 '>
                <div className='flex flex-col gap-y-4'>
                    <img src='activity2.png' className='w-20' />
                    <h1 className='text-xl font-bold'>Bonfire</h1>
                    <p className='w-[200px] lg:w-[250px]  tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, aperiam officia incidunt voluptate voluptates cumque.</p>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <img src='activity4.png' className='w-20' />
                    <h1 className='text-xl font-bold'>Hiking</h1>
                    <p className='w-[200px] lg:w-[250px] tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, aperiam officia incidunt voluptate voluptates cumque.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Activity