'use client';
import CommonHero from '@/components/common/commonHero';
import { useHeaderStore } from '@/store/headerStore';
import { useIntroStore } from '@/store/introStore';
import Image from 'next/image';
import React, { useEffect } from 'react';

export default function ViberonDetail() {
  const setTitle = useHeaderStore((state) => state.setTitle);
  const setLightTitle = useHeaderStore((state) => state.setLightTitle);
  const setIntroComplete = useIntroStore((state) => state.setIntroComplete);

  useEffect(() => {
    setLightTitle('Works');
    setTitle('DESIGN');
    setIntroComplete(true);
  }, [setTitle, setLightTitle, setIntroComplete]);

  return (
    <main className="w-full fluid gridContainer">
      <CommonHero
        image="/images/projects/viberon-2025-crop.png"
        imageClassName="object-center"
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
      <section className="w-full gap-6 lg:gap-12.5 py-6 lg:py-18.75 flex flex-col lg:flex-row items-start lg:items-end">
        <article className="relative flex-1 aspect-1000/750 w-full">
          <Image src="/images/projects/viberon-detail-1.webp" alt="viberon-detail-1" fill className="object-cover object-center h-full w-full" />
        </article>
        <article className="flex-1 w-full lg:max-w-77.5 font-minion-pro text-base sm:text-lg lg:text-[20px] leading-6 sm:leading-7">
          <p>
            Societal changes have generally shown a growing involvement of men in household chores, including ironing, as gender roles evolve. Surveys and studies on gender equality often
            point to men participating more in domestic responsibilities, especially in dual-income households or among younger generations. However, when we look at the market, irons are
            mostly designed with women in mind in terms of color and form.
          </p>
        </article>
      </section>

      <section className="flex items-center justify-center gap-6 py-6 lg:py-0">
        <div className="relative w-full max-w-75 aspect-300/300">
          <Image src="/images/projects/viberon-detail-2-left.webp" alt="viberon-detail-left-2" fill className="object-fit object-center h-full w-full" />
        </div>
        <div className="relative w-full max-w-100 aspect-400/400">
          <Image src="/images/projects/viberon-detail-2-center.webp" alt="viberon-detail-center-2" fill className="object-fit object-center h-full w-full" />
        </div>
        <div className="relative w-full max-w-75 aspect-300/300">
          <Image src="/images/projects/viberon-detail-2-right.webp" alt="viberon-detail-right-2" fill className="object-fit object-center h-full w-full" />
        </div>
      </section>

      <section className="w-full grid grid-cols-3 place-content-stretch justify-items-stretch pt-6 pb-12.5 lg:py-18.75 gap-2.5 sm:gap-6 lg:gap-12.5">
        <article className="relative col-span-2 w-full h-full max-w-[893px] aspect-893/893">
          <Image
            src="/images/projects/viberon-detail-3-final.png"
            alt="viberon-detail-3-final"
            fill
            className="object-cover object-center h-full w-full"
            unoptimized
            quality={100}
            sizes="100vw"
          />
        </article>
        <article className="grid grid-cols-1 gap-2.5 sm:gap-6 lg:gap-12.5 w-full h-full max-w-[416px] aspect-416/893">
          <div className="relative w-full h-full">
            <Image src="/images/projects/viberon-detail-3-top.webp" alt="viberon-detail-3-top" fill className="object-cover object-center" unoptimized quality={100} sizes="100vw" />
          </div>
          <div className="relative w-full h-full">
            <Image src="/images/projects/viberon-detail-3-center.webp" alt="viberon-detail-3-center" fill className="object-cover object-center" unoptimized quality={100} sizes="100vw" />
          </div>
          <div className="relative w-full h-full">
            <Image src="/images/projects/viberon-detail-3-bottom.webp" alt="viberon-detail-3-bottom" fill className="object-cover object-center" unoptimized quality={100} sizes="100vw" />
          </div>
        </article>
      </section>
    </main>
  );
}
