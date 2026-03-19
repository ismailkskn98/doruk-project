'use client';
import React, { useState, useRef, useEffect } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Search } from 'lucide-react';
import { useDebouncedCallback } from 'use-debounce';
import { searchData } from '@/lib/searchData';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { useSidebarStore } from '@/store/sidebarStore';

export default function SearchMain({ children }) {
    const setSidebarOpen = useSidebarStore((state) => state.setSidebarOpen);
    const [openSearchModal, setOpenSearchModal] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [results, setResults] = useState([]);    // ← sonuçlar
    const inputRef = useRef(null);

    useEffect(() => {
        if (openSearchModal && inputRef.current) {
            inputRef.current.focus();
        }
        // modal kapanınca sıfırla
        if (!openSearchModal) {
            setSearchValue("");
            setResults([]);
        }
    }, [openSearchModal]);

    const debounced = useDebouncedCallback((value) => {
        if (!value.trim()) {
            setResults([]);
            return;
        }

        const lower = value.toLowerCase();

        const filtered = searchData.filter((item) =>
            item.title.toLowerCase().includes(lower) ||
            item.category.toLowerCase().includes(lower) ||
            item.keywords.some((k) => k.includes(lower))
        );

        setResults(filtered);
    }, 300);

    return (
        <Dialog open={openSearchModal} onOpenChange={setOpenSearchModal}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="h-fit p-0 sm:max-w-2xl top-1/3 rounded-xl" showCloseButton={false}>
                <DialogHeader className={"hidden"}>
                    <DialogTitle></DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <main className="grid rounded-xl border border-gray-200">
                    {/* Input */}
                    <section className="w-full flex items-center py-2 rounded-t-xl px-3">
                        <Search className='stroke-1 w-5 h-5 cursor-pointer' />
                        <input
                            ref={inputRef}
                            onChange={(e) => {
                                setSearchValue(e.target.value);
                                debounced(e.target.value);
                            }}
                            value={searchValue}
                            type="text"
                            placeholder='Search'
                            className='w-full outline-none border-none pl-2 text-sm py-2.5'
                        />
                        <span
                            onClick={() => setOpenSearchModal(false)}
                            className='uppercase text-[10px] rounded-lg px-2.5 py-2 border border-gray-200 shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-150 cursor-pointer'
                        >
                            ESC
                        </span>
                    </section>

                    {/* Sonuçlar */}
                    <section className='w-full px-4 py-6 border-t border-gray-200 flex flex-col items-start gap-3'>
                        {results.length === 0 && searchValue.trim() !== "" && (
                            <p className="text-sm text-gray-400">No results found.</p>
                        )}
                        {results.length === 0 && searchValue.trim() === "" && (
                            <p className="text-sm text-gray-400">Start typing to search…</p>
                        )}
                        {results.map((item) => (
                            <Link
                                key={item.id}
                                href={item.href}
                                onClick={() => {
                                    setOpenSearchModal(false);
                                    setSidebarOpen(false);
                                }}
                                className='w-full flex items-center gap-3 hover:bg-gray-50 px-2 py-2 rounded-lg transition-all duration-150'
                            >
                                <div className='relative w-12 h-12 rounded-md overflow-hidden bg-gray-100 shrink-0'>
                                    {item.image ? (
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className='object-cover object-center'
                                        />
                                    ) : (
                                        <div className='w-full h-full flex items-center justify-center'>
                                            <Search className='w-4 h-4 stroke-1 text-gray-300' />
                                        </div>
                                    )}
                                </div>
                                <span className='text-sm font-medium flex-1'>{item.title}</span>
                                <span className='text-xs text-gray-400 uppercase'>{item.category}</span>
                            </Link>
                        ))}
                    </section>
                </main>
            </DialogContent>
        </Dialog>
    )
}