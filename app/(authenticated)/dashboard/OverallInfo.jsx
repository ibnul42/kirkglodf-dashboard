'use client'
import React from 'react'
import dynamic from "next/dynamic";
import ArrowIcon from '@/components/IconComponent/ArrowIcon'

export default function OverallInfo() {
    return (
        <div className="flex-1 space-y-6">
            <div className=" flex items-center gap-3">
                <p className='text-2xl font-semibold'>Living Room</p>
                <ArrowIcon className="w-6 h-6" stroke="#31ED93" />
            </div>
            <article>
                <p className='text-sm text-[#9B9B9B]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro deserunt dolorum quasi dignissimos ipsum. Minus, distinctio. Esse perferendis autem architecto.</p>
            </article>
            <div className="">
                {/* <SingleInfo /> */}
            </div>
        </div>
    )
}

// const SingleInfo = () => {
//     const icons = {
//         Entertainment: dynamic(() => import('@assets/entertainment.svg'), { ssr: false }),
//         Connectivity: dynamic(() => import('@assets/connectivity.svg'), { ssr: false }),
//         Health: dynamic(() => import('@assets/health.svg'), { ssr: false }),
//         Internet: dynamic(() => import('@assets/internet.svg'), { ssr: false }),
//     };

//     const allConnect = [
//         { name: 'Entertainment', value: '95%' },
//         { name: 'Connectivity', value: '80%' },
//         { name: 'Health', value: '90%' },
//         { name: 'Internet', value: '154', text: true },
//     ];

//     return (
//         <div className="flex gap-5">
//             {allConnect.map(({ name, value, text }) => {
//                 const Icon = icons[name];
//                 return (
//                     <div key={name} className="flex gap-2 lg:gap-4 items-center">
//                         <Icon className="w-6 h-auto" />
//                         <div>
//                             <p className="text-lg lg:text-2xl font-semibold">{value} {text && <span className='text-sm lg:text-lg font-medium'>MB</span>}</p>
//                             <p className="text-sm text-[#9B9B9B]">{name}</p>
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

