'use client'
import React, { useState } from "react";
import dynamic from "next/dynamic";
import ImageComponent from './ImageComponent';
import Image from "next/image";
// import Sidebar from "./Sidebar";


export default function NavbarWrapper({ children = null }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex items-center justify-between gap-3 px-3 py-2 relative">
        {/* Menu Icon */}
        <div onClick={toggleSidebar} className="p-1 cursor-pointer">
           <Image src='/assets/icons/menu.svg' width={500} height={500} alt='' className='w-4 h-auto' />
        </div>

        {/* Center Content */}
        <div className="flex-1 flex justify-center items-center">
          {children}
        </div>

        {/* Right Section */}
        <div className="flex gap-4">
          <Image src='/assets/icons/notification.svg' width={500} height={500} alt='' className='w-8 h-auto' />
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <ImageComponent src="/assets/profile.jpg" className="object-cover" />
          </div>
        </div>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-[rgba(255,255,255,0.5)] bg-opacity-40 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      {/* <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> */}
    </>
  );
}
