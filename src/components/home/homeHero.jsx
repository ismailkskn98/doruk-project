import React from 'react';
import Navbar from './navbar';

export default function HomeHero() {
  return (
    <section className="w-full">
      <main className="w-full flex flex-col py-8 sm:py-12.5">
        <div className="relative w-full overflow-hidden">
          <video className="w-full h-full" autoPlay loop muted playsInline>
            <source src="/videos/home-hero-video-2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="w-full h-[92px]" />
      </main>
      <Navbar />
    </section>
  );
}
