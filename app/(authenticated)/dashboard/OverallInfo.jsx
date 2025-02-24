'use client'
import React, { useState, useRef } from 'react';
import ArrowFillIcon from '@/components/IconComponent/ArrowFillIcon';
import useClickOutside from '@/hooks/useClickOutside';

export default function OverallInfo() {
    const [selectedRoom, setSelectedRoom] = useState('Living Room');
    const [isOpen, setIsOpen] = useState(false);

    const buttonRef = useRef();
    const dropdownRef = useClickOutside(() => setIsOpen(false), buttonRef);

    const rooms = ['Living Room', 'Dining', 'bedroom 1', 'bedroom 2'];

    const handleSelection = (room) => {
        setSelectedRoom(room);
        setIsOpen(false);
    };

    const handleButtonClick = (event) => {
        event.stopPropagation();
        setIsOpen((prev) => !prev)
    };

    return (
        <div className="flex-1 space-y-4 pt-4">
            <div className="relative flex items-center gap-3">
                <p className="text-2xl font-semibold">{selectedRoom}</p>

                {/* Dropdown Toggle Button */}
                <button
                    ref={buttonRef}
                    onClick={handleButtonClick}
                    className="transition-transform duration-300"
                >
                    <ArrowFillIcon
                        className={`w-5 h-auto transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                        stroke="#31ED93"
                    />
                </button>

                {/* Dropdown List */}
                {isOpen && (
                    <div ref={dropdownRef} className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg overflow-hidden w-48 z-10">
                        {rooms.map((room) => (
                            <p
                                key={room}
                                onClick={() => handleSelection(room)}
                                className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                            >
                                {room}
                            </p>
                        ))}
                    </div>
                )}
            </div>

            {/* Description */}
            <article>
                <p className="text-xs text-[#9B9B9B]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro deserunt dolorum quasi dignissimos ipsum. Minus, distinctio. Esse perferendis autem architecto.
                </p>
            </article>

            {/* Info Section */}
            <div className="py-3">
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
                    <img src={icon} alt={name} className="w-6 h-auto" />
                    <div>
                        <p className="text-lg lg:text-2xl font-medium">
                            {value} {text && <span className="text-sm lg:text-lg font-medium">MB</span>}
                        </p>
                        <p className="text-xs text-[#9B9B9B]">{name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
