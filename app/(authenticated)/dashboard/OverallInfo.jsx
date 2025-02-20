'use client'
import React from 'react'
import ArrowIcon from '@/components/IconComponent/ArrowIcon'
import EntertainmentIcon from "@assets/entertainment.svg";
import ConnectivityIcon from "@assets/connectivity.svg";
import HealthIcon from "@assets/health.svg";
import InternetIcon from "@assets/internet.svg";

export default function OverallInfo() {
    return (
        <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3">
                <p className='text-2xl font-semibold'>Living Room</p>
                <ArrowIcon className="w-6 h-6" stroke="#31ED93" />
            </div>
            <article>
                <p className='text-sm text-[#9B9B9B]'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro deserunt dolorum quasi dignissimos ipsum. Minus, distinctio. Esse perferendis autem architecto.
                </p>
            </article>
            <div>
                <SingleInfo />
            </div>
        </div>
    );
}

const SingleInfo = () => {
    const allConnect = [
        { name: 'Entertainment', value: '95%', icon: EntertainmentIcon },
        { name: 'Connectivity', value: '80%', icon: ConnectivityIcon },
        { name: 'Health', value: '90%', icon: HealthIcon },
        { name: 'Internet', value: '154', icon: InternetIcon, text: true },
    ];

    return (
        <div className="flex gap-5">
            {allConnect.map(({ name, value, text, icon: Icon }) => (
                <div key={name} className="flex gap-2 lg:gap-4 items-center">
                    <Icon className="w-6 h-auto" />
                    <div>
                        <p className="text-lg lg:text-2xl font-semibold">
                            {value} {text && <span className='text-sm lg:text-lg font-medium'>MB</span>}
                        </p>
                        <p className="text-sm text-[#9B9B9B]'">{name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
