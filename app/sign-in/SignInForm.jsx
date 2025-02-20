'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { Fragment, useState } from 'react'

export default function SignInForm() {
    const router = useRouter()
    const [code, setCode] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        
        router.push('/dashboard')
    }
    return (
        <Fragment>
            <div className="space-y-3">
                <input
                    type="text"
                    name='code'
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Enter Your Code"
                    className="border border-[#ECECEC] w-full rounded-3xl px-4 py-3 placeholder:text-black placeholder:text-sm outline-none"
                />
                <div className="w-full flex justify-end">
                    <Link
                    href=''
                    className="text-[#31ED93] hover:text-[rgba(49,237,147,0.75)] transition-all text-sm self-end">
                        Reset Code?
                    </Link>
                </div>
            </div>
            <div className="">
                <button
                    onClick={handleSubmit}
                    className="w-full bg-[#31ED93] hover:bg-[rgba(49,237,147,0.75)] text-white rounded-3xl py-4 transition-all text-sm">
                    Connect
                </button>
            </div>
        </Fragment>
    )
}
