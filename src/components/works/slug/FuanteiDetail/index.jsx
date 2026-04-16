'use client';
import CommonHero from '@/components/common/commonHero';
import { useHeaderStore } from '@/store/headerStore';
import { useIntroStore } from '@/store/introStore';
import Image from 'next/image';
import React, { useEffect } from 'react';

export default function FuanteiDetail() {
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
        image="/images/projects/fuantei.webp"
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

      <section className="w-full pt-6 pb-12.5 lg:py-18.75">
        <article className="w-full flex flex-col-reverse lg:flex-row items-start lg:justify-end gap-6 sm:gap-8 lg:gap-12.5">
          <div className="flex flex-col lg:items-end lg:text-end gap-4 sm:gap-8 lg:gap-12.5">
            <h3 className="font-helvetica-neue text-2xl sm:text-3xl lg:text-[40px] font-light lg:leading-10 hidden lg:block">
              Made by
              <br />
              Hand
            </h3>
            <h3 className="font-helvetica-neue text-2xl sm:text-3xl lg:text-[40px] font-light lg:leading-10 block lg:hidden">Made by Hand</h3>
            <p className="font-minion-pro text-base sm:text-lg lg:text-[20px] leading-6 sm:leading-7 lg:leading-7 lg:max-w-79.5">
              The collection is inspired by traditional craftsmanship slip casting, makes each piece unique. The entire production of first series of the collection made by the designer
              himself by hand to refine the shape and reach the ideal form.
            </p>
            <button type="button" className="p-2.5 sm:p-3.75 bg-custom-gray font-helvetica-neue font-light text-sm sm:text-lg lg:text-[20px] w-fit">
              Watch Production Video
            </button>
          </div>
          <div className="relative w-full max-w-[820px] flex-1 aspect-820/820">
            <Image src="/images/projects/fuantei-detail-1.webp" alt="fuantei-detail-1" fill className="object-cover object-center h-full w-full" />
          </div>
        </article>
      </section>
    </main>
  );
}
