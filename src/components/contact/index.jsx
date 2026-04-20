'use client';
import { useHeaderStore } from '@/store/headerStore';
import { useIntroStore } from '@/store/introStore';
import React, { useEffect } from 'react';
import MotionLeftView from '../common/motionLeftView';
import MotionRightView from '../common/motionRightView';
import ContactForm from './contactForm';
import Image from 'next/image';

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
      <MotionRightView className="w-full flex items-stretch gap-12.5 py-[clamp(14px,4vw,50px)] font-helvetica-neue">
        <div className="w-full max-w-[500px] shrink-0">
          <ContactForm />
        </div>

        <div className="hidden lg:block relative min-w-0 flex-1 overflow-hidden">
          <Image src="/images/contact.png" alt="contact-side" fill className="object-cover object-center" />
        </div>
      </MotionRightView>
    </main>
  );
}
