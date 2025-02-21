'use client'
import React, { useState } from 'react'
import ArrowIcon from '@/components/IconComponent/ArrowIcon'
import ToggleSwitch from '@/components/ToogleSwitch'
import cn from 'classnames'
import Image from 'next/image'

export default function AllDevices() {
    const [devices, setDevices] = useState([
        {
            name: 'temperature', status: true, icon: {
                normal: '/assets/icons/temperature.svg',
                active: '/assets/icons/temperature_white.svg',
                height: '150px',
                iconHeight: '50px',
            }
        },
        {
            name: 'led', status: false, icon: {
                normal: '/assets/icons/led.svg',
                active: '/assets/icons/led_white.svg',
                height: '130px',
                iconHeight: '50px',
            }
        },
        {
            name: 'air conditioner', status: true, icon: {
                normal: '/assets/icons/air-conditioner.svg',
                active: '/assets/icons/air-conditioner_white.svg',
                height: '80px',
                iconHeight: '40px',
            }
        },
        {
            name: 'wifi', status: false, icon: {
                normal: '/assets/icons/wifi.svg',
                active: '/assets/icons/wifi_white.svg',
                height: '70px',
                iconHeight: '40px',
            }
        },
        {
            name: 'humidity', status: false, icon: {
                normal: '/assets/icons/humidity.svg',
                active: '/assets/icons/humidity_white.svg',
                height: '90px',
                iconHeight: '45px',
            }
        },
    ]);
    const [offset, setOffset] = useState(0);
    const cardWidth = 200;
    const totalCards = devices.length;
    const maxOffset = -(totalCards - 1) * cardWidth;

    const handleSlide = (direction = 'left' | 'right') => {
        if (direction === 'left') {
            setOffset(prevOffset => Math.min(prevOffset + cardWidth, 0));
        } else {
            setOffset(prevOffset => Math.max(prevOffset - cardWidth, maxOffset));
        }
    };

    return (
        <div className='space-y-8'>
            <div className="flex items-center gap-2 px-10">
                <div className="flex-1">
                    <h2 className='text-lg font-medium'>Active Devices</h2>
                    <p className='text-sm text-[#9B9B9B]'>View, control, and monitor all your smart devices.</p>
                </div>
                <div>
                    <button className='text-[#31ED93] uppercase'>+ add new device</button>
                </div>
            </div>
            <div className="relative px-4 w-full overflow-hidden flex gap-2">
                <div className="z-40 flex items-center">
                    <button
                        className='rotate-90 bg-[#ECECEC] w-8 h-8 rounded-full flex items-center justify-center hover:scale-105 transition-all group'
                        onClick={() => handleSlide('left')}
                        disabled={offset === 0}
                    >
                        <ArrowIcon className='w-3 h-auto group-hover:scale-105' />
                    </button>
                </div>

                <div className="flex-1 overflow-hidden">
                    <div className="w-full flex gap-4" style={{ transform: `translateX(${offset}px)`, transition: 'transform 0.3s ease' }}>
                        {devices.map((device) => (
                            <div
                                key={device.name}
                                className={cn("w-[200px] h-60 flex-shrink-0 px-6 py-6 rounded-3xl overflow-hidden relative flex flex-col justify-between shadow-[0_10px_38px_-28px_rgba(0,0,0,0.25)]",
                                    device.status ? 'bg-[#31ED93]' : 'bg-white'
                                )}
                            >
                                <Image src={device.status ? device.icon.active : device.icon.normal} height={500} width={500} alt='' className="absolute top-10 right-6 opacity-20" style={{
                                    width: 'auto',
                                    height: device.icon.height,
                                }} />
                                <div className="relative">
                                    <Image src={device.status ? device.icon.active : device.icon.normal} height={500} width={500} alt='' className="top-6 right-6"
                                        style={{
                                            width: 'auto',
                                            height: device.icon.iconHeight,
                                        }}
                                    />
                                </div>
                                <article className={cn("space-y-2",
                                    device.status ? 'text-white' : ''
                                )}>
                                    <p className='text-xl font-medium'>{device.name}</p>
                                    <p className='opacity-70 text-sm'>{device.status ? 'Active' : 'Inactive'}</p>
                                </article>
                                <div className="flex justify-between items-center">
                                    <p className={cn("uppercase text-lg font-medium",
                                        device.status ? 'text-white' : ''
                                    )}>{device.status ? 'on' : 'off'}</p>
                                    <ToggleSwitch
                                        checked={device.status}
                                        bgColor={device.status ? '#ffffff' : '#ECECEC'}
                                        onChange={(state) => {
                                            const updatedDevices = devices.map((d) =>
                                                d.name === device.name ? { ...d, status: state } : d
                                            );
                                            setDevices(updatedDevices);
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="z-40 flex items-center">
                    <button
                        className='-rotate-90 bg-[#ECECEC] w-8 h-8 rounded-full flex items-center justify-center hover:scale-105 transition-all group'
                        onClick={() => handleSlide('right')}
                        disabled={offset === maxOffset}
                    >
                        <ArrowIcon className='w-3 h-auto group-hover:scale-105' />
                    </button>
                </div>
            </div>
        </div>
    );
}
