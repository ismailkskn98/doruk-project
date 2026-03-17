'use client'

import { RxHamburgerMenu } from 'react-icons/rx'
import Logo from '../Logo'

export default function Header() {
    return (
        <header className="relative z-40 flex items-center justify-between px-8 py-8">
            <div id="logo-slot" className="relative">
                <div id="site-logo" className="inline-block relative z-40">
                    <Logo />
                </div>
            </div>

            <RxHamburgerMenu className="text-2xl" />
        </header>
    )
}