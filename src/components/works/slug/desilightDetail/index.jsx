'use client';

import CommonHero from '@/components/common/commonHero';
import { useHeaderStore } from '@/store/headerStore';
import { useIntroStore } from '@/store/introStore';
import Image from 'next/image';
import React, { useEffect } from 'react';
import SoundChart from './soundChart';
import CommonDetailCarousel from '@/components/common/commonDetailCarousel';
import ModeBar from './modeBar';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function DesilightDetail() {
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
        image="/images/projects/desilight-detail-heroo.png"
        imageClassName="object-center"
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
      <section className="w-full py-6 lg:py-18.75 flex md:flex-row flex-col items-start md:items-end gap-8 lg:gap-12.5">
        <article className="relative flex-1 max-h-187.5 w-full aspect-1000/750">
          <Image src="/images/projects/desilight-detail-1.webp" alt="desilight-detail-1" fill className="object-cover object-center h-full w-full" />
        </article>
        <article className="flex-1 w-full md:max-w-77.5 font-minion-pro text-base lg:text-lg 2xl:text-[20px] leading-6 2xl:leading-7">
          <p>
            The issue of being disturbed by loud voices in restaurants is a common but often overlooked problem, even though it causes significant discomfort. In most cases, it is
            inappropriate for businesses or staff to directly warn the customers. To solve this problem, a product that subtly alerts customers without annoying them would be a gentle and
            efficient solution.
          </p>
        </article>
      </section>

      <section className="w-full py-6 sm:py-12.5 lg:py-18.5 xl:py-25 flex items-center">
        <main className="w-full flex flex-col md:flex-row items-start md:items-center gap-3.5 sm:gap-5 md:gap-10.5">
          <article className="xl:max-w-125 w-full flex-1 font-helvetica-neue leading-11">
            <h2 className="font-bold text-lg sm:text-xl lg:text-3xl 2xl:text-[40px] hidden md:block">
              Problem:
              <br />
              <span className="font-light">
                Loud Voices In
                <br />
                Public Spaces
              </span>
            </h2>
            <h2 className="font-bold text-lg sm:text-xl lg:text-3xl 2xl:text-[40px] block md:hidden">
              Problem:
              <span className="font-light"> Loud Voices In Public Spaces</span>
            </h2>
          </article>
          <article className="bg-custom-gray w-full flex-1 flex items-center justify-center gap-4.5 py-2.5 px-12">
            <div className="flex flex-col items-center">
              <span className="font-extralight text-5xl lg:text-7xl 2xl:text-[96px] leading-20">%10</span>
              <span className="font-helvetica-neue text-lg lg:text-2xl 2xl:text-[32px] font-light text-nowrap">Increas in dB</span>
            </div>
            <span className="text-5xl lg:text-7xl 2xl:text-[128px] font-extralight -mt-4">=</span>
            <div className="flex flex-col items-center">
              <span className="font-extralight text-5xl lg:text-7xl 2xl:text-[96px] leading-20">%28</span>
              <span className="font-helvetica-neue text-lg lg:text-2xl 2xl:text-[32px] font-light text-nowrap">Increase in Anxiety</span>
            </div>
          </article>
        </main>
      </section>

      <section className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-12.5 xl:gap-25 py-6 sm:py-12.5 lg:py-18.5 xl:py-25">
        <article className="bg-custom-gray py-3.5 px-0 2xl:p-5 flex-1 w-full flex flex-col items-center gap-4">
          <p className="font-helvetica-neue font-light text-sm xl:text-base leading-[1.2] text-black text-center">Average Sound Level In Restaurant Types</p>
          <SoundChart
            data={[
              { name: 'Ideal for Human', value: 60 },
              { name: 'Average of Restaurant', value: 77 },
              { name: '%75 of Restaurants', value: 81 },
            ]}
            yTicks={[60, 77, 81]}
            yTickFormatter={(value) => `${value}dB`}
            domain={[30, 85]}
          />
        </article>
        <article className="bg-custom-gray py-3.5 px-0 2xl:p-5 flex-1 w-full flex flex-col items-center gap-4">
          <p className="font-helvetica-neue font-light text-sm xl:text-base leading-[1.2] text-black text-center">Average Sound Level In Restaurant Types</p>
          <SoundChart
            data={[
              { name: 'Fast Food', value: 80 },
              { name: 'Mid Range', value: 70 },
              { name: 'Fine Dining', value: 60 },
            ]}
            yTicks={[60]}
            domain={[35, 85]}
            yTickFormatter={(value) => `${value}dB`}
          />
        </article>
        <article className="md:col-span-2 xl:col-span-1 bg-custom-gray py-3.5 px-0 2xl:p-5 flex-1 md:w-1/2 md:mx-auto xl:w-full flex flex-col items-center gap-4">
          <p className="font-helvetica-neue font-light text-sm xl:text-base leading-[1.2] text-black text-center">Average Timespan In Restaurant Types</p>
          <SoundChart
            data={[
              { name: 'Fast Food', value: 15 },
              { name: 'Mid Range', value: 45 },
              { name: 'Fine Dining', value: 90 },
            ]}
            yTicks={[15, 45, 90]}
            domain={[0, 100]}
            yTickFormatter={(value) => {
              if (value === 15) return '15-30\nmin';
              if (value === 45) return '45-90\nmin';
              if (value === 90) return '90-180\nmin';
              return value;
            }}
          />
        </article>
      </section>

      <section className="w-full py-6 lg:py-18.75">
        <main className="w-full flex flex-col gap-10 md:gap-18 lg:gap-12.5">
          <article className="w-full flex md:flex-row flex-col-reverse items-end md:items-start gap-6 md:gap-12.5">
            <div className="flex-1 w-full flex flex-col items-end text-end gap-2.5 sm:gap-4 lg:gap-6 xl:gap-10">
              <h3 className="font-helvetica-neue text-2xl lg:text-3xl xl:text-[32px] font-bold xl:leading-10 hidden md:block">
                Solution:
                <br />
                <span className="font-light">
                  See The <br />
                  Voice
                </span>
              </h3>
              <h3 className="font-helvetica-neue text-2xl lg:text-3xl xl:text-[32px] font-bold xl:leading-10 block md:hidden">
                Solution: <span className="font-light">See The Voice</span>
              </h3>
              <p className="font-minion-pro text-base lg:text-lg xl:text-[20px] xl:leading-7 max-w-79.5">
                A collection of table lamps designed to interact with users, creating comfortable public spaces. The lights on the bottom respond to the sound level of each table, allowing
                users to become aware of their volume.
              </p>
            </div>
            <div className="relative w-full max-w-163.75 flex-1 aspect-655/655">
              <Image src="/images/projects/desilight-detail-3.webp" alt="desilight-detail-3" fill className="object-cover object-center h-full w-full" />
            </div>
          </article>
          <article className="w-full flex md:flex-row flex-col items-start md:items-end justify-end gap-6 md:gap-12.5 md:-mt-30">
            <div className="relative w-full max-w-163.75 flex-1 aspect-655/655">
              <Image src="/images/projects/desilight-detail-4.webp" alt="desilight-detail-4" fill className="object-cover object-left h-full w-full" />
            </div>
            <div className="flex-1 w-full max-w-[660px] flex flex-col items-start text-start gap-2.5 sm:gap-4 lg:gap-6 xl:gap-10">
              <h3 className="font-helvetica-neue text-2xl lg:text-3xl xl:text-[32px] font-bold xl:leading-10 hidden md:block">
                DesiLight
                <br />
                <span className="font-light">Picky</span>
              </h3>
              <h3 className="font-helvetica-neue text-2xl lg:text-3xl xl:text-[32px] font-bold xl:leading-10 block md:hidden">
                DesiLight <span className="font-light">Picky</span>
              </h3>
              <p className="font-minion-pro text-base lg:text-lg xl:text-[20px] xl:leading-7 max-w-79.5">
                The product is made from a bead-blasted stainless steel body and a frosted satin glass diffuser, available in two different colors. While providing comfortable lighting, the
                lights located on the bottom part interact with the user by pulsing in sync with the sound level at the table.
              </p>
            </div>
          </article>
        </main>

        <article className="w-full flex md:flex-row flex-col-reverse items-end md:items-start gap-6 md:gap-12.5 mt-12 xl:mt-25">
          <div className="w-full max-w-[660px] flex-1 flex flex-col items-end text-end gap-2.5 sm:gap-4 lg:gap-6 xl:gap-10">
            <h3 className="font-helvetica-neue text-2xl lg:text-3xl xl:text-[32px] font-bold xl:leading-10">
              DesiLight
              <br />
              <span className="font-light">Biggy</span>
            </h3>
            <p className="font-minion-pro text-base lg:text-lg xl:text-[20px] xl:leading-7 max-w-79.5">
              Designed for better durability, the product is made from a cast polyethylene (PE) body and a frosted acrylic (PMMA) diffuser, available in three different colors.
            </p>
          </div>
          <div className="relative w-full max-w-163.75 flex-1 aspect-655/655">
            <Image src="/images/projects/desilight-detail-5.webp" alt="desilight-detail-5" fill className="object-cover object-left h-full w-full" />
          </div>
        </article>

        <main className="flex flex-col items-start mt-12 md:mt-0">
          <h2 className="font-helvetica-neue text-2xl md:text-3xl xl:text-[40px] font-bold hidden md:block">
            Approach:
            <br />
            <span className="font-light">Make It Visable</span>
          </h2>
          <h2 className="font-helvetica-neue text-2xl md:text-3xl xl:text-[40px] font-bold block md:hidden">
            Approach: <span className="font-light">Make It Visable</span>
          </h2>
          <section className="w-full flex flex-col items-center gap-4 sm:gap-12.5 lg:gap-18.75 py-6 md:py-12.5 lg:py-18.75">
            <main className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-6">
              <article className="flex flex-col items-center text-center lg:text-start lg:items-start sm:border-r lg:border-r-0 border-b border-black lg:pb-12 p-4 lg:p-1">
                <h4 className="font-light font-helvetica-neue">Turn on the product & select a mode.</h4>
                <div className="relative w-full max-w-85 h-58.5 lg:border-r-2 border-black p-5">
                  <Image src="/images/projects/desilight-detail-7-approach-1.webp" alt="desilight-detail-7-approach-1" fill className="object-fit object-center h-full w-full" />
                </div>
              </article>
              <article className="flex flex-col items-center text-center lg:text-start lg:items-start border-b border-black lg:pb-12 p-4 lg:p-1">
                <h4 className="font-light font-helvetica-neue">Ensure the microphone on top is not covered.</h4>
                <div className="relative w-full max-w-85 h-58.5 lg:border-r-2 border-black p-5">
                  <Image src="/images/projects/desilight-detail-7-approach-2.webp" alt="desilight-detail-7-approach-2" fill className="object-fit object-center h-full w-full" />
                </div>
              </article>
              <section className="sm:col-span-2 w-full">
                <article className="flex flex-col items-center text-center lg:text-start lg:items-start border-b border-black lg:pb-12 p-4 lg:p-1">
                  <h4 className="font-light font-helvetica-neue">The light located on the body will pulse in sync with the sound level of the conversation.</h4>
                  <div className="w-full flex items-start justify-between">
                    <div className="relative w-full max-w-85 h-58.5">
                      <Image src="/images/projects/desilight-detail-7-approach-3.webp" alt="desilight-detail-7-approach-3" fill className="object-fit object-center h-full w-full" />
                    </div>
                    <div className="relative w-full max-w-85 h-58.5">
                      <Image src="/images/projects/desilight-detail-7-approach-4.webp" alt="desilight-detail-7-approach-4" fill className="object-fit object-center h-full w-full" />
                    </div>
                  </div>
                </article>
              </section>
              {/*  */}
              <article className="flex flex-col items-center text-center lg:text-start lg:items-start sm:border-r border-black lg:border-r-0 border-b lg:border-b-0 p-4 lg:p-1">
                <h4 className="font-light font-helvetica-neue">When the sound level remains at extreme, the main light will blink.</h4>
                <div className="relative w-full max-w-85 h-58.5 lg:border-r-2 border-black">
                  <Image src="/images/projects/desilight-detail-7-approach-5.webp" alt="desilight-detail-7-approach-5" fill className="object-fit object-center h-full w-full" />
                </div>
              </article>
              <article className="flex flex-col items-center text-center lg:text-start lg:items-start justify-between lg:justify-start lg:border-r-0 border-b lg:border-b-0 border-black p-4 lg:p-1">
                <h4 className="font-light font-helvetica-neue">If the sound level does not decrease, the lights will turn off.</h4>
                <div className="relative w-full max-w-85 h-58.5 lg:border-r-2 border-black">
                  <Image src="/images/projects/desilight-detail-7-approach-6.webp" alt="desilight-detail-7-approach-6" fill className="object-fit object-center h-full w-full" />
                </div>
              </article>
              <article className="flex flex-col items-center text-center lg:text-start lg:items-start sm:border-r lg:border-r-0 border-black border-b sm:border-b-0 p-4 lg:p-1">
                <h4 className="font-light font-helvetica-neue">When the sound level normalise, the lights will turn back to normal.</h4>
                <div className="relative w-full max-w-85 h-58.5 lg:border-r-2 border-black">
                  <Image src="/images/projects/desilight-detail-7-approach-7.webp" alt="desilight-detail-7-approach-7" fill className="object-fit object-center h-full w-full" />
                </div>
              </article>
              <article className="flex flex-col items-center text-center lg:text-start lg:items-star justify-between lg:justify-start p-4 lg:p-1">
                <h4 className="font-light font-helvetica-neue">The product need to be charged after 12 hours.</h4>
                <div className="relative w-full max-w-85 h-58.5">
                  <Image src="/images/projects/desilight-detail-7-approach-8.webp" alt="desilight-detail-7-approach-8" fill className="object-fit object-center h-full w-full" />
                </div>
              </article>
            </main>
            <ModeBar />
          </section>
        </main>
        <main className="w-full py-6 lg:py-18.75 flex gap-25">
          <article className="flex-1 w-full">
            <ReactCompareSlider
              className="w-full h-200"
              itemOne={<ReactCompareSliderImage src="/images/projects/deney.png" alt="Before" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />}
              itemTwo={<ReactCompareSliderImage src="/images/projects/3.png" alt="After" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />}
            />
          </article>
          <CommonDetailCarousel
            initialImage={{ src: '/images/projects/desilight-detail-carousel/image-2.webp', className: 'object-cover object-[50%_80%]' }}
            bigImageDivClassName="w-full h-[600px]"
            bigImageClassName="object-cover object-[50%_40%]"
            miniImageDivClassName="h-45"
            miniImageClassName="object-center object-fill"
            classNames=""
            images={[
              { src: '/images/projects/desilight-detail-carousel/image-2.webp', className: 'object-cover object-[50%_80%]' },
              { src: '/images/projects/desilight-detail-carousel/image-1.webp', className: 'object-cover object-[50%_80%]' },
              { src: '/images/projects/desilight-detail-carousel/image-3.webp', className: 'object-cover object-[50%_80%]' },
              { src: '/images/projects/desilight-detail-carousel/image-4.webp', className: 'object-contain object-[50%_50%]' },
            ]}
          />
        </main>
      </section>
    </main>
  );
}
