import React from 'react'

function Gallery() {
  return (
    <div className='flex mx-2 lg:mx-24 mt-24 lg:mt-32 gap-x-3 lg:gap-x-12 relative'>
        <div>
            <h1 className='text-3xl lg:text-5xl font-bold'>Our Gallery</h1>
            <p className='text-sm lg:text-lg font-thin tracking-wider w-[150px] lg:w-[450px] mt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quod sapiente ducimus aspernatur doloribus voluptatibus.</p>
        </div>
        
        <div>
            <img src='gallery1.png' className='w-full h-[300px] lg:h-[600px]' />
        </div>
        <img src='gallery2.png' className='absolute -bottom-20 lg:bottom-[-50px] left-24 lg:left-[300px] w-[100px] lg:w-[250px] h-[150px] lg:h-[300px]' />
    </div>
  )
}

export default Gallery