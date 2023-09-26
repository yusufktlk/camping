import React from 'react'

function About() {
  return (
    <div>
        <div className='text-center flex flex-col mt-10 lg:mt-24 lg:gap-y-3' id='about'>
            <h1 className='lg:text-xl text-[#97A483] min-w-[320px] w-[370px]  lg:m-auto font-bold'>ABOUT</h1>
            <h1 className='text-[#2D2D2D] min-w-[320px] w-[370px]  lg:w-[900px] lg:m-auto text-base lg:text-5xl font-bold '>Welcome To Glamour Camping Ground</h1>
            <p className='text-[#555555] font-bold min-w-[320px] w-[370px]  lg:w-[900px] lg:m-auto mt-2 lg:mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tenetur repudiandae, natus temporibus voluptas doloremque ea veritatis? Quae nostrum in quod labore illum recusandae consequuntur numquam suscipit dignissimos quisquam inventore possimus animi adipisci, eveniet laborum iure molestias natus sint perferendis esse facere impedit! Dolorem ipsa earum facere. Velit?</p>
        </div>

        <div className='flex w-[370px] lg:w-[900px] lg:justify-around lg:gap-x-4 lg:mx-32 mt-14 items-center lg:ml-80 '>
            <div>
                <img src='about1.png' className='m-auto w-10 lg:w-24 lg:h-14' />
                <h1 className='mt-4 text-center text-[12px] lg:text-base font-bold text-[#2D2D2D]'>30 Camper SITES</h1>
            </div>
            <h1 className='border-r-2 border-black h-[100px]'></h1>
            <div>
                <img src='about2.png' className='m-auto w-10 lg:w-24 lg:h-14' />
                <h1 className='mt-4 text-center text-[12px] lg:text-base font-bold text-[#2D2D2D]'>24 Camper SITES</h1>
            </div>
            <h1 className='border-r-2 border-black h-[100px]'></h1>
            <div>
                <img src='about3.png' className='m-auto w-10 lg:w-24 lg:h-14' />
                <h1 className='mt-4 text-center text-[12px] lg:text-base font-bold text-[#2D2D2D]'>10 TENT SITES</h1>
            </div>
            <h1 className='border-r-2 border-black h-[100px]'></h1>
            <div>
                <img src='about4.png' className='m-auto w-10 lg:w-24 lg:h-14' />
                <h1 className='mt-4 text-center text-[12px] lg:text-base font-bold text-[#2D2D2D]'>10 GLAMP SITES</h1>
            </div>
            <h1 className='border-r-2 border-black h-[100px]' ></h1>
            <div>
                <img src='about5.png' className='m-auto w-10 lg:w-16 lg:h-14' />
                <h1 className='mt-4 text-center text-[12px] lg:text-base font-bold text-[#2D2D2D]'>10 CABIN SITES</h1>
            </div>
        </div>

        <div className=' mt-24 lg:mt-32 grid lg:grid-flow-col gap-y-10 ml-[25px] lg:ml-[100px] lg:mx-32 lg:gap-x-12 text-center items-center'>
            <div>
                <img src='a1.png' className='w-[320px] lg:w-[400px] lg:h-[300px]' />
                <h1 className='font-bold text-[#2D2D2D] mr-20 lg:mr-0 text-lg mt-2'>Camping Are For Tents</h1>
                <p className='w-[320px] lg:w-[400px] mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa at doloribus quis dolor accusantium fuga, esse incidunt placeat maxime? Debitis voluptate beatae corporis eos aspernatur!</p>
            </div>
            <div>
                <img src='a2.png' className='w-[320px] lg:w-[400px] h-[300px]'   />
                <h1 className='font-bold text-[#2D2D2D] mr-20 lg:mr-0 text-lg mt-2'>Trailers And RV Spots</h1>
                <p className='w-[320px] lg:w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa at doloribus quis dolor accusantium fuga, esse incidunt placeat maxime? Debitis voluptate beatae corporis eos aspernatur!</p>
            </div>
            <div>
                <img src='a3.png' className='w-[320px] lg:w-[400px] h-[300px] '  />
                <h1 className='font-bold text-[#2D2D2D] mr-20 lg:mr-0 text-lg mt-2'>Cabins And Glamping</h1>
                <p className='w-[320px] lg:w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa at doloribus quis dolor accusantium fuga, esse incidunt placeat maxime? Debitis voluptate beatae corporis eos aspernatur!</p>
            </div>
            
        </div>
    </div>
  )
}

export default About