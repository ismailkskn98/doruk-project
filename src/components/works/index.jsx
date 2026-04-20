'use client';
import { useHeaderStore } from '@/store/headerStore';
import { useIntroStore } from '@/store/introStore';
import React, { useEffect, useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

const categories = [
  { key: 'art', value: 'ART' },
  { key: 'design', value: 'DESIGN' },
  { key: 'architecture', value: 'ARCHITECTURE' },
  // { key: 'graphic', value: 'GRAPHIC' },
];

const slideVariants = {
  enter: (direction) => ({ x: direction > 0 ? '60%' : '-60%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction > 0 ? '-60%' : '60%', opacity: 0 }),
};

/*

        <Link href="/works/riva-937" className="flex flex-col items-start gap-2.5 lg:gap-5 aspect-550/634">
          <div className="relative w-full aspect-550/550 overflow-hidden cursor-pointer group shrink-0">
            <Image src="/images/projects/riva-937.webp" alt="riva-937" fill className="object-cover object-center h-full w-full group-hover:scale-105 transition-all duration-500" />
          </div>
          <h3 className="text-[clamp(16px,4vw,32px)] font-bold font-helvetica-neue uppercase">
            Riva 937 <span className="font-light">2024</span>
          </h3>
        </Link>
*/

export default function WorksMain() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || 'design';
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [direction, setDirection] = useState(1);
  const [awardOpen, setAwardOpen] = useState(false);
  const setTitle = useHeaderStore((state) => state.setTitle);
  const setLightTitle = useHeaderStore((state) => state.setLightTitle);
  const setIntroComplete = useIntroStore((state) => state.setIntroComplete);

  const categoryContent = {
    art: (
      <main className=" flex flex-col items-start gap-[clamp(20px,4vw,50px)] mx-auto">
        <section className="w-full grid grid-cols-2 place-content-stretch justify-items-stretch gap-4 sm:gap-6 lg:gap-8 xl:gap-13">
          <Link href="/works/extreamity" className="flex flex-col items-start gap-2.5 lg:gap-5 aspect-550/634">
            <div className="relative w-full aspect-550/550 overflow-hidden cursor-pointer group shrink-0">
              <Image src="/images/projects/extreamity.webp" alt="extreamity" fill className="object-cover object-[55%_50%] h-full w-full group-hover:scale-105 transition-all duration-500" />
            </div>
            <h3 className="text-[clamp(16px,4vw,32px)] font-bold font-helvetica-neue uppercase">
              EXTREAMITY <span className="font-light">2023</span>
            </h3>
          </Link>
        </section>
      </main>
    ),
    design: (
      <main className=" flex flex-col items-start gap-[clamp(20px,4vw,50px)] mx-auto">
        <section className="w-full grid grid-cols-2 place-content-stretch justify-items-stretch gap-4 sm:gap-6 lg:gap-8 xl:gap-13">
          <Link href="/works/desilight" className="flex flex-col items-start gap-2.5 lg:gap-5 aspect-550/634">
            <div className="relative w-full aspect-550/550 overflow-hidden cursor-pointer group shrink-0">
              <Image
                src="/images/projects/desilight-2025.webp"
                alt="desiglight-2025"
                fill
                className="object-cover object-center h-full w-full group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <h3 className="text-[clamp(16px,4vw,32px)] font-bold font-helvetica-neue uppercase">
              DesiLight <span className="font-light">2025</span>
            </h3>
          </Link>
          <Link href="/works/viberon" className="flex flex-col items-start gap-2.5 lg:gap-5 aspect-550/634">
            <div className="relative w-full aspect-550/550 overflow-hidden cursor-pointer group shrink-0">
              <Image src="/images/projects/viberon-2025.webp" alt="viberon-2025" fill className="object-cover object-right h-full w-full group-hover:scale-105 transition-all duration-500" />
            </div>
            <h3 className="text-[clamp(16px,4vw,32px)] font-bold font-helvetica-neue uppercase">
              Viberon <span className="font-light">2025</span>
            </h3>
          </Link>
          <Link href="/works/colosseum-name" className="flex flex-col items-start gap-2.5 lg:gap-5 aspect-550/634">
            <div className="relative w-full aspect-550/550 overflow-hidden cursor-pointer group shrink-0">
              <Image
                src="/images/projects/colosseum-name.webp"
                alt="colosseum-name"
                fill
                className="object-cover object-center h-full w-full scale-160 group-hover:scale-165 transition-all duration-500 rotate-90"
              />
            </div>
            <h3 className="text-[clamp(16px,4vw,32px)] font-bold font-helvetica-neue uppercase">
              Colosseum<span className="font-light"> 2021</span>
            </h3>
          </Link>
          <Link href="/works/fuantei" className="flex flex-col items-start gap-2.5 lg:gap-5 aspect-550/634">
            <div className="relative w-full aspect-550/550 overflow-hidden cursor-pointer group shrink-0">
              <Image src="/images/projects/fuantei.webp" alt="fuantei" fill className="object-cover object-right h-full w-full group-hover:scale-105 transition-all duration-500" />
            </div>
            <h3 className="text-[clamp(16px,4vw,32px)] font-bold font-helvetica-neue uppercase">
              Fuantei <span className="font-light">2020</span>
            </h3>
          </Link>
        </section>
      </main>
    ),
    architecture: (
      <main className=" flex flex-col items-start gap-[clamp(20px,4vw,50px)] mx-auto">
        <section className="w-full grid grid-cols-2 place-content-stretch justify-items-stretch gap-4 sm:gap-6 lg:gap-8 xl:gap-13">
          <div className="flex flex-col items-start gap-2.5 lg:gap-5 aspect-550/634">
            <div className="relative w-full aspect-550/550 overflow-hidden cursor-pointer group shrink-0">
              <Link href="/works/the-modular-home">
                <Image
                  src="/images/projects/the-modular-home-crop.webp"
                  alt="the-modular-home"
                  fill
                  className="object-cover object-center h-full w-full group-hover:scale-105 transition-all duration-500"
                />
              </Link>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setAwardOpen(true);
                }}
                className="absolute left-3 top-3 z-20 cursor-pointer"
              >
                <Image src="/images/projects/the-modular-home-absolute.webp" alt="iF Design Award 2026" width={133} height={68} className="object-contain max-w-20 sm:max-w-25 md:max-w-33" />
              </button>
            </div>
            <Link href="/works/the-modular-home">
              <h3 className="text-[clamp(16px,4vw,32px)] font-bold font-helvetica-neue uppercase">
                The Modular Home <span className="font-light">2026</span>
              </h3>
            </Link>
          </div>
          <Link href="/works/riva-937" className="flex flex-col items-start gap-2.5 lg:gap-5 aspect-550/634">
            <div className="relative w-full aspect-550/550 overflow-hidden cursor-pointer group shrink-0">
              <Image src="/images/projects/riva-937.webp" alt="riva-937" fill className="object-cover object-center h-full w-full group-hover:scale-105 transition-all duration-500" />
            </div>
            <h3 className="text-[clamp(16px,4vw,32px)] font-bold font-helvetica-neue uppercase">
              Riva 937 <span className="font-light">2024</span>
            </h3>
          </Link>
        </section>
        <Dialog open={awardOpen} onOpenChange={setAwardOpen}>
          <DialogContent className="max-w-[min(94vw,700px)] border-0 bg-transparent p-0 shadow-none ring-0">
            <DialogTitle className="sr-only">iF Design Award 2026</DialogTitle>
            <div className="w-full flex items-center justify-center">
              <Image src="/images/projects/the-modular-home-absolute.webp" alt="iF Design Award 2026" width={700} height={360} className="w-full h-auto object-contain" />
            </div>
          </DialogContent>
        </Dialog>
      </main>
    ),
  };

  useEffect(() => {
    setLightTitle('WORKS');
    setTitle('');
    setIntroComplete(true);
  }, [setTitle, setLightTitle, setIntroComplete]);

  const handleTabChange = (value) => {
    const prevIndex = categories.findIndex((c) => c.key === selectedCategory);
    const nextIndex = categories.findIndex((c) => c.key === value);
    setDirection(nextIndex > prevIndex ? 1 : -1);
    setSelectedCategory(value);
    const url = new URL(window.location);
    url.searchParams.set('category', value);
    window.history.pushState({}, '', url);
  };

  return (
    <main className="w-full gridContainer overflow-hidden">
      <Tabs value={selectedCategory} onValueChange={handleTabChange} className="w-full gap-0">
        <TabsList variant="line" className="w-full flex justify-between py-[clamp(14px,4vw,46px)] gap-2.5 px-0">
          {categories.map((cat) => (
            <TabsTrigger value={cat.key} key={cat.key} className="font-bold text-[clamp(16px,3vw,24px)] max-w-fit uppercase px-0">
              {cat.value}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="w-full overflow-hidden pb-[clamp(24px,4vw,46px)]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div key={selectedCategory} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25, ease: 'easeOut' }}>
              {categoryContent[selectedCategory]}
            </motion.div>
          </AnimatePresence>
        </div>
      </Tabs>
    </main>
  );
}
