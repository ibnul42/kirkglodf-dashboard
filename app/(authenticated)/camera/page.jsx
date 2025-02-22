'use client'
import Header from '@/components/Header'
import NavbarWrapper from '@/components/NavbarWrapper'
import React from 'react'
import CameraView from './CameraView'
import CameraOption from './CameraOption'
import { HomeContextProvider } from '@/app/context-api'

export default function CameraPage() {
    return (
        <div className='h-full w-full flex flex-col'>
            <Header />
            <HomeContextProvider>
                <NavbarWrapper>
                    <CameraOption />
                </NavbarWrapper>
                <CameraView />
            </HomeContextProvider>
        </div>
    )
}
