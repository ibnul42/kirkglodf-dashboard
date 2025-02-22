import HomeIcon from '@/components/IconComponent/HomeIcon'
import NavbarWrapper from '@/components/NavbarWrapper'
import ThemeIcon from '@/components/IconComponent/ThemeIcon'
import ContactIcon from '@/components/IconComponent/ContactIcon'
import ModifyIcon from '@/components/IconComponent/ModifyIcon'
import PrivacyIcon from '@/components/IconComponent/PrivacyIcon'
import NotificationIcon from '@/components/IconComponent/NotificationIcon'
import React from 'react'
import Header from '@/components/Header'

const items = [
    { title: 'Smart Home', desc: 'Lorem ipsum dolor sit amet consetetur', icon: HomeIcon },
    { title: 'Theme', desc: 'Lorem ipsum dolor sit amet consetetur', icon: ThemeIcon },
    { title: 'Contact us', desc: 'Lorem ipsum dolor sit amet consetetur', icon: ContactIcon },
    { title: 'Modify Devices', desc: 'Lorem ipsum dolor sit amet consetetur', icon: ModifyIcon },
    { title: 'Privacy policy', desc: 'Lorem ipsum dolor sit amet consetetur', icon: PrivacyIcon },
    { title: 'Notifications', desc: 'Lorem ipsum dolor sit amet consetetur', icon: NotificationIcon }
]

export default function SettingsPage() {
    return (
        <div className='w-full h-full flex flex-col'>
            <Header />
            <NavbarWrapper>
                <h1 className='text-2xl font-semibold text-[#010C06]'>Settings</h1>
            </NavbarWrapper>
            <section className='flex-1 flex justify-center items-start px-20 pt-6'>
                <div className="w-full max-w-6xl grid grid-cols-2 gap-5">
                    {items.map((item, index) => (
                        <div key={index} className="px-6 py-6 rounded-3xl shadow-[0_10px_88px_36px_rgba(2,106,56,0.05)] flex gap-3">
                            <div className="bg-[#31ED93] h-12 w-12 rounded-full flex justify-center items-center">
                                <item.icon className='w-5 h-auto opacity-75' />
                            </div>
                            <div className="h-full flex flex-col justify-around">
                                <p className='text-lg'>{item.title}</p>
                                <p className='text-xs text-[rgba(126,126,126,0.7)]'>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
