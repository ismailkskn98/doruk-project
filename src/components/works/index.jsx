'use client';
import { useHeaderStore } from '@/store/headerStore';
import { useIntroStore } from '@/store/introStore';
import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import MotionScrollInViewOpacity from '../common/motionScrollInViewOpacity';

const categories = [{ key: 'art', value: 'ART' }, { key: 'design', value: 'DESIGN' }, { key: 'architecture', value: 'ARCHITECTURE' }, { key: 'graphic', value: 'GRAPHIC' }];

export default function WorksMain() {
    const searchParams = useSearchParams();
    const category = searchParams.get('category') || 'art';
    const [selectedCategory, setSelectedCategory] = useState(category);
    const setTitle = useHeaderStore((state) => state.setTitle);
    const setLightTitle = useHeaderStore((state) => state.setLightTitle);
    const setIntroComplete = useIntroStore((state) => state.setIntroComplete);

    useEffect(() => {
        setLightTitle('Contact');
        setTitle('Doruk BICER');
        setIntroComplete(true);
    }, [setTitle, setLightTitle, setIntroComplete])


    return (
        <main className='w-full'>
            <Tabs defaultValue={selectedCategory} onValueChange={(value) => {
                setSelectedCategory(value);
                const url = new URL(window.location);
                url.searchParams.set('category', value);
                window.history.pushState({}, '', url);
            }} className="w-full">
                <TabsList variant="line" className="w-full flex justify-between py-11.5 gap-2.5 px-0">
                    {categories.map((category) => (
                        <TabsTrigger value={category.key} key={category.value} className="font-bold text-2xl max-w-fit uppercase px-0">{category.value}</TabsTrigger>
                    ))}
                </TabsList>
                <TabsContent value="art" className="w-full">
                    <MotionScrollInViewOpacity className="pt-12.5 pb-30 flex flex-col items-start gap-12.5 max-w-6xl mx-auto">
                        <h2 className='uppercase text-2xl font-bold'>ART</h2>
                        <section className='grid grid-cols-2 place-content-stretch justify-items-stretch gap-13'>
                            <Link href="/works/the-modular-home" className='flex flex-col items-start gap-5'>
                                <div className='relative h-137.5 w-137.5 overflow-hidden cursor-pointer group'>
                                    <Image src="/images/projects/the-modular-home.jpg" alt="the-modular-home" fill className='object-cover object-center h-full w-full group-hover:scale-105 transition-all duration-500' />
                                    <Image src="/images/projects/the-modular-home-absolute.jpg" alt="the-modular-home-absolute" width={150} height={70} className='absolute left-6 top-6 z-20 object-cover object-center w-33.25 h-17' />
                                </div>
                                <h3 className='text-[32px] font-bold font-helvetica-neue'>
                                    The Modular Home <span className='font-light'>2026</span>
                                </h3>
                            </Link>
                            <Link href="/works/riva-937" className='flex flex-col items-start gap-5'>
                                <div className='relative h-137.5 w-137.5 overflow-hidden cursor-pointer group'>
                                    <Image src="/images/projects/riva-937.png" alt="riva-937" fill className='object-cover object-center h-full w-full group-hover:scale-105 transition-all duration-500' />
                                </div>
                                <h3 className='text-[32px] font-bold font-helvetica-neue'>
                                    Riva 937 <span className='font-light'>2024</span>
                                </h3>
                            </Link>
                        </section>
                    </MotionScrollInViewOpacity>
                </TabsContent>
                <TabsContent value="design" className="w-full">
                    <MotionScrollInViewOpacity className="pt-12.5 pb-30 flex flex-col items-start gap-12.5 max-w-6xl mx-auto">
                        <h2 className='uppercase text-2xl font-bold'>DESIGN</h2>
                        <section className='grid grid-cols-2 place-content-stretch justify-items-stretch gap-13'>
                            <Link href="/works/desilight" className='flex flex-col items-start gap-5'>
                                <div className='relative h-137.5 w-137.5 overflow-hidden cursor-pointer group'>
                                    <Image src="/images/projects/desilight-2025.png" alt="desiglight-2025" fill className='object-cover object-center h-full w-full group-hover:scale-105 transition-all duration-500' />
                                </div>
                                <h3 className='text-[32px] font-bold font-helvetica-neue'>
                                    DesiLight <span className='font-light'>2025</span>
                                </h3>
                            </Link>
                            <article className='flex flex-col items-start gap-5'>
                                <div className='relative h-137.5 w-137.5 overflow-hidden cursor-pointer group'>
                                    <Image src="/images/projects/viberon-2025.png" alt="viberon-2025" fill className='object-cover object-right h-full w-full group-hover:scale-105 transition-all duration-500' />
                                </div>
                                <h3 className='text-[32px] font-bold font-helvetica-neue'>
                                    Viberon <span className='font-light'>2025</span>
                                </h3>
                            </article>
                            <article className='flex flex-col items-start gap-5'>
                                <div className='relative h-137.5 w-137.5 overflow-hidden cursor-pointer group'>
                                    <Image src="/images/projects/viberon-2025.png" alt="viberon-2025" fill className='object-cover object-right h-full w-full group-hover:scale-105 transition-all duration-500' />
                                </div>
                                <h3 className='text-[32px] font-bold font-helvetica-neue'>
                                    DesiLight <span className='font-light'>2025</span>
                                </h3>
                            </article>
                            <article className='flex flex-col items-start gap-5'>
                                <div className='relative h-137.5 w-137.5 overflow-hidden cursor-pointer group'>
                                    <Image src="/images/projects/colosseum-name.png" alt="colosseum-name" fill className='object-cover object-center h-full w-full group-hover:scale-105 transition-all duration-500 rotate-90' />
                                </div>
                                <h3 className='text-[32px] font-bold font-helvetica-neue'>
                                    DesiLight <span className='font-light'>2025</span>
                                </h3>
                            </article>
                        </section>
                    </MotionScrollInViewOpacity>
                </TabsContent>
                <TabsContent value="architecture" className="w-full">
                    <MotionScrollInViewOpacity className="pt-12.5 pb-30 flex flex-col items-start gap-12.5 max-w-6xl mx-auto">
                        <h2 className='uppercase text-2xl font-bold'>ARCHITECTURE</h2>
                        <section className='grid grid-cols-2 place-content-stretch justify-items-stretch gap-13'>
                            <article className='flex flex-col items-start gap-5'>
                                <div className='relative h-137.5 w-137.5 overflow-hidden cursor-pointer group'>
                                    <Image src="/images/projects/desilight-2025.png" alt="desiglight-2025" fill className='object-cover object-center h-full w-full group-hover:scale-105 transition-all duration-500' />
                                </div>
                                <h3 className='text-[32px] font-bold font-helvetica-neue'>
                                    DesiLight <span className='font-light'>2025</span>
                                </h3>
                            </article>
                        </section>
                    </MotionScrollInViewOpacity>
                </TabsContent>
                <TabsContent value="graphic" className="w-full">
                    <MotionScrollInViewOpacity className="pt-12.5 pb-30 flex flex-col items-start gap-12.5 max-w-6xl mx-auto">
                        <h2 className='uppercase text-2xl font-bold'>GRAPHIC</h2>
                        <section className='grid grid-cols-2 place-content-stretch justify-items-stretch gap-13'>
                            <article className='flex flex-col items-start gap-5'>
                                <div className='relative h-137.5 w-137.5 overflow-hidden cursor-pointer group'>
                                    <Image src="/images/projects/viberon-2025.png" alt="viberon-2025" fill className='object-cover object-right h-full w-full group-hover:scale-105 transition-all duration-500' />
                                </div>
                                <h3 className='text-[32px] font-bold font-helvetica-neue'>
                                    Viberon <span className='font-light'>2025</span>
                                </h3>
                            </article>
                        </section>
                    </MotionScrollInViewOpacity>
                </TabsContent>
            </Tabs>
        </main>
    )
}
