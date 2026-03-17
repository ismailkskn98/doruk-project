'use client';
import { useSidebarStore } from '@/store/sidebarStore';
import React, { useEffect } from 'react'

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
        <aside className='h-screen'></aside>
    )
}
