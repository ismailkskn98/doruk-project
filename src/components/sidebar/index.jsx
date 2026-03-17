'use client';
import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/store/sidebarStore';
import React, { useEffect } from 'react'
import SideNavbar from './sideNavbar';

export default function SideBar() {
    const sidebarOpen = useSidebarStore(state => state.sidebarOpen);

    useEffect(() => {
        if (sidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [sidebarOpen])

    return (
        <aside className={cn('h-screen fixed inset-y-0 right-0 w-[20%] sm:w-90 shadow-sm border-l border-gray-200 z-50 transition-transform duration-500 ease-in-out', {
            'translate-x-0': sidebarOpen,
            'translate-x-full': !sidebarOpen,
        })}>
            <SideNavbar />
        </aside>
    )
}
