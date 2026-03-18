'use client';
import { useHeaderStore } from '@/store/headerStore';
import { useIntroStore } from '@/store/introStore';
import React, { useEffect } from 'react'

export default function ModularHomeDetail() {

    const setTitle = useHeaderStore((state) => state.setTitle);
    const setLightTitle = useHeaderStore((state) => state.setLightTitle);
    const setIntroComplete = useIntroStore((state) => state.setIntroComplete);

    useEffect(() => {
        setLightTitle('Contact');
        setTitle('Doruk BICER');
        setIntroComplete(true);
    }, [setTitle, setLightTitle, setIntroComplete])

    return (
        <main className='w-full'>
            <section className='w-full flex items-center justify-center py-12.5 max-h-202.5'>
                <video className='block w-full max-w-202.5 h-full max-h-202.5 bg-white object-cover' autoPlay loop muted>
                    <source src="/videos/home-hero-video.mp4" type="video/mp4" />
                </video>
            </section>
        </main>
    )
}
