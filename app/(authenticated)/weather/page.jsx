import Header from '@/components/Header'
import FlashIcon from '@/components/IconComponent/FlashIcon'
import HumidityIcon from '@/components/IconComponent/HumidityIcon'
import OutsideIcon from '@/components/IconComponent/OutsideIcon'
import TemperatureIcon from '@/components/IconComponent/TemperatureIcon'
import NavbarWrapper from '@/components/NavbarWrapper'
import React from 'react'

export default function WeatherPage() {
    return (
        <div className='w-full h-full flex flex-col'>
            <Header />
            <NavbarWrapper>
                <h1 className='text-2xl font-semibold text-[#010C06]'>Live Weather</h1>
            </NavbarWrapper>
            <section className='flex-1 flex justify-center items-start pt-6'>
                <div className="w-full max-w-[720px] grid grid-cols-2 gap-4">
                    <div className="col-span-2 shadow-[0_10px_88px_36px_rgba(2,106,56,0.05)] px-10 py-8 rounded-3xl">
                        <div className="flex items-center gap-2">
                            <div className="flex-1 space-y-2">
                                <h2 className="text-sm font-semibold text-[#31ED93]">Today's Weather</h2>
                                <p className="text-4xl text-[#171E1E] font-semibold px-6">
                                    <span>San Francisco 23</span>
                                    <span className='text-lg text-[#9B9B9B] font-normal'> / 12°C</span>
                                </p>
                                <p className="text-sm text-[#9B9B9B]">Rainy - Cloudy</p>
                            </div>
                            <div className="">
                                <img src='/assets/weather.png' height={100} width={100} alt='' className='w-32 h-auto' />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 shadow-[0_10px_88px_36px_rgba(2,106,56,0.05)] px-10 py-5 rounded-3xl flex items-center justify-center gap-4">
                        <div className="w-20 h-20 rounded-full bg-[rgba(49,237,147,0.1)] flex items-center justify-center">
                            <TemperatureIcon className='w-auto h-12' />
                        </div>
                        <div className="h-full flex flex-col justify-around">
                            <p className='text-4xl font-semibold'>29°C</p>
                            <p className='text-sm text-[#9B9B9B]'>Living Room</p>
                        </div>
                    </div>
                    <div className="col-span-1 shadow-[0_10px_88px_36px_rgba(2,106,56,0.05)] px-10 py-5 rounded-3xl flex items-center justify-center gap-4">
                        <div className="w-20 h-20 rounded-full bg-[rgba(49,237,147,0.1)] flex items-center justify-center">
                            <OutsideIcon className='w-auto h-9' />
                        </div>
                        <div className="h-full flex flex-col justify-around">
                            <p className='text-4xl font-semibold'>44%</p>
                            <p className='text-sm text-[#9B9B9B]'>Outside</p>
                        </div>
                    </div>
                    <div className="col-span-1 shadow-[0_10px_88px_36px_rgba(2,106,56,0.05)] px-10 py-5 rounded-3xl flex items-center justify-center gap-4">
                        <div className="w-20 h-20 rounded-full bg-[rgba(49,237,147,0.1)] flex items-center justify-center">
                            <HumidityIcon className='w-auto h-10' />
                        </div>
                        <div className="h-full flex flex-col justify-around">
                            <p className='text-4xl font-semibold'>87 m³</p>
                            <p className='text-sm text-[#9B9B9B]'>Water</p>
                        </div>
                    </div>
                    <div className="col-span-1 shadow-[0_10px_88px_36px_rgba(2,106,56,0.05)] px-10 py-5 rounded-3xl flex items-center justify-center gap-4">
                        <div className="w-20 h-20 rounded-full bg-[rgba(49,237,147,0.1)] flex items-center justify-center">
                            <FlashIcon className='w-auto h-10' />
                        </div>
                        <div className="h-full flex flex-col justify-around">
                            <p className='text-4xl font-semibold'>100%</p>
                            <p className='text-sm text-[#9B9B9B]'>Electricity</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
