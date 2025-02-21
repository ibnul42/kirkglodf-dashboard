import React from 'react'
import ArrowIcon from '@/components/IconComponent/ArrowIcon'

export default function AllDevices() {
    return (
        <div className='space-y-4 px-4'>
            <div className="flex items-center gap-2 px-4">
                <div className="flex-1">
                    <h2 className='text-lg font-medium'>Active Devices</h2>
                    <p className='text-sm text-[#9B9B9B]'>View, control, and monitor all your smart devices.</p>
                </div>
                <div className="">
                    <button className='text-[#31ED93] uppercase'>+ add new device</button>
                </div>
            </div>
            <div className="relative px-12 h-auto">
                <div className="absolute top-0 left-0 h-full flex items-center">
                    <button className='rotate-90 bg-[#ECECEC] w-8 h-8 rounded-full flex items-center justify-center hover:scale-105 transition-all group'>
                        <ArrowIcon className='w-3 h-auto group-hover:scale-105' />
                    </button>
                </div>
                <div className="absolute top-0 right-0 h-full flex items-center">
                    <button className='-rotate-90 bg-[#ECECEC] w-8 h-8 rounded-full flex items-center justify-center hover:scale-105 transition-all group'>
                        <ArrowIcon className='w-3 h-auto group-hover:scale-105' />
                    </button>
                </div>
                <div className="flex gap-2">
                    <div className="w-40 h-52 bg-[#31ED93] rounded-3xl overflow-hidden"></div>
                </div>
            </div>
        </div>
    )
}
