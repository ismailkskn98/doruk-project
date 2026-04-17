'use client';

import { useRef, useEffect, useLayoutEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import HomeHero from './homeHero';
import Logo from '../Logo';
import { useIntroStore } from '@/store/introStore';
import { useHeaderStore } from '@/store/headerStore';

export default function HomeMain() {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const introLogoRef = useRef(null);
  const introComplete = useIntroStore((state) => state.introComplete);
  const setIntroComplete = useIntroStore((state) => state.setIntroComplete);
  const setLightTitle = useHeaderStore((state) => state.setLightTitle);
  const setTitle = useHeaderStore((state) => state.setTitle);

  useLayoutEffect(() => {
    setLightTitle('');
    setTitle('');

    // sessionStorage kontrol et: intro daha önce bu tab'da gösterildi mi?
    const alreadySeen = sessionStorage.getItem('introSeen') === 'true';
    if (alreadySeen) {
      setIntroComplete();
    }
  }, [setIntroComplete, setLightTitle, setTitle]);

  useGSAP(
    () => {
      if (introComplete) return;
      const introLogo = introLogoRef.current;
      const logoContainer = document.getElementById('logo-container');
      const overlay = overlayRef.current;

      if (!introLogo || !logoContainer || !overlay) return;
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';

      const scale = 1;

      // Proxy logo'nun doğal boyutu (scale 1'deyken)
      const logoBox = introLogo.getBoundingClientRect();
      // Header'daki logo container'ın pozisyonu (hedef)
      const containerBox = logoContainer.getBoundingClientRect();

      // Proxy'yi ekran ortasına, büyütülmüş şekilde yerleştir
      const startLeft = window.innerWidth / 2 - (logoBox.width * scale) / 2;
      const startTop = window.innerHeight / 2 - (logoBox.height * scale) / 2;

      gsap.set(introLogo, { opacity: 1, color: '#fff', scale, left: startLeft, top: startTop, transformOrigin: 'top left' });

      const tl = gsap.timeline();

      tl.to({}, { duration: 1 });

      // Siyah overlay kaybolsun
      tl.to(overlay, { opacity: 0, duration: 1, ease: 'power1.out' }, 0.35);

      // Proxy logo header'daki yerine gitsin
      const targetFontSize = window.innerWidth >= 1024 ? '36px' : window.innerWidth >= 640 ? '28px' : '24px';
      tl.to(introLogo, { left: containerBox.left, top: containerBox.top, scale: 1, color: '#000', duration: 1, ease: 'power1.out', fontSize: targetFontSize }, 0.55);

      tl.call(() => {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        setIntroComplete();
        gsap.to(introLogo, { opacity: 0, duration: 0.25 });
      });
    },
    { scope: containerRef },
  );

  return (
    <main ref={containerRef} className="w-full fluid gridContainer">
      {!introComplete && (
        <>
          <div ref={overlayRef} className="fixed fluid inset-0 bg-black z-30 pointer-events-none" />
          <div ref={introLogoRef} className="fixed fluid top-0 left-0 z-50 flex flex-col leading-[0.9] font-bold text-[48px] sm:text-[65px] lg:text-[90px] pointer-events-none opacity-0 ">
            <Logo />
          </div>
        </>
      )}
      <HomeHero />
    </main>
  );
}
