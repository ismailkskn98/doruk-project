import React from 'react'
import { useSidebarStore } from '@/store/sidebarStore';
import { motion } from 'motion/react'

export default function SidebarOpenButton() {
    const setSidebarOpen = useSidebarStore(state => state.setSidebarOpen);
    const sidebarOpen = useSidebarStore(state => state.sidebarOpen);

    return (
        <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="relative w-7 h-7 flex items-center justify-center cursor-pointer"
            aria-label="Menüyü aç/kapat"
        >
            <div className="relative w-6 h-6">
                <motion.span
                    className="absolute left-0 top-1 block h-0.5 w-6 bg-black rounded-full"
                    animate={sidebarOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.25 }}
                />

                <motion.span
                    className="absolute left-0 top-3 block h-0.5 w-6 bg-black rounded-full"
                    animate={sidebarOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.2 }}
                />

                <motion.span
                    className="absolute left-0 top-5 block h-0.5 w-6 bg-black rounded-full"
                    animate={sidebarOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.25 }}
                />
            </div>
        </button>
    )
}
