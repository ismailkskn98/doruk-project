import React from 'react'

export default function Footer() {
    return (
        <footer className='w-full fluid gridContainer'>
            <main className='w-full fluid gridContainer bg-custom-gray p-12.5 min-h-75'>
                <section className='w-full h-full flex items-start justify-between gap-5'>
                    <article className='w-fit h-full flex flex-col items-start justify-between'>
                        <h2 className='text-[32px] font-bold font-forma-djr-display uppercase'><span className='font-light'>Studıo</span> Doruk Bıcer</h2>
                        <div className='flex flex-col items-start gap-2.5 font-helvetica-neue font-light leading-4'>
                            <a href="mailto:info@dorukbicer.com">info@dorukbicer.com</a>
                            <p className=''>Via Giovanni Pastorelli 4 <br />Milan / Italy</p>
                        </div>
                    </article>
                    <article className='w-fit h-full flex items-end'>
                        <div className='flex items-center gap-5 font-light font-helvetica-neue'>
                            <a href="https://www.instagram.com/dorukbicer/" target="_blank" rel="noopener noreferrer" className='hover:underline transition-all duration-200'>
                                Instagram
                            </a>
                            <a href="https://www.behance.net/dorukbicer" target="_blank" rel="noopener noreferrer" className='hover:underline transition-all duration-200'>
                                beHance
                            </a>
                            <a href="https://www.linkedin.com/in/dorukbicer/" target="_blank" rel="noopener noreferrer" className='hover:underline transition-all duration-200'>
                                LinkedIn
                            </a>
                        </div>
                    </article>
                </section>
            </main>
            <main className='w-full py-2.5 flex items-center justify-center min-h-10 font-light font-helvetica-neue'>
                <p>
                    © Studio <span className='font-bold font-forma-djr-display'>Doruk Bicer</span> 2026 - All Rights Reserved
                </p>
                <span className='px-2.5'> | </span>
                <p>Privacy Policy</p>
                <span className='px-2.5'> | </span>
                <p>Legal Notes</p>
            </main>
        </footer>
    )
}
