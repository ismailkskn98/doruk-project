'use client';

import Image from 'next/image';
import { useState } from 'react';

const images = [
  { src: '/images/projects/viberon-detail-3-final.png', alt: 'viberon-detail-3-final' },
  { src: '/images/projects/viberon-detail-3-top.webp', alt: 'viberon-detail-3-top' },
  { src: '/images/projects/viberon-detail-3-center.webp', alt: 'viberon-detail-3-center' },
  { src: '/images/projects/viberon-detail-3-bottom.webp', alt: 'viberon-detail-3-bottom' },
];

export default function ViberonGallery() {
  const [activeImage, setActiveImage] = useState(images[0]);

  const thumbnails = images.filter((img) => img.src !== activeImage.src);

  return (
    <section className="w-full grid grid-cols-3 place-content-stretch justify-items-stretch py-[clamp(20px,4vw,75px)] gap-2.5 sm:gap-6 lg:gap-12.5">
      <article className="relative col-span-2 w-full h-full aspect-893/893">
        <Image src={activeImage.src} alt={activeImage.alt} fill className="object-cover object-center h-full w-full" unoptimized quality={100} sizes="100vw" />
      </article>
      <article className="grid grid-cols-1 gap-2.5 sm:gap-6 lg:gap-12.5 w-full h-full max-w-[416px] aspect-416/893">
        {thumbnails.map((img) => (
          <div key={img.src} className="relative w-full h-full cursor-pointer" onClick={() => setActiveImage(img)}>
            <Image src={img.src} alt={img.alt} fill className="object-cover object-center" unoptimized quality={100} sizes="100vw" />
          </div>
        ))}
      </article>
    </section>
  );
}
