import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

export default function Header() {
    return (
        <header className='flex items-center justify-between h-30'>
            <h1 className='text-[32px] font-bold'>
                <span className='font-light'>STUDIO </span>
                DORUK BICER
            </h1>
            <RxHamburgerMenu className='text-3xl' />
        </header>
    )
}
