'use client';
import { useHeaderStore } from '@/store/headerStore';
import { useIntroStore } from '@/store/introStore';
import React, { useEffect } from 'react'
import CommonHero from '../common/commonHero';

export default function DorukBicerMain() {
    const setTitle = useHeaderStore((state) => state.setTitle);
    const setLightTitle = useHeaderStore((state) => state.setLightTitle);
    const setIntroComplete = useIntroStore((state) => state.setIntroComplete);

    useEffect(() => {
        setLightTitle('About');
        setTitle('Doruk BICER');
        setIntroComplete(true);
    }, [setTitle, setLightTitle, setIntroComplete])

    return (
        <CommonHero
            image="/images/doruk-bicer.jpg"
            alt="Doruk Bicer"
            title="Doruk Bicer"
            subtitle="Designer"
            description="Doruk Biçer, born and raised in Istanbul. I was first impressed by the idea of shaping material during my childhood, which I spent in my grandfather’s carpentry shop. My college years started with studying a business degree, and later, I decided to follow my interests and began my design adventure without knowing it would become my passion. The university education I received in different fields and countries allowed me to learn and observe through various cultures and design perspectives. Throughout my journey, I have always aimed to develop myself in different areas and tried to explore various design paths through my internships to grow my design perception. During those experiences, I have worked with both large and small teams and gained significant experience in areas ranging from furniture design to exhibition design. With the end of my current internship, I want to dive more into a side of the field that lies between collectible and industrial design, based on my selfreflection and the interests."
            sideInfo={[
                { label: 'date', value: '1997' },
                { label: 'DIMENSION', value: '183cm' },
                { label: 'MATERIAL', value: 'Oxygen, Carbon' },
            ]}
        />
    )
}
