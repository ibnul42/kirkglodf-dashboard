'use client';
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import DashboardIcon from '@/components/IconComponent/DashboardIcon';
import MapIcon from '@/components/IconComponent/MapIcon';
import CameraIcon from '@/components/IconComponent/CameraIcon';
import StatisticsIcon from '@/components/IconComponent/StatisticsIcon';
import WeatherIcon from '@/components/IconComponent/WeatherIcon';
import SettingsIcon from '@/components/IconComponent/SettingsIcon';
import ArrowIcon from '@/components/IconComponent/ArrowIcon';
import React from "react";
import { useHomeContext } from "@/app/context-api";

export default function Sidebar({ isSidebarOpen, toggleSidebar }) {
    const pathname = usePathname();
    const router = useRouter();
    const { dashboardRooms, cameraRooms, selectedRoom, setSelectedRoom, selectedCamera, setSelectedCamera } = useHomeContext();
    const [expanded, setExpanded] = useState({ dashboard: false, camera: false });

    const links = [
        { label: "Dashboard", url: "/dashboard", child: dashboardRooms, icon: DashboardIcon, key: "dashboard" },
        { label: "Map", url: "/map", child: null, icon: MapIcon },
        { label: "Camera", url: "/camera", child: cameraRooms, icon: CameraIcon, key: "camera" },
        { label: "Statistics", url: "/statistics", child: null, icon: StatisticsIcon },
        { label: "Live Weather", url: "/weather", child: null, icon: WeatherIcon },
        { label: "Settings", url: "/settings", child: null, icon: SettingsIcon },
    ];

    const handleParentClick = (key) => {
        setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const handleChildClick = (room, link) => {
        if (link?.key === 'dashboard') {
            setSelectedRoom(room);
            router.push('/dashboard');
        } else if (link?.key === 'camera') {
            setSelectedCamera(room);
            router.push('/camera');
        }
        toggleSidebar();
    };

    return (
        <div
            className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 flex flex-col ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
            onClick={(e) => e.stopPropagation()}
        >
            <div className="px-4 pt-5 flex justify-center items-center">
                <h2 className="text-2xl font-semibold">Menu</h2>
            </div>
            <ul className="flex-1 px-4 mt-4 flex flex-col gap-1 overflow-y-auto">
                {links.map((link) => (
                    <div key={link.url}>
                        {/* Main Sidebar Links */}
                        <button
                            onClick={link.child ? () => handleParentClick(link.key) : () => router.push(link.url)}
                            className={`py-3.5 px-4 cursor-pointer rounded-3xl transition w-full text-left flex justify-between items-center gap-2 ${pathname.startsWith(link.url) ? "text-white bg-[#31ED93]" : "text-[#9B9B9B] hover:bg-[rgba(49,237,147,0.5)] hover:text-white"}`}
                        >
                            <div className={`w-10 h-10 ${pathname.startsWith(link.url) ? "bg-[#62f2ad]" : "bg-[#f2f2f2]"} rounded-xl p-1 flex justify-center items-center`}>
                                {React.createElement(link.icon, {
                                    className: "w-[18px] h-[18px]",
                                    stroke: pathname.startsWith(link.url) ? "#ffffff" : "#8b8b8b"
                                })}
                            </div>
                            <div className="flex-1 flex justify-between items-center">
                                {link.label}
                                {link.child && (
                                    <ArrowIcon
                                        className={`w-6 h-6 transform transition-transform ${expanded[link.key] ? "rotate-90" : "rotate-0"}`}
                                        stroke={pathname.startsWith(link.url) ? "#ffffff" : "#d4d4d4"}
                                    />
                                )}
                            </div>
                        </button>

                        {/* Expandable Child Rooms with CSS Animation */}
                        <ul
                            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${expanded[link.key] ? "max-h-60 opacity-100 my-2" : "max-h-0 opacity-0"}`}
                        >
                            {link.child?.map((room) => (
                                <li key={room}>
                                    <button
                                        onClick={() => handleChildClick(room, link)}
                                        className={`w-full text-left py-2 px-4 rounded-lg text-sm transition ${(link?.key === 'dashboard' && selectedRoom === room) || (link?.key === 'camera' && selectedCamera === room) ? "bg-[#31ED93]/80 text-white" : "text-[#9B9B9B] hover:bg-[rgba(49,237,147,0.5)] hover:text-white"}`}
                                    >
                                        {room}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </ul>
        </div>
    );
}
