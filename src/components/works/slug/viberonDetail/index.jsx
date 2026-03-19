'use client'
import CommonHero from '@/components/common/commonHero';
import { useHeaderStore } from '@/store/headerStore';
import { useIntroStore } from '@/store/introStore';
import Image from 'next/image';
import React, { useEffect } from 'react'

export default function ViberonDetail() {
    const setTitle = useHeaderStore((state) => state.setTitle);
    const setLightTitle = useHeaderStore((state) => state.setLightTitle);
    const setIntroComplete = useIntroStore((state) => state.setIntroComplete);

    useEffect(() => {
        setLightTitle('Viberon');
        setTitle('Works');
        setIntroComplete(true);
    }, [setTitle, setLightTitle, setIntroComplete])

    return (
        <main className='w-full fluid gridContainer'>
            <CommonHero
                image="/images/projects/viberon-2025.png"
                imageClassName="object-right"
                alt="Viberon"
                title="Viberon"
                subtitle="Iron With Vibration Heating Plate"
                description="Viberon is an iron with a vibrating heating plate that offers a solution to the
                    discomfort associated with the ironing experience by reducing the duration
                    of the ironing task. The suggested solution is integrating a motor to create
                    vibrations on the base and smooth out wrinkles more quickly. The design
                    aims to enhance functionality and create an appealing visual to improve the
                    overall experience."
                sideInfo={[
                    { label: 'DATE', value: '2023' },
                    { label: 'DIMENSION', value: '155x335x105mm' },
                    { label: 'MATERIAL', value: 'Plastic + Metal' },
                ]}
            />
            <section className='w-full py-18.75 flex items-end gap-12.5'>
                <article className='relative flex-1 h-187.5 w-full'>
                    <Image src="/images/projects/viberon-detail-1.png" alt="viberon-detail-1" fill className='object-cover object-center h-full w-full' />
                </article>
                <article className='flex-1 w-full max-w-77.5 font-minion-pro text-[20px] leading-7'>
                    <p>
                        Societal changes have generally shown a growing involvement of men in household chores, including
                        ironing, as gender roles evolve. Surveys and studies on gender equality often point to men participating
                        more in domestic responsibilities, especially in dual-income households or among younger generations.
                        However, when we look at the market, irons are mostly designed with women in mind in terms of color
                        and form.
                    </p>
                </article>
            </section>

            <section className='flex items-center justify-center gap-6'>
                <div className='relative w-75 h-75'>
                    <Image src="/images/projects/viberon-detail-2-left.png" alt="viberon-detail-left-2" fill className='object-fit object-center h-full w-full' />
                </div>
                <div className='relative w-100 h-100'>
                    <Image src="/images/projects/viberon-detail-2-center.png" alt="viberon-detail-center-2" fill className='object-fit object-center h-full w-full' />
                </div>
                <div className='relative w-75 h-75'>
                    <Image src="/images/projects/viberon-detail-2-right.png" alt="viberon-detail-right-2" fill className='object-fit object-center h-full w-full' />
                </div>
            </section>

            <section className='w-full grid grid-cols-3 place-content-stretch justify-items-stretch py-18.75 gap-12.5'>
                <article className='relative col-span-2 w-full h-200'>
                    <Image src="/images/projects/viberon-detail-3-final.png" alt="viberon-detail-3-final" fill className='object-cover object-left h-full w-full' />
                </article>
                <article className='grid grid-cols-1 gap-12.5 h-full w-104'>
                    <div className='relative w-full h-full'>
                        <Image src="/images/projects/viberon-detail-3-top.png" alt="viberon-detail-3-top" fill className='object-cover object-center' />
                    </div>
                    <div className='relative w-full h-full'>
                        <Image src="/images/projects/viberon-detail-3-center.png" alt="viberon-detail-3-center" fill className='object-cover object-center' />
                    </div>
                    <div className='relative w-full h-full'>
                        <Image src="/images/projects/viberon-detail-3-bottom.png" alt="viberon-detail-3-bottom" fill className='object-cover object-center' />
                    </div>
                </article>
            </section>
        </main>
    )
}
