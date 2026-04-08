import React from "react";
import Navbar from "./navbar";

export default function HomeHero() {
  return (
    <section className="w-full">
      <main className="w-full flex justify-center py-8 sm:py-12.5">
        <div className="relative w-full aspect-1500/1050 overflow-hidden">
          <video className="w-full h-full" autoPlay loop muted playsInline>
            <source src="/videos/home-hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      </main>
      <Navbar />
    </section>
  );
}
