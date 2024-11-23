import React from 'react';
import vid from '../../images/main video2.mp4';

export default function Home() {
  return (
    <div className="relative w-full h-full">
      <div className="h-full absolute w-full" style={{ filter: 'brightness(0.3)' }}>
        <video autoPlay muted loop className="h-full w-full object-cover">
          <source src={vid} type="video/mp4" className='w-fit' />
        </video>
      </div>

      <div className='h-full w-full z-30 absolute flex justify-center items-center'>
        <div className='flex flex-col gap-14 justify-center items-center'>
          <div className='text-white text-7xl font-semibold flex gap-4 justify-center'><span>Your Shield Against</span><div className='flex gap-4'><span className='text-[#184b81]'>Cyber</span><span className='text-[#279dd7]'>Threats!</span></div></div>
          <div className='flex flex-col gap-6'>
            <div className='text-[#b9b9b8] text-center text-2xl'>Welcome to TrojanTrap! Scan and secure your files and URLs with ease.</div>
            <div className='text-[#b9b9b8] text-center text-2xl'>Enjoy real-time virus detection, instant results, nationwide accessibility, and 24/7 online scanning.</div>
          </div>
          <button className='text-white p-3 bg-[#279dd7] w-[150px] rounded-lg font-semibold hover:bg-[#184b81] transition-all duration-150'>Scan Virus</button>
        </div>
      </div>
    </div>
  )
}
