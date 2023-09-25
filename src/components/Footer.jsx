import React from 'react'
import {BsTwitter, BsMedium} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'


function Footer() {
  return (
    <div className='bg-[#345E40] text-white flex pt-32 pb-12'>
        <div className='mx-4 lg:mx-32'>
            <h1 className='text-2xl lg:text-5xl font-bold lg:w-[600px]'>SUBSCRIBE TO OUR NEWSLETTER</h1>
            <div className='flex lg:justify-between mt-5'>
                <input placeholder='Enter Your Email Address' className='bg-[#345E40]' />
                <button className='ml-5 lg:ml-0'>Subscribe</button>
            </div>
            <hr className='mt-3' />
            <p className='font-thin text-sm mt-5'>Copyright Dotcreativemarket</p>
        </div>

        <div className=' ml-10 lg:ml-24 mr-4 lg:mr-0'>
            <h1 className='font-bold text-2xl'>Sitemap</h1>
            <div className='flex gap-x-2 lg:gap-x-12 text-[12px] lg:text-base font-thin mt-4'>
                <a>Home</a>
                <a>About</a>
                <a>Campground</a>
                <a>News</a>
            </div>
           <div className='flex flex-col gap-y-4'>
                <h1 className='text-2xl font-bold mt-5 '>Contact</h1>
                <p className='font-thin text-[12px] lg:text-base'>Dotcreativemarket.com</p>
                <p className='font-thin text-[12px] lg:text-base'>info@dotcreativemarket.com</p>
                <div className='flex gap-x-5 lg:gap-x-12'>
                    <BsTwitter className='lg:w-8 lg:h-8' />
                    <AiFillInstagram className='lg:w-8 lg:h-8' />
                    <FaTiktok className='lg:w-8 lg:h-8' />
                    <BsMedium className='lg:w-8 lg:h-8' />
                </div>
           </div>
        </div>
    </div>
  )
}

export default Footer