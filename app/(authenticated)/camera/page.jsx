'use client'
import Header from '@/components/Header'
import NavbarWrapper from '@/components/NavbarWrapper'
import React from 'react'
import CameraView from './CameraView'
import CameraOption from './CameraOption'

export default function CameraPage() {
    return (
        <div className='h-full w-full flex flex-col'>
            <Header />
            <NavbarWrapper>
                <CameraOption />
            </NavbarWrapper>
            <CameraView />
        </div>
    )
}
