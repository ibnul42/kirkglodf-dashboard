import BackgroundPhoto from '@/components/BackgroundPhoto'
import NavbarWrapper from '@/components/NavbarWrapper'
import Image from 'next/image'
import React from 'react'
import OverallInfo from './OverallInfo'
import AllDevices from './AllDevices'
import Header from '@/components/Header'


export default function page() {
  return (
    <BackgroundPhoto
      src="/assets/dashboard.svg"
      alt="Background Photo"
      style={{display: 'flex', flexDirection: 'column', paddingBottom: '20px'}}
    >
      <Header />
      <NavbarWrapper>
        <h1 className='text-2xl font-semibold text-[#010C06]'>Dashboard</h1>
      </NavbarWrapper>
      <div className="flex gap-2 px-20">
        <OverallInfo />
        <div className="flex gap-2 items-center">
          <div className="border-l mt-10">
            <Image src='/assets/weather.png' height={500} width={500} className='w-32 h-auto' alt='' />
          </div>
          <div className="space-y-2">
            <p className='text-sm text-[#31ED93]'>Today</p>
            <p className='text-sm'>San Francisco</p>
            <p>
              <span className='font-semibold text-5xl'>29</span>
              <span className='text-2xl text-[#9B9B9B]'> / 12°C</span>
            </p>
            <p className='text-sm text-[#9B9B9B]'>Rainy - Cloudy</p>
          </div>
        </div>
      </div>
      <AllDevices />
    </BackgroundPhoto>
  )
}
