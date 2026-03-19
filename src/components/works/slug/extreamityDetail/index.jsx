'use client';
import CommonHero from '@/components/common/commonHero';
import { useHeaderStore } from '@/store/headerStore';
import { useIntroStore } from '@/store/introStore';
import Image from 'next/image';
import React, { useEffect } from 'react'
import GradientCircle from './gradientCircle';


export default function ExtreamityDetail() {
    const setTitle = useHeaderStore((state) => state.setTitle);
    const setLightTitle = useHeaderStore((state) => state.setLightTitle);
    const setIntroComplete = useIntroStore((state) => state.setIntroComplete);

    useEffect(() => {
        setLightTitle('EXTREAMITY');
        setTitle('Works');
        setIntroComplete(true);
    }, [setTitle, setLightTitle, setIntroComplete])

    return (
        <main className='w-full fluid gridContainer'>
            <CommonHero
                image="/images/projects/extreamity.png"
                alt="Extreamity"
                title="Extreamity"
                subtitle="Photograph Collection"
                description="The photography collection aims to make the viewer think about the possibility of opposite extremes to be the different paths to the same result, and question their goals. "
                sideInfo={[
                    { label: 'DATE', value: '202' },
                    { label: 'DIMENSION', value: '50 x 71cm' },
                    { label: 'MATERIAL', value: 'Color Print' },
                ]}
            />

            <section className='fluid gridContainer w-full bg-custom-gray min-h-100 py-25 px-12.5'>
                <main className='w-full flex items-center justify-end'>
                    <article className='w-full flex flex-col items-start gap-4 max-w-187.5 font-minion-pro text-[20px] leading-6.5'>
                        <p>
                            We live in a culture where we want always more and sometimes even the most of everything. Our goals are to be more even the most: healthy, wealthy, knowledgeable, safe and many others. But extremes are same, too cold burs as same as too hot, just in a different way.
                        </p>
                        <p>
                            We strive to create homes where we can feel free, unrestrained but then we cover it high wall to and give up our freed in order to feel secure. And some, tuns it into a prison with a context of a freedom.
                        </p>
                        <p>
                            We exercise and eat healthy to stay well and live longer. What if we go too far? An American entrepreneur is spending million dollars a year, takes over 100 pills a day, and dedicates 6–7 hours daily to live longer. But is he truly living?
                        </p>
                        <p>
                            What if both extremes are different paths to same result? Is everything is the same as nothing? Might positive infinity and negative infinity be the same end with different paths?
                        </p>
                    </article>
                </main>
            </section>

            <section className='relative h-screen w-full fluid'>
                <Image src="/images/projects/extreamity-detail-1.jpg" alt="extreamity-detail-1" fill className='object-cover object-center w-full h-full' />
            </section>

            <section className='grid grid-cols-2 gap-12 py-12 items-stretch'>
                <main className='flex flex-col gap-12.5'>
                    <article className='flex flex-col items-end text-end gap-10'>
                        <h3 className='font-helvetica-neue text-[24px] font-bold leading-10'>
                            Why Always More ?
                        </h3>
                        <div className='flex flex-col items-end text-end'>
                            <h4 className='font-helvetica-neue text-[20px] font-light'>
                                Needs & Satisfaction
                            </h4>
                            <p className='font-minion-pro text-[20px] leading-7 '>
                                According to Maslow’s Hierarchy of Needs, once basic needs are met, the drive to achieve more continues as new goals emerge. Neurologically, this is linked to dopamine, which responds more to the anticipation of rewards than to their fulfillment. However, when everything is easily attained, the expectation fades, dopamine production slows, and satisfaction diminishes.
                            </p>
                        </div>
                        <div className='flex flex-col items-end text-end -mt-5'>
                            <h4 className='font-helvetica-neue text-[20px] font-light'>
                                Goal & Meaning
                            </h4>
                            <p className='font-minion-pro text-[20px] leading-7 '>
                                The constant striving is concidered as searching for meaning in many psychologcal perspectives. But sine the satisfaction is short lived and new goals are set, people always sets new goals to improve and develop their identitity. But whenthat person reachs all the goals, dissatisfaction and lost of meaning starts.
                            </p>
                        </div>
                    </article>
                    <article className='flex flex-col items-start text-start gap-2.5'>
                        <h3 className='font-helvetica-neue text-[24px] font-bold leading-10'>
                            Does Extreams Meet?
                        </h3>
                        <div className='flex flex-col items-start text-start'>
                            <h4 className='font-helvetica-neue text-[20px] font-light'>
                                Narcissism & Self-Hatred
                            </h4>
                            <p className='font-minion-pro text-[20px] leading-7'>
                                According to psychoanalysts such as Otto Kernberg, pathological narcissism and deep self-hatred may actually be two extremes of the same personality structure and they both concidered as not being able to accept one’s true self and producing a mask.
                            </p>
                        </div>
                        <div className='flex flex-col items-start text-start'>
                            <h4 className='font-helvetica-neue text-[20px] font-light'>
                                Obsession & Submission
                            </h4>
                            <p className='font-minion-pro text-[20px] leading-7'>
                                In psychology they both are concidered as coming from the feeling of fear, uncertainty and insecurity. One reacts those emotions with the need of over controll and the other by staying passive. Even they seems like a pollar siturations, they both are just different paths to same result in extreams with same the motivation in the beggining.
                            </p>
                        </div>
                    </article>
                </main>
                <div className="h-full flex items-center justify-center min-w-188">
                    <GradientCircle />
                </div>
            </section>
        </main>
    )
}
