'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import RecordingTimer from './RecordingTimer';
import { useHomeContext } from '@/app/context-api';

const cameraImages = {
    "Living Room": "/assets/living-room.png",
    "Study Room": "/assets/study-room.jpg",
    "Bed Room": "/assets/bed-room.jpg",
    "Bed Room 2": "/assets/bed-room-2.jpg",
    "Balcony": "/assets/balcony.jpg",
};

export default function CameraView() {
    const [isVisible, setIsVisible] = useState(true);
    const { selectedCamera, setSelectedCamera } = useHomeContext();

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible((prev) => !prev);
        }, 500);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='flex-1 px-3 pb-4 overflow-hidden'>
            <div className="rounded-[36px] overflow-hidden w-full h-full relative">
                <Image
                    src={cameraImages[selectedCamera] || "/assets/camera.png"}
                    height={500}
                    width={500}
                    alt=''
                    className='w-full h-full object-cover object-center' />
                <div className="absolute top-0 left-0 w-full h-full p-6">
                    <div className="flex justify-between items-center">
                        <div className="">
                            <RecordingTimer initialHours={11} initialMinutes={17} initialSeconds={43} />
                        </div>
                        <div className="py-3 px-4 flex gap-2 items-center bg-[#FF5656] rounded-full">
                            <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center">
                                <div
                                    className={`w-2 h-2 bg-white rounded-full transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"
                                        }`}
                                ></div>
                            </div>
                            <p className="text-xs text-white">Recording</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
