import Header from '@/components/Header'
import NavbarWrapper from '@/components/NavbarWrapper'
import React from 'react'
import Consumption from './Consumption'
import ConsumptionBar from './ConsumptionBar'
import TemperatureGauge from './TemperatureGauge'
import MultiLayerGauge from './MultiLayerGauge'
import TemperatureChart from './TemperatureChart'
import WifiChart from './WifiChart'

export default function StatisticsPage() {
    return (
        <div className='flex flex-col w-full h-full'>
            <Header />
            <NavbarWrapper>
                <h1 className='text-2xl font-semibold text-[#010C06]'>Statistics</h1>
            </NavbarWrapper>
            <div className="flex-1 flex flex-col justify-between">
                <div className="grid grid-cols-[1.65fr_1fr_1fr] gap-6 px-6">
                    <Consumption />
                    <ConsumptionBar />
                    <TemperatureGauge />
                </div>
                <div className="grid grid-cols-[1fr_1.65fr_1fr] gap-6 px-6 py-4">
                    <MultiLayerGauge />
                    <TemperatureChart />
                    <WifiChart />
                </div>
            </div>
        </div>
    )
}
