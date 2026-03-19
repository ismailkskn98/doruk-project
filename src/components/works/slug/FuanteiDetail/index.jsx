'use client';
import CommonHero from '@/components/common/commonHero';
import { useHeaderStore } from '@/store/headerStore';
import { useIntroStore } from '@/store/introStore';
import Image from 'next/image';
import React, { useEffect } from 'react'

export default function FuanteiDetail() {
    const setTitle = useHeaderStore((state) => state.setTitle);
    const setLightTitle = useHeaderStore((state) => state.setLightTitle);
    const setIntroComplete = useIntroStore((state) => state.setIntroComplete);

    useEffect(() => {
        setLightTitle('FUANTEI');
        setTitle('Works');
        setIntroComplete(true);
    }, [setTitle, setLightTitle, setIntroComplete])

    return (
        <main className='w-full fluid gridContainer'>
            <CommonHero
                image="/images/projects/fuantei.jpg"
                alt="Fuantei"
                title="Fuantei"
                subtitle="Balanced Unbalanced Plate"
                description="The idea is to create a table ware that
                    keeps the user engaged with the environment by using the tension and game as a theme.
                    Asymmetric but yet balanced form
                    of the plate produced in 2.5mm ceramic, creates fear of spillage but turns it into a playful
                    experience by preventing it."
                sideInfo={[
                    { label: 'DATE', value: '2020' },
                    { label: 'DIMENSION', value: '850m square' },
                    { label: 'MATERIAL', value: 'Ceramic' },
                ]}
            />

            <section className='w-full py-18.75'>
                <article className='w-full flex items-start justify-end gap-12.5'>
                    <div className='flex flex-col items-end text-end gap-10'>
                        <h3 className='font-helvetica-neue text-[40px] font-light leading-10'>
                            Made by<br />Hand
                        </h3>
                        <p className='font-minion-pro text-[20px] leading-7 max-w-79.5'>
                            The collection is inspired by traditional craftsmanship slip casting, makes each piece unique. The entire production of first series of the collection made by the designer himself by hand to refine the shape and reach the ideal form.
                        </p>
                        <button type='button' className='p-3.75 bg-custom-gray font-helvetica-neue font-light text-[20px]'>
                            Watch Production Video
                        </button>
                    </div>
                    <div className='relative w-full max-w-163.75 flex-1 h-163.75'>
                        <Image src="/images/projects/fuantei-detail-1.jpg" alt="fuantei-detail-1" fill className='object-cover object-center h-full w-full' />
                    </div>
                </article>
            </section>

        </main>
    )
}
