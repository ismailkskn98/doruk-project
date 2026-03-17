'use client'

import { RxHamburgerMenu } from 'react-icons/rx'
import Logo from '../Logo'

export default function Header() {
    return (
        <header className="relative z-40 flex items-center justify-between px-8 py-8 h-30">
            <div id="logo-container" className="relative">
                <div id="site-logo" className="relative z-40 flex items-center gap-1.5 font-bold leading-[0.9] text-[32px]">
                    <Logo />
                </div>
            </div>

            <RxHamburgerMenu className="text-2xl" />
        </header>
    )
}