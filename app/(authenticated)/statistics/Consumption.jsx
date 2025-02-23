import React from 'react';

const options = [
    { label: 'Living Room', status: 15, style: 'bg-gradient-to-t from-[#CBACFF] to-[#E7D9FF] shadow-[0_3px_6px_3px_rgba(203,172,255,0.4)]' },
    { label: 'Kitchen', status: 20, style: 'bg-gradient-to-t from-[#FFA726] to-[#FFD95A] shadow-[0_3px_6px_3px_rgba(255,167,38,0.4)]' },
    { label: 'Attic', status: 13, style: 'bg-gradient-to-t from-[#FF6F61] to-[#FF9E80] shadow-[0_3px_6px_3px_rgba(255,111,97,0.4)]' },
    { label: 'Garage', status: 23, style: 'bg-gradient-to-t from-[#64B5F6] to-[#BBDEFB] shadow-[0_3px_6px_3px_rgba(100,181,246,0.4)]' },
    { label: 'Basement', status: 20, style: 'bg-gradient-to-t from-[#81C784] to-[#C8E6C9] shadow-[0_3px_6px_3px_rgba(129,199,132,0.4)]' },
];

export default function Consumption() {
    return (
        <div className="shadow-[0_10px_88px_36px_rgba(2,106,56,0.05)] p-4 rounded-3xl">
            <p className='opacity-70 text-sm pb-3'>Consumption by Room</p>
            <div className="grid grid-cols-5 gap-3">
                <div className="col-span-2 space-y-3 flex flex-col items-center justify-center">
                    <p className='text-5xl font-medium text-[#31ED93]'>471.3</p>
                    <p className='text-xs text-[#9B9B9B] uppercase'>watts</p>
                </div>
                <div className="col-span-3 space-y-3">
                    {options.map((option, index) => (
                        <div key={index} className="flex gap-2 items-center text-sm opacity-70">
                            <div className={`w-3 h-3 rounded-md overflow-hidden ${option.style}`}></div>
                            <p className='flex-1'>{option.label}</p>
                            <p>{option.status}%</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
