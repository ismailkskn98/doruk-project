'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import HomeHero from './homeHero'
import Logo from '../Logo'
import { useIntroStore } from '@/store/introStore'

export default function HomeMain() {
    const containerRef = useRef(null);
    const overlayRef = useRef(null);
    const introLogoRef = useRef(null);
    const setIntroComplete = useIntroStore(state => state.setIntroComplete);

    useGSAP(() => {
        const introLogo = introLogoRef.current;
        const logoContainer = document.getElementById('logo-container');
        const overlay = overlayRef.current;

        if (!introLogo || !logoContainer || !overlay) return;
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';

        const scale = 2.6;

        // Proxy logo'nun doğal boyutu (scale 1'deyken)
        const logoBox = introLogo.getBoundingClientRect();
        // Header'daki logo container'ın pozisyonu (hedef)
        const containerBox = logoContainer.getBoundingClientRect();

        // Proxy'yi ekran ortasına, büyütülmüş şekilde yerleştir
        const startLeft = window.innerWidth / 2 - (logoBox.width * scale) / 2;
        const startTop = window.innerHeight / 2 - (logoBox.height * scale) / 2;

        gsap.set(introLogo, {
            opacity: 1,
            color: '#fff',
            scale,
            left: startLeft,
            top: startTop,
            transformOrigin: 'top left',
        })

        const tl = gsap.timeline();

        tl.to({}, { duration: 1 });

        // Siyah overlay kaybolsun
        tl.to(overlay, {
            opacity: 0,
            duration: 1,
            ease: 'power1.out',
        }, 1.5)

        // Proxy logo header'daki yerine gitsin
        tl.to(introLogo, {
            left: containerBox.left,
            top: containerBox.top,
            scale: 1,
            color: '#000',
            duration: 1,
            ease: 'power1.out',
            fontSize: '32px',
        }, 1.75)

        tl.call(() => {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
            setIntroComplete();
            gsap.to(introLogo, { opacity: 0, duration: 0.25 });
        })

    }, { scope: containerRef })

    return (
        <main ref={containerRef} className="w-full fluid gridContainer">
            <div
                ref={overlayRef}
                className="fixed fluid inset-0 bg-black z-30 pointer-events-none"
            />
            <div
                ref={introLogoRef}
                className="fixed fluid top-0 left-0 z-50 flex flex-col leading-[0.9] font-bold text-[70px] pointer-events-none opacity-0"
            >
                <Logo />
            </div>
            <HomeHero />
        </main>
    )
}