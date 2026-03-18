'use client';
import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/store/sidebarStore';
import React from 'react'

export default function MainContent({ children }) {
    const sidebarOpen = useSidebarStore(state => state.sidebarOpen);
    return (
        <main className={cn('w-full min-h-screen gridContainer transition-transform duration-500 ease-in-out', {
            '-translate-x-[20%] sm:-translate-x-90': sidebarOpen,
            'translate-x-0': !sidebarOpen,
        })}>
            {children}
        </main>
    )
}
