import NavbarWrapper from '@/components/NavbarWrapper'
import React from 'react'

export default function SettingsPage() {
    return (
        <div className='w-full h-full flex flex-col gap-6'>
            <NavbarWrapper>
                <h1 className='text-2xl font-semibold text-[#010C06]'>Settings</h1>
            </NavbarWrapper>
            <section className='flex-1 flex justify-center items-start'>
                <div className="w-full max-w-6xl grid grid-cols-2">
                    <div className="px-6 py-6 rounded-3xl shadow-[0_10px_88px_36px_rgba(2,106,56,0.05)] flex gap-3">
                        <div className="bg-[#31ED93] h-11 w-11 rounded-full"></div>
                        <div className="h-full flex flex-col justify-around">
                            <p className='text-lg'>Smart Home</p>
                            <p className='text-sm text-[rgba(126,126,126,0.7)]'>Lorem ipsum dolor sit amet consetetur</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
