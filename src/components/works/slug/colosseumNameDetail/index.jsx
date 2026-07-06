'use client';
import CommonDetailCarousel from '@/components/common/commonDetailCarousel';
import CommonHero from '@/components/common/commonHero';
import { useHeaderStore } from '@/store/headerStore';
import { useIntroStore } from '@/store/introStore';
import React, { useEffect } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function ColosseumNameDetail() {
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
        image="/images/projects/colosseum-detail-hero.webp"
        imageClassName="object-center scale-150"
        alt="Colosseum"
        title="Colosseum"
        subtitle="Motorised Mop Bucket"
        description="Focusing on enhancing the moping experience, a mop bucket is designed with a spinning mechanism that works with gentle pressure. The Colosseum considers the mop as a stylish and practical cleaning tool."
        sideInfo={[
          { label: 'DATE', value: '2021' },
          { label: 'DIMENSION', value: '155x335x105mm' },
          { label: 'MATERIAL', value: 'Plastic' },
        ]}
      />

      <section className="w-full pt-6 pb-12.5 lg:py-12.5">
        <article className="w-full flex flex-col-reverse lg:flex-row items-start lg:justify-end gap-6 sm:gap-8 lg:gap-12.5">
          <div className="flex flex-col lg:items-end lg:text-end gap-4 sm:gap-8 lg:gap-12.5 flex-1">
            <h3 className="font-helvetica-neue text-2xl sm:text-3xl lg:text-[40px] font-light lg:leading-10 hidden lg:block">
              One Click
              <br />& Done
            </h3>
            <h3 className="font-helvetica-neue text-2xl sm:text-3xl lg:text-[40px] font-light lg:leading-10 block lg:hidden">One Click & Done</h3>
            <p className="font-minion-pro text-base sm:text-lg lg:text-[20px] leading-6 lg:leading-7 lg:max-w-79.5">
              Let the machine use power for you. With a single foot press, the bucket starts to rotate the mop holder and drains the water in seconds.
            </p>
          </div>
          <div className="relative w-full max-w-[820px] flex-1 aspect-820/820">
            <ReactCompareSlider
              itemOne={<ReactCompareSliderImage src="/images/projects/colosseum-name-detail-1.webp" alt="Before" style={{ width: '100%', height: '100%' }} />}
              itemTwo={<ReactCompareSliderImage src="/images/projects/colosseum-name-detail-2222.webp" alt="After" style={{ width: '100%', height: '100%' }} />}
            />
          </div>
        </article>
      </section>

      <section className="w-full pt-0 pb-12.5 lg:py-12.5 flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-12.5">
        <CommonDetailCarousel
          classNames="flex-1 min-w-0 mx-auto max-w-full md:max-w-9/12"
          bigImageDivClassName="w-full aspect-square max-h-200"
          bigImageClassName="object-contain object-center"
          miniImageContainerClassName="justify-center"
          miniImageDivClassName="aspect-square max-w-[61px]"
          miniImageClassName="object-cover object-center"
          showBackdropImage={false}
          enableLightbox
          initialImage={{ src: '/images/colosseum/1.1.jpg', className: '' }}
          images={[
            { src: '/images/colosseum/1.1.jpg', className: '' },
            { src: '/images/colosseum/1.2.jpg', className: '' },
            { src: '/images/colosseum/1.3.jpg', className: '' },
            { src: '/images/colosseum/2.1.jpg', className: '' },
            { src: '/images/colosseum/2.2.1.jpg', className: '' },
            { src: '/images/colosseum/3.1.jpg', className: '' },
            { src: '/images/colosseum/3.2.jpg', className: '' },
            { src: '/images/colosseum/3.3.1.jpg', className: '' },
          ]}
        />
        {/* <article className="flex-1 max-w-125 w-full flex flex-col items-start gap-4 sm:gap-8 lg:gap-12.5">
          <h2 className="font-helvetica-neue text-2xl sm:text-3xl lg:text-[40px] font-bold lg:leading-10 hidden lg:block">
            Exterior Images <br /> <span className="font-light">Text Here</span>
          </h2>
          <h2 className="font-helvetica-neue text-2xl sm:text-3xl lg:text-[40px] font-bold lg:leading-10 block lg:hidden">
            Exterior Images <span className="font-light">Text Here</span>
          </h2>
          <p className="font-minion-pro text-base sm:text-lg lg:text-[20px] leading-6 lg:leading-7 lg:max-w-79.5">
            The product is made from a bead-blasted stainless steel body and a frosted satin glass diffuser, available in two different colors. While providing comfortable lighting, the
            lights located on the bottom part interact with the user by pulsing in sync with the sound level at the table.
          </p>
        </article> */}
      </section>
    </main>
  );
}
