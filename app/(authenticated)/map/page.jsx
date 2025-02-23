import Header from '@/components/Header'
import NavbarWrapper from '@/components/NavbarWrapper'
// import dynamic from 'next/dynamic';
import React from 'react'
import MapComponent from './MapComponent'

// const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false });

export default function MapPage() {
    return (
        <div>
            <Header />
            <NavbarWrapper>
                <h1 className='text-2xl font-semibold text-[#010C06]'>Map</h1>
            </NavbarWrapper>
            <MapComponent />
        </div>
    )
}
