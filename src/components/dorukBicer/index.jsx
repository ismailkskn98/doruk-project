'use client';
import { useHeaderStore } from '@/store/headerStore';
import { useIntroStore } from '@/store/introStore';
import React, { useEffect } from 'react';
import AboutTabsNavbar from '../common/aboutTabsNavbar';
import MotionLeftView from '../common/motionLeftView';
import MotionRightView from '../common/motionRightView';
import Image from 'next/image';

export default function DorukBicerMain() {
  const setTitle = useHeaderStore((state) => state.setTitle);
  const setLightTitle = useHeaderStore((state) => state.setLightTitle);
  const setIntroComplete = useIntroStore((state) => state.setIntroComplete);

  useEffect(() => {
    setLightTitle('About');
    setTitle('Doruk BICER');
    setIntroComplete(true);
  }, [setTitle, setLightTitle, setIntroComplete]);

  return (
    <main className="gridContainer min-[93.75rem]:block w-full min-[93.75rem]:px-12.5 min-[93.75rem]:fluid">
      <AboutTabsNavbar />
      <MotionLeftView className="w-full flex flex-col md:flex-row md:items-end md:justify-between gap-[clamp(14px,4vw,50px)] overflow-hidden">
        <div className="order-2 md:order-1 w-full flex-1 flex flex-col items-start gap-0 lg:gap-2 uppercase">
          <h2 className="font-bold text-2xl md:text-[28px] lg:text-[32px] leading-5 sm:leading-6 md:leading-7 text-nowrap">Doruk Bicer</h2>
          <p className="font-light text-lg sm:text-xl lg:text-2xl leading-4 lg:leading-normal mt-1.5 lg:mt-0 text-nowrap">Designer</p>
        </div>
        <div className="order-1 md:order-2 relative w-full max-w-[1000px] aspect-1000/700">
          <Image src={'/images/doruk-bicer.webp'} alt="Doruk Bicer" fill className="w-full h-full object-cover" />
        </div>
      </MotionLeftView>
      <MotionRightView className="w-full flex items-start justify-between py-[clamp(14px,4vw,50px)] font-helvetica-neue">
        <p className="max-w-[824px] text-base sm:text-lg lg:text-[20px] font-minion-pro leading-5.5 lg:leading-6 tracking-[-0.015em]">
          Doruk Biçer, born and raised in Istanbul. I was first impressed by the idea of shaping material during my childhood, which I spent in my grandfather’s carpentry shop. My college
          years started with studying a business degree, and later, I decided to follow my interests and began my design adventure without knowing it would become my passion. The university
          education I received in different fields and countries allowed me to learn and observe through various cultures and design perspectives. Throughout my journey, I have always aimed
          to develop myself in different areas and tried to explore various design paths through my internships to grow my design perception. During those experiences, I have worked with
          both large and small teams and gained significant experience in areas ranging from furniture design to exhibition design. With the end of my current internship, I want to dive more
          into a side of the field that lies between collectible and industrial design, based on my selfreflection and the interests.
        </p>
      </MotionRightView>
    </main>
  );
}
