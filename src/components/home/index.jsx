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

        // Sayfa scroll olmasın
        document.body.style.overflow = 'hidden';

        // Logonun şu anki yeri
        const logoBox = logo.getBoundingClientRect();

        // Logonun dönmesi gereken hedef alan
        const containerBox = logoContainer.getBoundingClientRect();

        // Ekranın tam ortası için left / top hesapla
        const startLeft = window.innerWidth / 2 - logoBox.width / 2;
        const startTop = window.innerHeight / 2 - logoBox.height / 2;

        // İlk durumda logoyu ortaya al
        gsap.set(logo, {
            position: 'fixed',
            left: startLeft,
            top: startTop,
            scale: 2.2,
            color: '#fff',
            margin: 0,
            transformOrigin: 'top left',
            flexDirection: 'column',
            alignItems: 'start',
            color: '#fff',
        });

        // Animasyon başlat
        const tl = gsap.timeline({
            onComplete: () => {
                document.body.style.overflow = ''
                gsap.set(logo, { clearProps: 'all' })
            },
        });

        // Biraz bekle
        tl.to({}, { duration: 0.8 });

        // Overlay kaybolsun
        tl.to(
            overlay,
            {
                opacity: 0,
                duration: 1,
                ease: 'power3.inOut',
            },
            0.8
        );

        // Logo kendi yerine dönsün
        tl.to(
            logo,
            {
                left: containerBox.left,
                top: containerBox.top,
                scale: 1,
                color: '#000',
                duration: 1,
                ease: 'power3.inOut',
            },
            0.8
        );

        return () => {
            tl.kill()
            document.body.style.overflow = ''
            gsap.set(logo, { clearProps: 'all' })
        };

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