"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function CommonDetailCarousel({ images, initialImage, time = 2500, classNames, miniImageDivClassName = "h-15.5", miniImageClassName, bigImageDivClassName, bigImageClassName }) {
  const [selectedImage, setSelectedImage] = useState(initialImage || images[0]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const stepImageChange = setInterval(() => {
      const currentIndex = images.indexOf(selectedImage);
      const nextIndex = (currentIndex + 1) % images.length;
      setSelectedImage(images[nextIndex]);
    }, time);

    return () => clearInterval(stepImageChange);
  }, [selectedImage, isHovered, time, images]);

  return (
    <main className={cn("flex-1 w-full flex flex-col items-center gap-5", classNames)}>
      <div className={cn("relative h-125 overflow-hidden w-full", bigImageDivClassName)} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <Image src={selectedImage.src} alt="Detail Carousel Image" fill className={cn("absolute inset-0 z-0 object-cover object-center w-full h-full")} />
        <Image src={selectedImage.src} alt="Detail Carousel Image" fill className={cn("relative z-20 object-cover object-center w-full h-full", bigImageClassName, selectedImage?.className)} />
      </div>
      <article className="w-full flex items-center justify-between gap-5">
        {images.map((image, index) => (
          <div key={index} className={cn("relative overflow-hidden w-full", { "ring-2 ring-primary": selectedImage?.src === image?.src, [miniImageDivClassName]: true })}>
            <Image
              src={image.src || image}
              alt={`Detail Carousel Image ${index + 1}`}
              fill
              className={cn("object-cover object-center w-full h-full cursor-pointer", miniImageClassName)}
              onClick={() => setSelectedImage(image)}
            />
          </div>
        ))}
      </article>
    </main>
  );
}
