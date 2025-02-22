import React from 'react'
import CurrentTime from './CurrentTime'
import BatteryIcon from './IconComponent/BatteryIcon'
import WifiIcon from './IconComponent/WifiIcon'
import NetworkIcon from './IconComponent/NetworkIcon'

export default function Header() {
  return (
    <div className='py-2 px-3 flex justify-between items-center'>
      <div className="">
        <CurrentTime />
      </div>
      <div className="flex gap-2">
        <NetworkIcon className='w-7 h-auto' />
        <WifiIcon className='w-3 h-auto' />
        <BatteryIcon className='w-5 h-auto' />
      </div>
    </div>
  )
}
