'use client';
import { useHeaderStore } from '@/store/headerStore';
import { useIntroStore } from '@/store/introStore';
import React, { useEffect, useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';

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
            Colosseum Name <span className="font-light">2021</span>
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
        <Link href="/works/the-modular-home" className="flex flex-col items-start gap-2.5 lg:gap-5 aspect-550/634">
          <div className="relative w-full aspect-550/550 overflow-hidden cursor-pointer group shrink-0">
            <Image
              src="/images/projects/the-modular-home-crop.webp"
              alt="the-modular-home"
              fill
              className="object-cover object-center h-full w-full group-hover:scale-105 transition-all duration-500"
            />
            <Image
              src="/images/projects/the-modular-home-absolute.webp"
              alt="the-modular-home-absolute"
              width={150}
              height={70}
              className="absolute left-6 top-6 z-20 object-cover object-center w-33.25 h-17"
            />
          </div>
          <h3 className="text-[clamp(16px,4vw,32px)] font-bold font-helvetica-neue uppercase">
            The Modular Home <span className="font-light">2026</span>
          </h3>
        </Link>
        <Link href="/works/riva-937" className="flex flex-col items-start gap-2.5 lg:gap-5 aspect-550/634">
          <div className="relative w-full aspect-550/550 overflow-hidden cursor-pointer group shrink-0">
            <Image src="/images/projects/riva-937.webp" alt="riva-937" fill className="object-cover object-center h-full w-full group-hover:scale-105 transition-all duration-500" />
          </div>
          <h3 className="text-[clamp(16px,4vw,32px)] font-bold font-helvetica-neue uppercase">
            Riva 937 <span className="font-light">2024</span>
          </h3>
        </Link>
      </section>
    </main>
  ),
  // graphic: (
  //   <main className=" flex flex-col items-start gap-[clamp(20px,4vw,50px)] max-w-6xl mx-auto">
  //     <section className="w-full grid grid-cols-2 place-content-stretch justify-items-stretch gap-4 sm:gap-6 lg:gap-8 xl:gap-13"></section>
  //   </main>
  // ),
};

export default function WorksMain() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || 'design';
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [direction, setDirection] = useState(1);
  const setTitle = useHeaderStore((state) => state.setTitle);
  const setLightTitle = useHeaderStore((state) => state.setLightTitle);
  const setIntroComplete = useIntroStore((state) => state.setIntroComplete);

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
        <div className="w-full overflow-hidden">
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
