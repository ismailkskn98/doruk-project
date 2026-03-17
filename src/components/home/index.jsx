'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import HomeHero from './homeHero'

export default function HomeMain() {
    const containerRef = useRef(null);
    const overlayRef = useRef(null);

    useGSAP(() => {
        const logo = document.getElementById('site-logo');
        const logoContainer = document.getElementById('logo-container');
        const overlay = overlayRef.current;

        if (!logo || !logoContainer || !overlay) return;
        document.body.style.overflow = 'hidden';

        const scale = 2.6;
        gsap.set(logo, {
            position: 'fixed',
            color: '#fff',
            flexDirection: 'column',
            alignItems: 'start',
        });

        // Logonun şu anki yeri
        const logoBox = logo.getBoundingClientRect();
        // Logonun dönmesi gereken hedef alan
        const containerBox = logoContainer.getBoundingClientRect();

        // Ekranın tam ortası için left / top hesapla
        const startLeft = window.innerWidth / 2 - (logoBox.width * scale) / 2;
        const startTop = window.innerHeight / 2 - (logoBox.height * scale) / 2;

        // İlk durumda logoyu ortaya al
        gsap.set(logo, {
            scale,
            left: startLeft,
            top: startTop,
            transformOrigin: 'top left',
        });

        // Animasyon başlat
        const tl = gsap.timeline({
            onComplete: () => {
                document.body.style.overflow = ''
                gsap.set(logo, { clearProps: 'all', delay: 0.5 })
            },
        });

        // Biraz bekle
        tl.to({}, { duration: 1 });

        // Overlay kaybolsun
        tl.to(overlay, {
            opacity: 0,
            duration: 1,
            ease: 'power1.out',
        }, 1.5);

        // Logo kendi yerine dönsün
        tl.to(logo, {
            left: containerBox.left,
            top: containerBox.top,
            scale: 1,
            color: '#000',
            duration: 1,
            ease: 'power1.out',
        }, 1.75);

    }, { scope: containerRef })

    return (
        <main ref={containerRef} className="w-full fluid gridContainer">
            <div
                ref={overlayRef}
                className="fixed inset-0 bg-black z-30 pointer-events-none"
            />
            <HomeHero />
        </main>
    )
}