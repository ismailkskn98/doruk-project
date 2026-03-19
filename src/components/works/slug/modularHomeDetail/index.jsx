'use client';
import CommonHero from '@/components/common/commonHero';
import MotionLeftView from '@/components/common/motionLeftView';
import MotionRightView from '@/components/common/motionRightView';
import { useHeaderStore } from '@/store/headerStore';
import { useIntroStore } from '@/store/introStore';
import Image from 'next/image';
import React, { useEffect } from 'react'

export default function ModularHomeDetail() {

    const setTitle = useHeaderStore((state) => state.setTitle);
    const setLightTitle = useHeaderStore((state) => state.setLightTitle);
    const setIntroComplete = useIntroStore((state) => state.setIntroComplete);

    useEffect(() => {
        setLightTitle('The Modular Home');
        setTitle('Works');
        setIntroComplete(true);
    }, [setTitle, setLightTitle, setIntroComplete])

    return (
        <main className='w-full fluid gridContainer'>
            <CommonHero
                video="/videos/home-hero-video.mp4"
                title="The Modular Home"
                subtitle="Interior Concept"
                description="Living alone is a growing trend and when small spaces are combined
                    with traditional architecture, they often result in impractical and
                    cluttered environments. As a solution to the observed problem, the
                    design approach involves transforming rooms into customizable smart
                    modules within a 49m2 meter space. Instead of making the occupant
                    move around the rooms, the projects aim to move the rooms around
                    the user to meet the current need. The ultimate ambition is to redefine
                    the environment as an extension of a human."
                sideInfo={[
                    { label: 'DATE', value: '2025' },
                    { label: 'DIMENSION', value: '7x7x3.5m' },
                    { label: 'AWARDS', value: 'iF Design Award 2026' },
                ]}
            />
            <section className='fluid gridContainer w-full bg-custom-gray min-h-100 py-25 px-12.5'>
                <main className='w-full flex items-center justify-end'>
                    <article className='w-full max-w-170'>
                        <p className='font-minion-pro text-[20px] leading-7'>
                            Home is; <br />
                            A combination of objects and spaces. The only think that matters is the interaction of the human with the object. However, sometimes, the space is not enough for a good interaction, and this is where this project begins to merge those spaces...
                        </p>
                    </article>
                </main>
            </section>
            <main className='w-full flex flex-col gap-18.75 py-18.75'>
                <section className='w-full'>
                    <article className='relative w-full h-191.25'>
                        <Image src="/images/projects/the-modular-home-detail-1.jpg" alt="The Modular Home Detail 1" fill className='object-cover w-full h-full' />
                    </article>
                </section>
                <section className='w-full'>
                    <article className='w-full grid grid-cols-2 place-content-stretch items-center gap-10'>
                        <p className='text-[20px] font-minion-pro'>
                            When small spaces are combined with traditional architecture, they often result limited functionality and cramped layouts. As a solution, the design coverts rooms into customizable smart modules that transforms 49m2 meter space into different rooms. Instead of making the occupant move around the rooms, the projects aim to create the rooms around the user to meet the current need. The ultimate ambition is to redefine the environment as an extension of a human.
                        </p>
                        <div className='relative min-h-150 flex'>
                            <MotionRightView className='relative w-100 h-100'>
                                <Image src="/images/projects/the-modular-home-detail-2-lower.jpg" alt="The Modular Home Detail 2 Lower" fill className='object-cover w-full h-full' />
                            </MotionRightView>
                            <MotionLeftView className='absolute bottom-0 right-0 w-100 h-100'>
                                <Image src="/images/projects/the-modular-home-detail-2-high.jpg" alt="The Modular Home Detail 2 High" fill className='object-cover w-full h-full' />
                            </MotionLeftView>
                        </div>
                    </article>
                </section>
                <section className='w-full flex flex-col items-start gap-18.75'>
                    <article className='relative w-full max-w-222.25 h-125'>
                        <Image src="/images/projects/the-modular-home-detail-3.jpg" alt="The Modular Home Detail 3" fill className='object-cover w-full h-full' />
                    </article>
                    <article className='flex flex-col self-end items-start gap-3 max-w-213.5 font-minion-pro text-[20px] leading-7'>
                        <p>
                            The project aims to re-design and update the living spaces to achieve more efficient utilization of space in a small apartment for a single occupant or a couple. The design based on the idea of rooms can be treated as individual modules that can be opened and closed, depending on the occupant's current needs. The aim is to reduce the amount of unoccupied volumes while also maximizing the usability of the available space.
                        </p>
                        <p>
                            The concept is designed as a home that is 7-meter to a 7-meter single room, where 13 modular units share and transform to get maximum efficiency. The concept creates a flexible and customizable living space which is three times more efficient than traditional architecture in small spaces. The design made to allow and adapt to the changing needs and preferences of the occupants over time.
                        </p>
                    </article>
                </section>
                <section className='w-full grid grid-cols-2 place-content-stretch gap-12.5'>
                    <article className='relative w-full h-187.5'>
                        <Image src="/images/projects/the-modular-home-detail-4.jpg" alt="The Modular Home Detail 4" fill className='object-cover w-full h-full' />
                    </article>
                    <article className='flex flex-col items-start gap-10'>
                        <video className='block w-full h-full max-h-118 bg-white object-fit' autoPlay loop muted>
                            <source src="/videos/the-modular-home-detail-video.mp4" type="video/mp4" />
                        </video>
                        <div className='flex flex-col items-start gap-10'>
                            <h3 className='text-[32px] font-helvetica-neue font-light'>
                                Kitchen
                            </h3>
                            <p className='font-minion-pro text-[20px] leading-7'>
                                The kitchen module functions in two modes: fully open as a traditional kitchen, or closed for basic use. It supports users by ordering food based on health data, with deliveries stored in a temperature-controlled cabinet.
                            </p>
                        </div>
                    </article>
                </section>
            </main>
        </main>
    )
}
