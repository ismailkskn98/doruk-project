
'use client';

import CommonHero from '@/components/common/commonHero';
import { useHeaderStore } from '@/store/headerStore';
import { useIntroStore } from '@/store/introStore';
import Image from 'next/image';
import React, { useEffect } from 'react'
import SoundChart from './soundChart';
import CommonDetailCarousel from '@/components/common/commonDetailCarousel';
import ReactCompareImage from 'react-compare-image';
import ModeBar from './modeBar';

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

            <section className='w-full pt-18.75'>
                <article className='w-full flex items-start justify-end gap-12.5'>
                    <div className='flex flex-col items-end text-end gap-10'>
                        <h3 className='font-helvetica-neue text-[40px] font-bold leading-10'>
                            Solution:<br /><span className='font-light'>See The <br />Voice</span>
                        </h3>
                        <p className='font-minion-pro text-[20px] leading-7 max-w-79.5'>
                            A collection of table lamps designed to interact with users, creating comfortable public
                            spaces. The lights on the bottom respond to the sound level of each table, allowing
                            users to become aware of their volume.
                        </p>
                    </div>
                    <div className='relative w-full max-w-163.75 flex-1 h-163.75'>
                        <Image src="/images/projects/desilight-detail-3.png" alt="desilight-detail-3" fill className='object-cover object-center h-full w-full' />
                    </div>
                </article>
                <article className='w-full flex items-end justify-start gap-12.5 -mt-30'>
                    <div className='relative w-full max-w-163.75 flex-1 h-163.75'>
                        <Image src="/images/projects/desilight-detail-4.png" alt="desilight-detail-4" fill className='object-cover object-left h-full w-full' />
                    </div>
                    <div className='flex flex-col items-start text-start gap-10'>
                        <h3 className='font-helvetica-neue text-[32px] font-bold leading-10'>
                            DesiLight<br /><span className='font-light'>Picky</span>
                        </h3>
                        <p className='font-minion-pro text-[20px] leading-7 max-w-79.5'>
                            The product is made from a bead-blasted stainless steel
                            body and a frosted satin glass diffuser, available in two different colors. While providing
                            comfortable lighting, the lights located on the bottom part interact with the user by
                            pulsing in sync with the sound level at the table.
                        </p>
                    </div>
                </article>
                <article className='w-full flex items-start justify-end gap-12.5 mt-25'>
                    <div className='flex flex-col items-end text-end gap-10'>
                        <h3 className='font-helvetica-neue text-[40px] font-bold leading-10'>
                            DesiLight<br /><span className='font-light'>Biggy</span>
                        </h3>
                        <p className='font-minion-pro text-[20px] leading-7 max-w-79.5'>
                            Designed for better durability, the product is made
                            from a cast polyethylene (PE) body and a frosted acrylic (PMMA) diffuser, available in three different colors.
                        </p>
                    </div>
                    <div className='relative w-full max-w-163.75 flex-1 h-163.75'>
                        <Image src="/images/projects/desilight-detail-5.png" alt="desilight-detail-5" fill className='object-cover object-left h-full w-full' />
                    </div>
                </article>

                <main className='flex flex-col items-start'>
                    <h2 className='font-helvetica-neue text-[40px] font-bold'>
                        Approach:<br /><span className='font-light'>Make It Visable</span>
                    </h2>
                    <section className='w-full py-18.75'>
                        {/* burası yapılacak */}
                        <ModeBar />
                    </section>
                </main>
                <main className='w-full py-18.75 grid grid-cols-2 place-content-stretch gap-18.75'>
                    <article className='flex-1 max-w-132.5 w-full flex flex-col items-start gap-10'>
                        <div className='relative w-full h-full'>
                            <ReactCompareImage leftImage="/images/projects/desilight-detail-6-lower.png" rightImage="/images/projects/desilight-detail-6.png" />;
                        </div>
                    </article>
                    <CommonDetailCarousel
                        initialImage="/images/projects/desilight-detail-carousel/image-1.jpg"
                        miniImageClassName='h-45 object-bottom'
                        classNames="max-w-180"
                        images={[
                            "/images/projects/desilight-detail-carousel/image-1.jpg",
                            "/images/projects/desilight-detail-carousel/image-2.jpg",
                            "/images/projects/desilight-detail-carousel/image-3.jpg",
                            "/images/projects/desilight-detail-carousel/image-4.jpg",
                        ]}
                    />
                </main>
            </section>
        </main>
    )
}
