'use client';
import CommonHero from '@/components/common/commonHero';
import { useHeaderStore } from '@/store/headerStore';
import { useIntroStore } from '@/store/introStore';
import React, { useEffect } from 'react'
import CommonDetailCarousel from '@/components/common/commonDetailCarousel';

export default function RivaDetail() {
    const setTitle = useHeaderStore((state) => state.setTitle);
    const setLightTitle = useHeaderStore((state) => state.setLightTitle);
    const setIntroComplete = useIntroStore((state) => state.setIntroComplete);

    useEffect(() => {
        setLightTitle('RIVA 937');
        setTitle('Works');
        setIntroComplete(true);
    }, [setTitle, setLightTitle, setIntroComplete])

    return (
        <main className='w-full fluid gridContainer'>
            <CommonHero
                image="/images/projects/riva-937.png"
                alt="Riva 937"
                title="Riva 937"
                lightTitle="Details"
                subtitle="Private Villa"
                description="The private summer residence located in the seaside of Istanbul, Turkey.  The site’s  sharp slope and view shaped both the architectural approach and the spatial organization of the villa. The residence offers 550 m² enclosed living space, including three bedrooms and two living areas. The studio was responsible for the interior and exterior architectural design, collaborating with contractor firms during construction and fabrication while overseeing the process to ensure quality."
                sideInfo={[
                    { label: 'DATE', value: '2022 - 24' },
                    { label: 'DIMENSION', value: '850m square' },
                    { label: 'CLIENT', value: 'Private Client' },
                ]}
            />
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
                    <h2 className='font-helvetica-neue text-[32px] font-bold'>Exterior Design <br /> <span className='font-light'>Strong & Private</span></h2>
                    <p className='font-minion-pro text-[20px]'>
                        The product is made from a bead-blasted stainless steel
                        body and a frosted satin glass diffuser, available in two different colors. While providing
                        comfortable lighting, the lights located on the bottom part interact with the user by
                        pulsing in sync with the sound level at the table.
                    </p>
                </article>
            </section>
            <section className='w-full py-18.75 flex items-start gap-18.75'>
                <article className='flex-1 max-w-125 w-full flex flex-col items-end justify-end text-end gap-10'>
                    <h2 className='font-helvetica-neue text-[32px] font-bold'>Interior Design <br /> <span className='font-light'>Clean & Calm</span></h2>
                    <p className='font-minion-pro text-[20px]'>
                        The product is made from a bead-blasted stainless steel
                        body and a frosted satin glass diffuser, available in two different colors. While providing
                        comfortable lighting, the lights located on the bottom part interact with the user by
                        pulsing in sync with the sound level at the table.
                    </p>
                </article>
                <CommonDetailCarousel
                    time={3000}
                    initialImage="/images/projects/riva-937-detail-carousel-2/image-1.png"
                    images={[
                        "/images/projects/riva-937-detail-carousel-2/image-1.png",
                        "/images/projects/riva-937-detail-carousel-2/image-2.png",
                        "/images/projects/riva-937-detail-carousel-2/image-3.png",
                        "/images/projects/riva-937-detail-carousel-2/image-4.png",
                        "/images/projects/riva-937-detail-carousel-2/image-5.png",
                    ]}
                />
            </section>
        </main>
    )
}
