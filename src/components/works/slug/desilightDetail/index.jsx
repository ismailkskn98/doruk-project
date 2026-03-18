
'use client';

import CommonHero from '@/components/common/commonHero';
import { useHeaderStore } from '@/store/headerStore';
import { useIntroStore } from '@/store/introStore';
import Image from 'next/image';
import React, { useEffect } from 'react'
import SoundChart from './soundChart';

export default function DesilightDetail() {
    const setTitle = useHeaderStore((state) => state.setTitle);
    const setLightTitle = useHeaderStore((state) => state.setLightTitle);
    const setIntroComplete = useIntroStore((state) => state.setIntroComplete);

    useEffect(() => {
        setLightTitle('Contact');
        setTitle('Doruk BICER');
        setIntroComplete(true);
    }, [setTitle, setLightTitle, setIntroComplete])

    return (
        <main className='w-full fluid gridContainer'>
            <CommonHero
                image="/images/projects/desilight-2025.png"
                alt="DesiLight"
                title="DesiLight"
                lightTitle="Biggy / Picky"
                subtitle="Voice Interactive Table Lamp"
                description="Being annoyed by the loud voices created by others around us
                    in restaurants and other public spaces is a common problem we
                    all face during our daily lives. The design suggests a solution to this
                    unsolved problem by creating awareness of people who speak loudly.
                    The aim is to create self-awareness by warning without irritating."
                sideInfo={[
                    { label: 'DATE', value: '2024' },
                    { label: 'DIMENSION', value: 'AAxBBxCCmm' },
                    { label: 'CLIENT', value: 'Plastic / Metal + Glass' },
                ]}
            />
            <section className='w-full py-18.75 flex items-end gap-12.5'>
                <article className='relative flex-1 h-187.5 w-full'>
                    <Image src="/images/projects/desilight-detail-1.png" alt="desilight-detail-1" fill className='object-cover object-center h-full w-full' />
                </article>
                <article className='flex-1 w-full max-w-77.5 font-minion-pro text-[20px] leading-7'>
                    <p>
                        The issue of being disturbed by loud voices in restaurants is a common but often overlooked
                        problem, even though it causes significant discomfort.  In most cases, it is inappropriate for
                        businesses or staff to directly warn the customers. To solve this problem, a product that subtly
                        alerts customers without annoying them would be a gentle and efficient solution.
                    </p>
                </article>
            </section>

            <section className='w-full py-25 flex items-center'>
                <main className='w-full flex items-center gap-10.5'>
                    <article className='max-w-125 w-full flex-1 font-helvetica-neue leading-11'>
                        <h2 className='font-bold text-[40px]'>Problem:<br /><span className='font-light'>Loud Voices In<br />Public Spaces</span></h2>
                    </article>
                    <article className='bg-custom-gray w-full flex-1 flex items-center justify-center gap-4.5'>
                        <div className='flex flex-col items-center'>
                            <span className='font-extralight text-[96px] leading-20'>%10</span>
                            <span className='font-helvetica-neue text-[32px] font-light'>Increas in dB</span>
                        </div>
                        <span className='text-[128px] font-extralight -mt-4'>=</span>
                        <div className='flex flex-col items-center'>
                            <span className='font-extralight text-[96px] leading-20'>%28</span>
                            <span className='font-helvetica-neue text-[32px] font-light'>Increase in Anxiety</span>
                        </div>
                    </article>
                </main>
            </section>

            <section className='w-full flex items-center justify-between gap-25 py-25'>
                <article className="bg-custom-gray p-5 flex-1 w-full flex flex-col items-center gap-4">
                    <p className="font-helvetica-neue font-light text-[16px] leading-[1.2] text-black text-center">
                        Average Sound Level In Restaurant Types
                    </p>

                    <SoundChart
                        data={[
                            { name: "Ideal for Human", value: 60 },
                            { name: "Average of Restaurant", value: 77 },
                            { name: "%75 of Restaurants", value: 81 },
                        ]}
                        yTicks={[60, 77, 81]}
                        yTickFormatter={(value) => `${value}dB`}
                        domain={[30, 85]}
                    />
                </article>
                <article className="bg-custom-gray p-5 flex-1 w-full flex flex-col items-center gap-4">
                    <p className="font-helvetica-neue font-light text-[16px] leading-[1.2] text-black text-center">
                        Average Sound Level In Restaurant Types
                    </p>
                    <SoundChart
                        data={[
                            { name: "Fast Food", value: 80 },
                            { name: "Mid Range", value: 70 },
                            { name: "Fine Dining", value: 60 },
                        ]}
                        yTicks={[60]}
                        domain={[35, 85]}
                        yTickFormatter={(value) => `${value}dB`}
                    />
                </article>
                <article className="bg-custom-gray p-5 flex-1 w-full flex flex-col items-center gap-4">
                    <p className="font-helvetica-neue font-light text-[16px] leading-[1.2] text-black text-center">
                        Average Timespan In Restaurant Types
                    </p>
                    <SoundChart
                        data={[
                            { name: "Fast Food", value: 15 },
                            { name: "Mid Range", value: 45 },
                            { name: "Fine Dining", value: 90 },
                        ]}
                        yTicks={[15, 45, 90]}
                        domain={[0, 100]}
                        yTickFormatter={(value) => {
                            if (value === 15) return "15-30\nmin";
                            if (value === 45) return "45-90\nmin";
                            if (value === 90) return "90-180\nmin";
                            return value;
                        }}
                    />
                </article>
            </section>

        </main>
    )
}
