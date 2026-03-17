import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

export default function CommonHero({ image, alt, title, subtitle, description, sideInfo = [], imageClassName = '' }) {

    return (
        <main className='w-full flex flex-col items-start'>
            <section className='w-full py-12.5'>
                <Image src={image} alt={alt} width={1360} height={700} className={cn("w-full object-cover object-[50%_42%] max-h-175", imageClassName)} />
            </section>
            <section className='w-full flex items-start justify-between py-12.5 gap-12 font-helvetica-neue'>
                <article className='flex flex-col items-start gap-12.5'>
                    <div className='flex flex-col items-start gap-2.5'>
                        <h2 className='font-bold text-[32px] leading-7'>{title}</h2>
                        <p className='font-light text-2xl leading-7'>{subtitle}</p>
                    </div>
                    <p className='max-w-175 text-[20px] font-minion-pro leading-7'>
                        {description}
                    </p>
                </article>
                <article className='flex flex-col items-end gap-12.5'>
                    {sideInfo.map((info, index) => (
                        <div key={index} className='flex flex-col items-end gap-2.5 leading-4'>
                            <span className='uppercase font-bold text-2xl'>{info.label}</span>
                            <span className='text-[20px] font-light'>{info.value}</span>
                        </div>
                    ))}
                </article>
            </section>
        </main>
    )
}
