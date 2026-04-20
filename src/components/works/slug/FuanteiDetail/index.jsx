'use client';
import CommonHero from '@/components/common/commonHero';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { useHeaderStore } from '@/store/headerStore';
import { useIntroStore } from '@/store/introStore';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const YOUTUBE_URL = 'https://www.youtube.com/watch?v=u9f43hQFp94';
const YOUTUBE_EMBED_URL = 'https://www.youtube-nocookie.com/embed/u9f43hQFp94?playsinline=1&rel=0';

function isIOS() {
  if (typeof navigator === 'undefined') return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

export default function FuanteiDetail() {
  const setTitle = useHeaderStore((state) => state.setTitle);
  const setLightTitle = useHeaderStore((state) => state.setLightTitle);
  const setIntroComplete = useIntroStore((state) => state.setIntroComplete);
  const [videoOpen, setVideoOpen] = useState(false);

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

      <section className="w-full pt-6 pb-12.5 lg:py-12.5">
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
            <button
              type="button"
              className="p-2.5 sm:p-3.75 bg-custom-gray font-helvetica-neue font-light text-sm sm:text-lg lg:text-[20px] w-fit"
              onClick={() => {
                if (isIOS()) {
                  window.open(YOUTUBE_URL, '_blank');
                } else {
                  setVideoOpen(true);
                }
              }}
            >
              Watch Production Video
            </button>
            <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
              <DialogContent className="!max-w-[min(94vw,1100px)] !w-[min(94vw,1100px)] border-0 bg-black p-0 shadow-none ring-0 sm:!max-w-[min(94vw,1100px)]">
                <DialogTitle className="sr-only">Fuantei Production Video</DialogTitle>
                <div className="relative w-full aspect-video">
                  <iframe
                    src={YOUTUBE_EMBED_URL}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="relative w-full max-w-[820px] flex-1 aspect-820/820">
            <Image src="/images/projects/fuantei-detail-1.webp" alt="fuantei-detail-1" fill className="object-cover object-center h-full w-full" />
          </div>
        </article>
      </section>
    </main>
  );
}
