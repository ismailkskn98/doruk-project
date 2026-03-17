'use client';
import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'motion/react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Search } from 'lucide-react';
import { useDebouncedCallback } from 'use-debounce';

export default function SearchMain({ children }) {
    const [openSearchModal, setOpenSearchModal] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        if (openSearchModal && inputRef.current) {
            inputRef.current.focus();
        }
    }, [openSearchModal]);

    const debounced = useDebouncedCallback((value) => {
        setValue(value);
    }, 1000);


    return (
        <Dialog open={openSearchModal} onOpenChange={(value) => setOpenSearchModal(value)}>
            <DialogTrigger asChild>
                {/* <Search className='stroke-1 w-5 h-5 cursor-pointer' /> */}
                {children}
            </DialogTrigger>
            <DialogContent className="h-fit p-0 sm:max-w-2xl top-1/3 rounded-xl" showCloseButton={false}>
                <DialogHeader className={"hidden"}>
                    <DialogTitle></DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <main className="grid rounded-xl border border-gray-200">
                    <section className="w-full flex items-center py-2 rounded-t-xl px-3">
                        <Search className='stroke-1 w-5 h-5 cursor-pointer' />
                        <input ref={inputRef} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder='Search' className='w-full outline-none border-none pl-2 text-sm py-2.5' />
                        <span onClick={() => setOpenSearchModal(false)} className='uppercase text-[10px] rounded-lg px-2.5 py-2 border border-gray-200 shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-150 cursor-pointer'>ESC</span>
                    </section>
                    <section className='w-full px-4 py-6 border-t border-gray-200 flex flex-col items-start gap-3'>
                        <article className='w-full flex items-center gap-1'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ad!
                        </article>
                        <article className='w-full flex items-center gap-1'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ad!
                        </article>
                        <article className='w-full flex items-center gap-1'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ad!
                        </article>
                        <article className='w-full flex items-center gap-1'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ad!
                        </article>
                    </section>
                </main>
            </DialogContent>
        </Dialog>
    )
}
