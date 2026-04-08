"use client";
import React, { useState, useRef, useEffect, useMemo } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { useDebouncedCallback } from "use-debounce";
import { searchData } from "@/lib/searchData";
import Link from "next/link";
import Image from "next/image";
import { useSidebarStore } from "@/store/sidebarStore";

const projects = searchData.filter((item) => item.type === "project");
const pages = searchData.filter((item) => item.type === "page");

function ResultItem({ item, onClose }) {
  return (
    <Link href={item.href} onClick={onClose} className="w-full flex items-center gap-3 hover:bg-gray-50 px-2 py-2 rounded-lg transition-all duration-150">
      <div className="relative w-10 h-10 rounded-md overflow-hidden bg-gray-100 shrink-0">
        {item.image ? (
          <Image src={item.image} alt={item.title} fill className="object-cover object-center" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Search className="w-4 h-4 stroke-1 text-gray-300" />
          </div>
        )}
      </div>
      <span className="text-sm font-medium flex-1">{item.title}</span>
      <span className="text-xs text-gray-400 uppercase">{item.category}</span>
    </Link>
  );
}

export default function SearchMain({ children }) {
  const setSidebarOpen = useSidebarStore((state) => state.setSidebarOpen);
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (openSearchModal) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setSearchValue("");
      setResults(null);
    }
  }, [openSearchModal]);

  const debounced = useDebouncedCallback((value) => {
    if (!value.trim()) {
      setResults(null);
      return;
    }
    const lower = value.toLowerCase();
    setResults(searchData.filter((item) => item.title.toLowerCase().includes(lower) || item.category.toLowerCase().includes(lower) || item.keywords.some((k) => k.includes(lower))));
  }, 250);

  const handleClose = () => {
    setOpenSearchModal(false);
    setSidebarOpen(false);
  };

  return (
    <Dialog open={openSearchModal} onOpenChange={setOpenSearchModal}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="p-0 sm:max-w-2xl top-20 translate-y-0! rounded-xl overflow-hidden flex flex-col max-h-[70vh]" showCloseButton={false}>
        <DialogHeader className="hidden">
          <DialogTitle />
          <DialogDescription />
        </DialogHeader>

        <div className="flex items-center py-2 px-3 shrink-0">
          <Search className="stroke-1 w-5 h-5 shrink-0" />
          <input
            ref={inputRef}
            onChange={(e) => {
              setSearchValue(e.target.value);
              debounced(e.target.value);
            }}
            value={searchValue}
            type="text"
            placeholder="Search"
            className="w-full outline-none border-none pl-2 text-sm py-2.5"
          />
          <span
            onClick={handleClose}
            className="uppercase text-[10px] rounded-lg px-2.5 py-2 border border-gray-200 shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-150 cursor-pointer shrink-0"
          >
            ESC
          </span>
        </div>

        {/* Sonuçlar — scroll */}
        <div className="border-t border-gray-200 overflow-y-auto">
          <div className="px-4 py-4 flex flex-col gap-1">
            {/* Arama sonuçları */}
            {results !== null && results.length === 0 && <p className="text-sm text-gray-400 py-2">No results found.</p>}
            {results !== null && results.length > 0 && results.map((item) => <ResultItem key={item.id} item={item} onClose={handleClose} />)}

            {/* Boşken: Works + Pages */}
            {results === null && (
              <>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 pb-1">Works</p>
                {projects.map((item) => (
                  <ResultItem key={item.id} item={item} onClose={handleClose} />
                ))}
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 pt-4 pb-1">Pages</p>
                {pages.map((item) => (
                  <ResultItem key={item.id} item={item} onClose={handleClose} />
                ))}
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
