'use client';
import { useHeaderStore } from '@/store/headerStore';
import { useIntroStore } from '@/store/introStore';
import React, { useEffect } from 'react';
import MotionLeftView from '../common/motionLeftView';
import MotionRightView from '../common/motionRightView';
import ContactForm from './contactForm';

export default function ContactMain() {
  const setTitle = useHeaderStore((state) => state.setTitle);
  const setLightTitle = useHeaderStore((state) => state.setLightTitle);
  const setIntroComplete = useIntroStore((state) => state.setIntroComplete);

  useEffect(() => {
    setLightTitle('Contact');
    setTitle('');
    setIntroComplete(true);
  }, [setTitle, setLightTitle, setIntroComplete]);

  return (
    <main className="w-full gridContainer">
      <MotionLeftView className="w-full">
        <h1 className="uppercase font-bold text-xl sm:text-2xl lg:text-[32px] font-helvetica-neue">Contact</h1>
      </MotionLeftView>
      <MotionRightView className="w-full flex items-start justify-between py-[clamp(14px,4vw,50px)] font-helvetica-neue">
        <ContactForm />
      </MotionRightView>
    </main>
  );
}
