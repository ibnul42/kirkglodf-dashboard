'use client'
import { usePathname } from "next/navigation";
import Link from 'next/link';
import DashboardIcon from '@/components/IconComponent/DashboardIcon'
import MapIcon from '@/components/IconComponent/MapIcon'
import CameraIcon from '@/components/IconComponent/CameraIcon'
import StatisticsIcon from '@/components/IconComponent/StatisticsIcon'
import WeatherIcon from '@/components/IconComponent/WeatherIcon'
import SettingsIcon from '@/components/IconComponent/SettingsIcon'
import ArrowIcon from '@/components/IconComponent/ArrowIcon'
import React from "react";
export default function Sidebar({ isSidebarOpen, toggleSidebar }) {
    const pathname = usePathname();

    const links = [
        { label: "Dashboard", url: "/dashboard", child: true, icon: DashboardIcon },
        { label: "Map", url: "/map", child: false, icon: MapIcon },
        { label: "Camera", url: "/camera", child: true, icon: CameraIcon },
        { label: "Statistics", url: "/statistics", child: false, icon: StatisticsIcon },
        { label: "Live Weather", url: "/weather", child: false, icon: WeatherIcon },
        { label: "Settings", url: "/settings", child: false, icon: SettingsIcon },
    ];

    return (
        <div
            className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            onClick={(e) => e.stopPropagation()} // Prevents overlay click from closing sidebar
        >
            <div className="px-4 pt-5 flex justify-center items-center">
                <h2 className="text-2xl font-semibold">Menu</h2>
            </div>
            <ul className="px-4 mt-4 flex flex-col gap-1">
                {links.map((link) => (
                    <Link
                        key={link.url}
                        onClick={toggleSidebar}
                        href={link.url}
                        className={`py-3.5 px-4 cursor-pointer rounded-3xl transition ${pathname === link.url ? "text-white bg-[#31ED93]" : "text-[#9B9B9B] hover:bg-[rgba(49,237,147,0.5)] hover:text-white"
                            } flex justify-between items-center gap-2`}
                    >
                        <div className={`w-10 h-10 ${pathname === link.url ? "bg-[#62f2ad]" : "bg-[#f2f2f2]"} rounded-xl p-1 flex justify-center items-center`}>
                            {React.createElement(link.icon, {
                                className: "w-[18px] h-[18px]",
                                stroke: pathname === link.url ? "#ffffff" : "#8b8b8b"
                            })}
                            {/* <StatisticsIcon className="w-5 h-5" stroke="#8b8b8b" />              */}
                        </div>
                        <div className="flex-1 flex justify-between items-center">
                            {link.label}
                            {link.child && <ArrowIcon className="w-6 h-6" stroke={pathname === link.url ? "#ffffff" : "#d4d4d4"} />}
                        </div>
                    </Link>
                ))}
            </ul>
        </div>
    );
};