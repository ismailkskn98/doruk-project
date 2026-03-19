'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function CommonDetailCarousel({ images, initialImage, time = 2500, classNames, miniImageClassName = "h-15.5", bigImageClassName }) {
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
    }, [selectedImage, isHovered, time, images])

    return (
        <main className={cn('flex-1 w-full flex flex-col items-center gap-2.5', classNames)}>
            <div
                className={cn('relative h-125 overflow-hidden w-full', bigImageClassName)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Image src={selectedImage} alt="Detail Carousel Image" fill className={cn('object-cover object-center w-full h-full')} />
            </div>
            <article className='w-full flex items-center justify-between gap-2.5'>
                {images.map((image, index) => (
                    <div key={index} className={cn('relative overflow-hidden w-full', {
                        'ring-2 shadow-sm ring-primary': selectedImage === image,
                        [miniImageClassName]: true
                    })}>
                        <Image
                            src={image}
                            alt={`Detail Carousel Image ${index + 1}`}
                            fill
                            className='object-cover object-center w-full h-full cursor-pointer'
                            onClick={() => setSelectedImage(image)}
                        />
                    </div>
                ))}
            </article>
        </main>
    )
}
