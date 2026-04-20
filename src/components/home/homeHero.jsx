import React from 'react';
import Navbar from './navbar';
import Link from 'next/link';

export default function HomeHero() {
  return (
    <section className="w-full">
      <main className="w-full flex flex-col">
        <Link href="/works/the-modular-home" className="relative block w-full overflow-hidden">
          <video className="w-full h-full lg:max-h-[800px]" autoPlay loop muted playsInline>
            <source src="/videos/home-hero-video-2.mp4" type="video/mp4" />
          </video>
        </Link>
      </main>
      <Navbar />
    </section>
  );
}
