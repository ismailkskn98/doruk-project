'use client';
import { useHeaderStore } from '@/store/headerStore';
import { useIntroStore } from '@/store/introStore';
import React, { useEffect } from 'react'
import MotionLeftView from '../common/motionLeftView';
import MotionRightView from '../common/motionRightView';
import ContactForm from './contactForm';

export default function ContactMain() {
    const setTitle = useHeaderStore((state) => state.setTitle);
    const setLightTitle = useHeaderStore((state) => state.setLightTitle);
    const setIntroComplete = useIntroStore((state) => state.setIntroComplete);

    useEffect(() => {
        setLightTitle('Contact');
        setTitle('Doruk BICER');
        setIntroComplete(true);
    }, [setTitle, setLightTitle, setIntroComplete])

    return (
        <main className='w-full flex flex-col items-start'>
            <MotionLeftView className="w-full py-12.5">
                <h1 className='uppercase text-[32px] font-bold font-helvetica-neue'>Contact</h1>
            </MotionLeftView>
            <MotionRightView className='w-full flex items-start justify-between py-12.5 gap-12 font-helvetica-neue'>
                <ContactForm />
            </MotionRightView>
        </main>
    )
}
