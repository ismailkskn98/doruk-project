import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import MotionLeftView from './motionLeftView';
import MotionRightView from './motionRightView';

export default function CommonHero({ video, image, alt, title, lightTitle, subtitle, description, sideInfo = [], imageClassName = '' }) {
  return (
    <main className="w-full flex flex-col items-start">
      {/* w-full flex flex-col md:flex-row md:items-end md:justify-between gap-6 sm:gap-7 md:gap-10 pb-3 sm:pb-2 pt-4 md:py-8 lg:py-12.5 overflow-hidden */}
      <MotionLeftView className="w-full pb-8 pt-4 sm:py-8 lg:py-12.5 overflow-hidden">
        {video ? (
          <section className="w-full flex items-center justify-center">
            <div className="relative w-full aspect-1360/800 min-h-65 sm:min-h-80 overflow-hidden">
              <video className="absolute inset-0 h-full w-full bg-white" autoPlay loop muted playsInline>
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </section>
        ) : (
          <div className="relative w-full aspect-1360/700">
            <Image src={image} alt={alt} fill className={cn('w-full h-auto object-cover object-[50%_42%]', imageClassName)} />
          </div>
        )}
      </MotionLeftView>
      <MotionRightView className="w-full flex items-start justify-between py-0 sm:py-4 lg:py-12.5 gap-4 sm:gap-8 lg:gap-12 font-helvetica-neue">
        <article className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-12.5">
          <div className="flex flex-col items-start gap-0 lg:gap-2.5">
            <h2 className="font-bold text-xl sm:text-2xl lg:text-[32px] leading-5 sm:leading-6 md:leading-7 text-nowrap">
              {title} {lightTitle && <span className="font-light">{lightTitle}</span>}
            </h2>
            <p className="font-light text-lg sm:text-xl lg:text-2xl leading-7 text-nowrap">{subtitle}</p>
          </div>
          <article className="w-full flex md:hidden items-center justify-between gap-6 sm:gap-8 lg:gap-12.5">
            {sideInfo.map((info, index) => (
              <div key={index} className="flex flex-col items-center gap-0 lg:gap-2.5 leading-4">
                <span className="uppercase font-bold text-lg sm:text-xl lg:text-2xl">{info.label}</span>
                <span className="text-sm sm:text-base lg:text-[20px] font-light text-nowrap">{info.value}</span>
              </div>
            ))}
          </article>
          <p className="max-w-175 text-base sm:text-lg lg:text-[20px] font-minion-pro leading-6 md:leading-7 pb-10 sm:pb-8 lg:pb-0">{description}</p>
        </article>
        <article className="hidden md:flex flex-col items-end gap-4 sm:gap-8 lg:gap-12.5">
          {sideInfo.map((info, index) => (
            <div key={index} className="flex flex-col items-end gap-0 lg:gap-2.5 leading-4 text-nowrap text-right">
              <span className="uppercase font-bold text-lg sm:text-xl lg:text-2xl">{info.label}</span>
              <span className="text-base sm:text-lg lg:text-[20px] font-light text-nowrap">{info.value}</span>
            </div>
          ))}
        </article>
      </MotionRightView>
    </main>
  );
}
