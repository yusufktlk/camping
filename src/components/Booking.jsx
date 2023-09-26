import React from 'react'

function Booking() {
  return (
    <div>
        <h1 className='text-lg lg:text-xl text-[#97A483] font-bold text-center w-[380px] lg:w-[400px} ' id='booking'>BOOKING</h1>
        <h3 className='text-2xl lg:text-5xl font-bold w-[360px] lg:w-[900px] ml-2 lg:ml-12  lg:m-20 text-center mt-3 lg:mt-4'>Book Your Dream Vacation Now</h3>
    
        <div className='grid lg:grid-cols-2 gap-y-20 lg:px-44 mt-12 lg:mt-24 items-center'>
            <div>
                <img src='booking1.png' className='min-w-[370px] w-[370px] max-w-[468x] lg:w-[550px] h-[350px]' />
                <div className='flex justify-between items-center mt-4 '>
                    <h1 className='text-xl text-[#345E40] font-bold ml-2 lg:ml-0 '>Bell Glamp One</h1>
                    <h5 className='mr-16 lg:mr-14 font-thin text-[13px] lg:text-lg'>1-6 Persons | 25m21</h5>
                </div>
                <p className='tracking-wide ml-2 lg:ml-0 min-w-[370] w-[370px] max-w-[468px]  lg:w-[550px] mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ipsam tempore aspernatur optio rerum hic? Commodi itaque eveniet, possimus facilis est molestias, in ipsum enim nostrum nobis quaerat?</p>
                <button className='bg-[#345E40] text-white font-bold text-sm w-[200px] lg:w-[250px] h-[40px] rounded-lg mt-4 ml-2 lg:ml-0'>CHECK AVAILABILITY</button>
            </div>
            <div>
                <img src='booking2.png' className='min-w-[370px] w-[370px] max-w-[468x] lg:w-[550px]  h-[350px]' />
                <div className='flex justify-between items-center mt-4 '>
                    <h1 className='text-xl text-[#345E40] font-bold ml-2 lg:ml-0 '>Caravan Solar Tent</h1>
                    <h5 className='mr-16 lg:mr-14 font-thin text-[13px] lg:text-lg'>2-6 Persons | 27m</h5>
                </div>
                <p className='tracking-wide ml-2 lg:ml-0 min-w-[370] w-[370px] max-w-[468px] lg:w-[550px] mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ipsam tempore aspernatur optio rerum hic? Commodi itaque eveniet, possimus facilis est molestias, in ipsum enim nostrum nobis quaerat?</p>
                <button className='bg-[#345E40] text-white font-bold text-sm w-[200px] lg:w-[250px] h-[40px] rounded-lg mt-4 ml-2 lg:ml-0'>CHECK AVAILABILITY</button>
            </div>
            <div>
                <img src='booking3.png' className='min-w-[370px] w-[370px] max-w-[468x] lg:w-[550px]  h-[350px]' />
                <div className='flex justify-between items-center mt-4 '>
                    <h1 className='text-xl text-[#345E40] font-bold ml-2 lg:ml-0'>Glamping Tent</h1>
                    <h5 className='mr-16 lg:mr-14 font-thin text-[13px] lg:text-lg'>1-6 Persons | 17m2</h5>
                </div>
                <p className='tracking-wide ml-2 lg:ml-0 min-w-[370] w-[370px] max-w-[468px] lg:w-[550px] mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ipsam tempore aspernatur optio rerum hic? Commodi itaque eveniet, possimus facilis est molestias, in ipsum enim nostrum nobis quaerat?</p>
                <button className='bg-[#345E40] text-white font-bold text-sm w-[200px] lg:w-[250px] h-[40px] rounded-lg mt-4 ml-2 lg:ml-0'>CHECK AVAILABILITY</button>
            </div>
            <div>
                <img src='booking4.png' className='min-w-[370px] w-[370px] max-w-[468x] lg:w-[550px]  h-[350px]' />
                <div className='flex justify-between items-center mt-4 '>
                    <h1 className='text-xl text-[#345E40] font-bold ml-2 lg:ml-0'>Small Cabin Wood</h1>
                    <h5 className='mr-16 lg:mr-14 font-thin text-[13px] lg:text-lg'>1-6 Persons | 25m21</h5>
                </div>
                <p className='tracking-wide ml-2 lg:ml-0 min-w-[370] w-[370px] max-w-[468px] lg:w-[550px] mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ipsam tempore aspernatur optio rerum hic? Commodi itaque eveniet, possimus facilis est molestias, in ipsum enim nostrum nobis quaerat?</p>
                <button className='bg-[#345E40] text-white font-bold text-sm w-[200px] lg:w-[250px] h-[40px] rounded-lg mt-4 ml-2 lg:ml-0'>CHECK AVAILABILITY</button>
            </div>
        </div>
    </div>
  )
}

export default Booking