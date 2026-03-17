'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link, useRouter } from '@/i18n/navigation'
import { useSidebarStore } from '@/store/sidebarStore'
import SearchMain from '../common/search'

const navItems = [
    {
        name: 'About',
        href: '/about',
        children: [
            { name: 'Doruk BICER', href: '/doruk-bicer' },
            { name: 'STUDIO', href: '/studio' },
        ],
    },
    {
        name: 'Works',
        href: '/works',
        children: [
            { name: 'Art', href: '/works/art' },
            { name: 'Design', href: '/works/design' },
            { name: 'Architecture', href: '/works/architecture' },
            { name: 'Graphic', href: '/works/graphic' },
        ],
    },
    { name: 'Contact', href: '/contact' },
]

export default function SideNavbar() {
    const [openItem, setOpenItem] = useState(null);
    const setSidebarOpen = useSidebarStore(state => state.setSidebarOpen);
    const router = useRouter();

    const toggleItem = (name) => {
        setOpenItem(prev => prev === name ? null : name)
    }

    return (
        <nav className='flex flex-col gap-2.5 px-5 py-10'>
            {navItems.map((item) => (
                <div key={item.name}>
                    {item.children ? (
                        <button type='button' onClick={() => toggleItem(item.name)} className='uppercase font-bold text-2xl w-full text-left cursor-pointer'>
                            {item.name}
                        </button>
                    ) : (
                        <button
                            type='button'
                            onClick={() => {
                                setSidebarOpen(false);
                                setTimeout(() => router.push(item.href), 200);
                            }}
                            className='uppercase font-bold text-2xl block cursor-pointer'
                        >
                            {item.name}
                        </button>
                    )}

                    <AnimatePresence initial={false}>
                        {item.children && openItem === item.name && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className='overflow-hidden'
                            >
                                <div className='flex flex-col gap-2.5 pl-5 py-5'>
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.name}
                                            href={child.href}
                                            onClick={() => {
                                                setSidebarOpen(false);
                                                setTimeout(() => router.push(child.href), 200);

                                            }}
                                            className='uppercase text-2xl font-light text-black cursor-pointer'
                                        >
                                            {child.name}
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
            <SearchMain>
                <button type='button' className='uppercase font-bold text-2xl w-full text-left cursor-pointer'>
                    Search
                </button>
            </SearchMain>
        </nav>
    )
}
