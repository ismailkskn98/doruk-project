'use client'

import { motion } from 'motion/react'
import Logo from '../Logo';
import { useIntroStore } from '@/store/introStore';
import SidebarOpenButton from '../common/sidebarOpenButton';

export default function Header() {
    const introComplete = useIntroStore(state => state.introComplete);


    return (
        <header className="relative z-40 flex items-center justify-between h-30">
            <div id="logo-container">
                <motion.div
                    className="flex flex-row gap-1.5 leading-[0.9] font-bold text-[32px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: introComplete ? 1 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                    <Logo />
                </motion.div>
            </div>
            <SidebarOpenButton />
        </header>
    )
}