import React from 'react';
import Link from 'next/link';
import SearchMain from '../common/search';

export default function Navbar() {
  const navItems = [
    { name: 'About', href: '/doruk-bicer' },
    { name: 'Work', href: '/works' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="w-full flex items-center justify-between gap-4 sm:gap-8 lg:gap-10 py-12.5">
      {navItems.map((item) => (
        <Link key={item.name} href={item.href} className="uppercase font-bold text-[clamp(16px,4vw,24px)] leading-none">
          <span className="text-center">{item.name}</span>
        </Link>
      ))}
      <SearchMain>
        <button className="uppercase font-bold text-[clamp(16px,4vw,24px)] cursor-pointer leading-none">Search</button>
      </SearchMain>
    </nav>
  );
}
