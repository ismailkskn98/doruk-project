import React from "react";

export default function Footer() {
  return (
    <footer className="w-full fluid">
      <main className="w-full fluid gridContainer bg-custom-gray py-9 md:py-12.5 min-h-60 md:min-h-75">
        <section className="w-full h-full flex flex-col md:flex-row items-start justify-between gap-8 md:gap-5">
          <article className="w-fit h-full flex flex-col items-start md:justify-between gap-4 md:gap-0 text-sm sm:text-base">
            <h2 className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold font-forma-djr-display uppercase text-nowrap">
              <span className="font-light">Studıo</span> Doruk Bıcer
            </h2>
            <div className="flex flex-col items-start gap-2 md:gap-2.5 font-helvetica-neue font-light leading-4">
              <a href="mailto:info@dorukbicer.com">info@dorukbicer.com</a>
              <p className="">
                Via Giovanni Pastorelli 4 <br />
                Milan / Italy
              </p>
            </div>
          </article>
          <article className="w-fit md:h-full flex md:items-end">
            <div className="flex items-center gap-5 font-light font-helvetica-neue text-sm sm:text-base">
              <a href="https://www.instagram.com/dorukbicer/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all duration-200">
                Instagram
              </a>
              <a href="https://www.behance.net/dorukbicer" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all duration-200">
                beHance
              </a>
              <a href="https://www.linkedin.com/in/dorukbicer/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all duration-200">
                LinkedIn
              </a>
            </div>
          </article>
        </section>
      </main>
      <div className="gridContainer">
        <main className="w-full py-3 sm:py-2.5 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1.5 sm:gap-0 min-h-10 font-light font-helvetica-neue text-xs md:text-sm lg:text-base text-nowrap">
          <p>
            © Studio <span className="font-bold font-forma-djr-display">Doruk Bicer</span> 2026 - All Rights Reserved
          </p>
          <div className="flex items-center">
            <span className="px-2.5 hidden sm:inline"> | </span>
            <p>Privacy Policy</p>
            <span className="px-2.5"> | </span>
            <p>Legal Notes</p>
          </div>
        </main>
      </div>
    </footer>
  );
}
