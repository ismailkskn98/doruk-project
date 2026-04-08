import React from "react";
import Link from "next/link";
import SearchMain from "../common/search";

export default function Navbar() {
  const navItems = [
    { name: "About", href: "/doruk-bicer" },
    { name: "Work", href: "/works" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="h-112.5 w-full max-w-6xl mx-auto flex items-start justify-between gap-10 pt-12.5">
      {navItems.map((item) => (
        <Link key={item.name} href={item.href} className="uppercase font-bold text-2xl">
          {item.name}
        </Link>
      ))}
      <SearchMain>
        <button className="uppercase font-bold text-2xl cursor-pointer">Search</button>
      </SearchMain>
    </nav>
  );
}
