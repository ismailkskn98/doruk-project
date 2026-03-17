'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import HomeHero from './homeHero'

export default function HomeMain() {
    const container = useRef(null);

    useGSAP(() => {
        const logo = document.getElementById('site-logo');
        const slot = document.getElementById('logo-slot');
        const overlay = document.getElementById('intro-overlay');

        if (!logo || !slot || !overlay) return;
        document.body.style.overflow = 'hidden';

        const slotRect = slot.getBoundingClientRect();
        const logoRect = logo.getBoundingClientRect();

        const centerLeft = window.innerWidth / 2 - logoRect.width / 2;
        const centerTop = window.innerHeight / 2 - logoRect.height / 2;

        gsap.set(logo, {
            position: 'fixed',
            left: slotRect.left,
            top: slotRect.top,
            margin: 0,
            display: 'flex',
            alignItems: 'start',
        })

        gsap.set(logo, {
            left: centerLeft,
            top: centerTop,
            scale: 2.2,
            transformOrigin: 'top left',
        })

        const tl = gsap.timeline({
            onComplete: () => {
                gsap.set(logo, { clearProps: 'all' })
                document.body.style.overflow = ''
            },
        });

        tl.to({}, { duration: 0.8 })
            .to(overlay, {
                opacity: 0,
                duration: 1.1,
                ease: 'power3.inOut',
            }, 'start')
            .to(logo, {
                left: slotRect.left,
                top: slotRect.top,
                scale: 1,
                duration: 1.1,
                ease: 'power3.inOut',
            }, 'start')

        return () => {
            tl.kill()
            document.body.style.overflow = ''
            gsap.set(logo, { clearProps: 'all' })
        }
    }, { scope: container })

    return (
        <main ref={container} className='w-full fluid gridContainer'>
            <div id="intro-overlay" className='fixed inset-0 bg-black/50 z-30 pointer-events-none' />
            <HomeHero />
        </main>
    )
}