import React from 'react'
import {BsTwitter, BsMedium} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'
import { Link } from 'react-scroll'


function Footer() {
  return (
    <div className='bg-[#345E40] text-white flex pt-32 pb-12' id='footer'>
        <div className='mx-2 lg:mx-32'>
            <h1 className='text-lg lg:text-5xl font-bold lg:w-[600px]'>SUBSCRIBE TO OUR NEWSLETTER</h1>
            <div className='flex lg:justify-between mt-5'>
                <input placeholder='Enter Your Email Address' className='bg-[#345E40] w-[100px]' />
                <button className='ml-5 lg:ml-0'>Subscribe</button>
            </div>
            <hr className='mt-3' />
            <p className='font-thin text-[12px] lg:text-sm mt-5'>Copyright Dotcreativemarket</p>
        </div>

        <div className=' ml-2 lg:ml-24 mr-20 lg:mr-0'>
            <h1 className='font-bold text-2xl'>Sitemap</h1>
            <div className='flex gap-x-1 lg:gap-x-12 text-[10px] lg:text-base font-thin mt-4'>
                <Link to="home" spy={true} smooth={true} offset={0} duration={700} className="transition duration-500 hover:scale-125 cursor-pointer">Home</Link>
                <Link to="about" spy={true} smooth={true} offset={0} duration={700} className="transition duration-500 hover:scale-125 cursor-pointer">About</Link>
                <Link to="activity" spy={true} smooth={true} offset={50} duration={1000} className="transition duration-500 hover:scale-125 cursor-pointer">Campground</Link>
                <Link to="footer" spy={true} smooth={true} offset={50} duration={1000} className="transition duration-500 hover:scale-125 cursor-pointer">Contact</Link>
            </div>
           <div className='flex flex-col gap-y-4'>
                <h1 className='text-2xl font-bold mt-5 '>Contact</h1>
                <p className='font-thin text-[10px] lg:text-base'>Dotcreativemarket.com</p>
                <p className='font-thin text-[10px] lg:text-base'>info@dotcreativemarket.com</p>
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