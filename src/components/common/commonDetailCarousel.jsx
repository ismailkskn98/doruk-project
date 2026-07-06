'use client';

import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';

function getImageSrc(image) {
  return image?.src || image;
}

function getSelectedIndex(images, selectedImage) {
  const selectedSrc = getImageSrc(selectedImage);
  const index = images.findIndex((image) => getImageSrc(image) === selectedSrc);
  return index >= 0 ? index : 0;
}

export default function CommonDetailCarousel({
  images,
  initialImage,
  time = 2500,
  classNames,
  miniImageDivClassName = 'h-15.5',
  miniImageClassName,
  bigImageDivClassName,
  bigImageClassName,
  showBackdropImage = true,
  showBackdropImageClassName,
  miniImageContainerClassName,
  enableLightbox = false,
}) {
  const [selectedImage, setSelectedImage] = useState(initialImage || images[0]);
  const [isHovered, setIsHovered] = useState(false);
  const [previewImage, setPreviewImage] = useState(initialImage || images[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const slides = useMemo(() => images.map((image) => ({ src: getImageSrc(image) })), [images]);

  useEffect(() => {
    if (isHovered) return;
    const stepImageChange = setInterval(() => {
      const currentIndex = getSelectedIndex(images, selectedImage);
      const nextIndex = (currentIndex + 1) % images.length;
      setSelectedImage(images[nextIndex]);
    }, time);

    return () => clearInterval(stepImageChange);
  }, [selectedImage, isHovered, time, images]);

  const openPreview = () => {
    const index = getSelectedIndex(images, selectedImage);
    setPreviewImage(selectedImage);
    setLightboxIndex(index);

    if (enableLightbox) {
      setLightboxOpen(true);
    }
  };

  const mainImageButton = (
    <button
      type="button"
      className={cn('relative max-h-126.5 aspect-810/506 overflow-hidden w-full cursor-zoom-in', bigImageDivClassName)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={openPreview}
    >
      {showBackdropImage ? (
        <Image src={selectedImage.src} alt="" aria-hidden fill className={cn('absolute inset-0 z-0 object-cover object-center w-full h-full', showBackdropImageClassName)} />
      ) : null}
      <Image
        src={selectedImage.src}
        alt="Detail Carousel Image"
        fill
        className={cn('relative z-20 object-cover object-center w-full h-full ', bigImageClassName, selectedImage?.className)}
      />
    </button>
  );

  return (
    <main className={cn('flex-1 w-full flex flex-col items-center gap-2 lg:gap-2.5 xl:gap-3 2xl:gap-5', classNames)}>
      {enableLightbox ? (
        mainImageButton
      ) : (
        <Dialog>
          <DialogTrigger asChild>{mainImageButton}</DialogTrigger>
          <DialogContent className="max-w-[min(94vw,1300px)] border-0 bg-transparent p-0 shadow-none ring-0 sm:max-w-[min(92vw,1200px)]">
            <DialogTitle className="sr-only">Detail Carousel Image Preview</DialogTitle>
            <div className="relative w-full max-h-[90vh] flex items-center justify-center">
              <Image src={previewImage.src} alt="Detail Carousel Image Preview" width={1300} height={900} className="w-full h-auto max-h-[90vh] object-contain" />
            </div>
          </DialogContent>
        </Dialog>
      )}

      {enableLightbox ? (
        <Lightbox
          open={lightboxOpen}
          close={() => {
            setLightboxOpen(false);
            setSelectedImage(images[lightboxIndex]);
          }}
          index={lightboxIndex}
          slides={slides}
          plugins={[Counter]}
          counter={{ container: { style: { top: 'auto', bottom: 20 } } }}
          animation={{ fade: 280, swipe: 320 }}
          carousel={{ finite: slides.length <= 1, padding: 0, spacing: 0 }}
          controller={{ closeOnBackdropClick: true }}
          styles={{
            container: { backgroundColor: 'rgba(0, 0, 0, 0.9)' },
            button: { filter: 'none' },
          }}
          on={{
            view: ({ index }) => setLightboxIndex(index),
          }}
        />
      ) : null}

      <article className={cn('w-full flex items-center justify-between gap-2 lg:gap-2.5 xl:gap-3 2xl:gap-5', miniImageContainerClassName)}>
        {images.map((image, index) => (
          <div key={index} className={cn('relative overflow-hidden w-full', { 'ring-2 ring-primary': selectedImage?.src === image?.src, [miniImageDivClassName]: true })}>
            <Image
              src={image.src || image}
              alt={`Detail Carousel Image ${index + 1}`}
              fill
              className={cn('object-cover object-center w-full h-full cursor-pointer', miniImageClassName)}
              onClick={() => setSelectedImage(image)}
            />
          </div>
        ))}
      </article>
    </main>
  );
}
