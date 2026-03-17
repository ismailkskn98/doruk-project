
import React from 'react'
import Navbar from './navbar';

export default function HomeHero() {
    return (
        <section className='w-full'>
            <main className='w-full flex items-center justify-center py-12.5 max-h-262 overflow-hidden'>
                <video className='w-full h-[clamp(300px,60vh,1050px)] overflow-hidden' autoPlay loop muted>
                    <source src="/videos/home-hero-video.mp4" type="video/mp4" />
                </video>
            </main>
            <Navbar />
        </section>
    )
}
