import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import MotionLeftView from './motionLeftView';
import MotionRightView from './motionRightView';

export default function CommonHero({ video, image, alt, title, lightTitle, subtitle, description, sideInfo = [], imageClassName = '' }) {
  return (
    <main className="w-full fluid gridContainer">
      <MotionLeftView className="fluid gridContainer w-full overflow-hidden">
        {video ? (
          <section className="w-full flex items-center justify-center">
            <div className="relative w-full aspect-1360/800 min-h-65 sm:min-h-80 overflow-hidden">
              <video className="absolute inset-0 h-full w-full bg-white" autoPlay loop muted playsInline>
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </section>
        ) : (
          <div className="relative w-full min-h-[250px] max-h-[800px] aspect-1360/800 min-[93.75rem]:fluid">
            <Image src={image} alt={alt} fill className={cn('w-full h-auto object-cover object-[50%_42%] min-[93.75rem]:px-12.5', imageClassName)} sizes="100vw" quality={100} unoptimized />
          </div>
        )}
      </MotionLeftView>
      <MotionRightView className="w-full flex items-start justify-between gap-[clamp(14px,4vw,50px)] font-helvetica-neue py-[clamp(28px,4vw,50px)]">
        <article className="flex flex-col items-start gap-[clamp(14px,4vw,50px)]">
          <div className="flex flex-col items-start gap-0 lg:gap-2.5 uppercase">
            <h2 className="font-bold text-[clamp(24px,4vw,32px)] leading-5 sm:leading-6 md:leading-7 text-nowrap">
              {lightTitle && <span className="font-light">{lightTitle}</span>} {title}
            </h2>
            <p className="font-light text-[clamp(18px,4vw,24px)] leading-7 text-nowrap">{subtitle}</p>
          </div>
          <article className="w-full flex md:hidden items-center justify-between gap-[clamp(14px,4vw,50px)]">
            {sideInfo.map((info, index) => (
              <div key={index} className="flex flex-col items-center justify-center gap-0 leading-4">
                <span className="uppercase font-bold text-[clamp(18px,4vw,24px)] text-nowrap">{info.label}</span>
                <span className="text-[clamp(16px,4vw,20px)] leading-relaxed font-light text-nowrap">{info.value}</span>
              </div>
            ))}
          </article>
          <p className="max-w-175 text-[clamp(16px,4vw,20px)] font-minion-pro tracking-[-0.015em] leading-6 lg:leading-5.7">{description}</p>
        </article>
        <article className="hidden md:flex flex-col items-end gap-[clamp(14px,4vw,50px)]">
          {sideInfo.map((info, index) => (
            <div key={index} className="flex flex-col items-end gap-0  leading-4 text-nowrap text-right">
              <span className="uppercase font-bold text-[clamp(18px,4vw,24px)] text-nowrap">{info.label}</span>
              <span className="text-[clamp(16px,4vw,20px)] leading-relaxed font-light text-nowrap">{info.value}</span>
            </div>
          ))}
        </article>
      </MotionRightView>
    </main>
  );
}
