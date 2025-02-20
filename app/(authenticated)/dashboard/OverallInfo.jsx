'use client'
import React from 'react'
import dynamic from "next/dynamic";
import ArrowIcon from '@/components/IconComponent/ArrowIcon'

export default function OverallInfo() {

    const MenuIcon = dynamic(() => import('@assets/menu.svg'), { ssr: false });
    return (
        <div className="flex-1 space-y-2">
            <div className=" flex items-center gap-3">
                <p className='text-2xl font-semibold'>Living Room</p>
                <ArrowIcon className="w-6 h-6" stroke="#31ED93" />
            </div>
            <article>
                <p className='text-sm text-[#9B9B9B]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro deserunt dolorum quasi dignissimos ipsum. Minus, distinctio. Esse perferendis autem architecto.</p>
            </article>
            <div className="">
                {/* <div className="">
                    <MenuIcon className="w-4 h-auto" />
                </div> */}
            </div>
        </div>
    )
}
