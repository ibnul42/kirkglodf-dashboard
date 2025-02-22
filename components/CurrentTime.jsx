'use client';
import { useState, useEffect } from 'react';

export default function CurrentTime() {
    const [time, setTime] = useState(getFormattedTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getFormattedTime());
        }, 10000); // Update every 10 seconds

        return () => clearInterval(interval);
    }, []);

    function getFormattedTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        return `${hours}:${minutes.toString().padStart(2, '0')}`;
    }

    return <span className='text-xs'>{time}</span>;
}
