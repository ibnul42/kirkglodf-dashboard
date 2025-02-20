import BackgroundPhoto from '@/components/BackgroundPhoto'
import NavbarWrapper from '@/components/NavbarWrapper'
import React from 'react'

export default function page() {
  return (
    <BackgroundPhoto
      src="/assets/dashboard.svg"
      alt="Background Photo"
    >
      <h1 className='text-2xl font-semibold text-[#010C06]'>Dashboard</h1>
    </BackgroundPhoto>
  )
}
