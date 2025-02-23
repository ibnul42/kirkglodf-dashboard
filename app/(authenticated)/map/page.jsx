import React from 'react'
import Header from '@/components/Header'
import NavbarWrapper from '@/components/NavbarWrapper'
import MapComponent from './MapComponent'
import SearchBox from './SearchBox'

export default function MapPage() {
    return (
        <div>
            <Header />
            <NavbarWrapper>
                <SearchBox />
            </NavbarWrapper>
            <MapComponent />
        </div>
    )
}
