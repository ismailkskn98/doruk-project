
import React from 'react'
import Header from '../header';
import Navbar from './navbar';

export default function HomeHero() {
    return (
        <section className='w-full'>
            <Header />
            <main className='w-full flex items-center justify-center py-12.5 max-h-262 overflow-hidden'>
                <video className='w-full h-full max-h-262.5 overflow-hidden' autoPlay loop muted>
                    <source src="/videos/output-video.mp4" type="video/mp4" />
                </video>
            </main>
            <Navbar />
        </section>
    )
}
