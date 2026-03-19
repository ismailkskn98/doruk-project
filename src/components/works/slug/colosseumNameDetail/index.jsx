'use client';
import CommonDetailCarousel from '@/components/common/commonDetailCarousel';
import CommonHero from '@/components/common/commonHero';
import { useHeaderStore } from '@/store/headerStore';
import { useIntroStore } from '@/store/introStore';
import Image from 'next/image';
import React, { useEffect } from 'react';
import ReactCompareImage from 'react-compare-image';
import {
    ReactCompareSlider,
    ReactCompareSliderImage,
} from 'react-compare-slider';

export default function ColosseumNameDetail() {
    const setTitle = useHeaderStore((state) => state.setTitle);
    const setLightTitle = useHeaderStore((state) => state.setLightTitle);
    const setIntroComplete = useIntroStore((state) => state.setIntroComplete);

    useEffect(() => {
        setLightTitle('COLOSSEUM NAME');
        setTitle('Works');
        setIntroComplete(true);
    }, [setTitle, setLightTitle, setIntroComplete])

    return (
        <main className='w-full fluid gridContainer'>
            <CommonHero
                image="/images/projects/colosseum-name-rotate.png"
                alt="Colosseum Name"
                title="Colosseum Name"
                subtitle="Motorised Mop Bucket"
                description="Focusing on enhancing the moping experience, a mop bucket is designed with a spinning mechanism that works with gentle pressure. The Colosseum considers the mop as a stylish and practical cleaning tool."
                sideInfo={[
                    { label: 'DATE', value: '2021' },
                    { label: 'DIMENSION', value: '155x335x105mm' },
                    { label: 'MATERIAL', value: 'Plastic' },
                ]}
            />

            <section className='w-full py-18.75'>
                <article className='w-full flex items-start justify-end gap-12.5'>
                    <div className='flex flex-col items-end text-end gap-10'>
                        <h3 className='font-helvetica-neue text-[40px] font-light leading-10'>
                            One Click<br />& Done
                        </h3>
                        <p className='font-minion-pro text-[20px] leading-7 max-w-79.5'>
                            Let the machine use power for you. With a single foot press, the bucket starts to rotate the mop holder and drains the water in seconds.
                        </p>
                    </div>
                    <div className='relative w-full max-w-163.75 flex-1 h-163.75'>
                        <ReactCompareImage
                            aspectRatio="shorter"
                            leftImage="/images/projects/colosseum-name-detail-1.jpg"
                            rightImage="/images/projects/colosseum-name-detail-2222.jpeg"
                            rightImageCss={{
                                objectFit: 'cover',
                                objectPosition: 'center 27%',
                            }}
                        />
                    </div>
                </article>
            </section>

            <section className='w-full py-18.75 flex items-start gap-18.75'>
                <CommonDetailCarousel
                    initialImage="/images/projects/riva-937-detail-carousel/image-1.png"
                    images={[
                        "/images/projects/riva-937-detail-carousel/image-1.png",
                        "/images/projects/riva-937-detail-carousel/image-2.png",
                        "/images/projects/riva-937-detail-carousel/image-3.png",
                        "/images/projects/riva-937-detail-carousel/image-4.png",
                        "/images/projects/riva-937-detail-carousel/image-5.png",
                        "/images/projects/riva-937-detail-carousel/image-6.png",
                        "/images/projects/riva-937-detail-carousel/image-7.png",
                        "/images/projects/riva-937-detail-carousel/image-8.png",
                    ]}
                />
                <article className='flex-1 max-w-125 w-full flex flex-col items-start gap-10'>
                    <h2 className='font-helvetica-neue text-[32px] font-bold'>Exterior Images <br /> <span className='font-light'>Text Here</span></h2>
                    <p className='font-minion-pro text-[20px]'>
                        The product is made from a bead-blasted stainless steel
                        body and a frosted satin glass diffuser, available in two different colors. While providing
                        comfortable lighting, the lights located on the bottom part interact with the user by
                        pulsing in sync with the sound level at the table.
                    </p>
                </article>
            </section>
        </main>
    )
}
