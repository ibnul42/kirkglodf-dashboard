'use client'
import React from 'react'
import ArrowIcon from '@/components/IconComponent/ArrowIcon'
import Image from 'next/image';
import ArrowFillIcon from '@/components/IconComponent/ArrowFillIcon';

export default function OverallInfo() {
    return (
        <div className="flex-1 space-y-4 pt-5">
            <div className="flex items-center gap-3">
                <p className='text-2xl font-semibold'>Living Room</p>
                <ArrowFillIcon className="w-5 h-auto" stroke="#31ED93" />
            </div>
            <article>
                <p className='text-xs text-[#9B9B9B]'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro deserunt dolorum quasi dignissimos ipsum. Minus, distinctio. Esse perferendis autem architecto.
                </p>
            </article>
            <div className='py-3'>
                <SingleInfo />
            </div>
        </div>
    );
}

const SingleInfo = () => {
    const allConnect = [
        { name: 'Entertainment', value: '95%', icon: '/assets/icons/entertainment.svg' },
        { name: 'Connectivity', value: '80%', icon: '/assets/icons/connectivity.svg' },
        { name: 'Health', value: '90%', icon: '/assets/icons/health.svg' },
        { name: 'Internet', value: '154', icon: '/assets/icons/internet.svg', text: true },
    ];

    return (
        <div className="flex gap-5">
            {allConnect.map(({ name, value, text, icon }) => (
                <div key={name} className="flex gap-2 lg:gap-4 items-center">
                    <Image src={icon} width={500} height={500} alt='' className='w-6 h-auto' />
                    <div>
                        <p className="text-lg lg:text-2xl font-medium">
                            {value} {text && <span className='text-sm lg:text-lg font-medium'>MB</span>}
                        </p>
                        <p className="text-xs text-[#9B9B9B]">{name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
