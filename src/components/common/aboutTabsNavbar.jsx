'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const aboutTabs = [
  { href: '/doruk-bicer', label: 'Doruk Bicer' },
  { href: '/studio', label: 'Studio' },
];

export default function AboutTabsNavbar() {
  const pathname = usePathname();
  const activeTab = aboutTabs.some((tab) => tab.href === pathname) ? pathname : '/doruk-bicer';

  return (
    <Tabs value={activeTab} className="w-full">
      <TabsList variant="line" className="w-full flex justify-center pb-[clamp(14px,4vw,46px)] gap-2.5 px-0">
        {aboutTabs.map((tab) => (
          <TabsTrigger key={tab.href} value={tab.href} asChild className="relative font-bold text-[clamp(16px,3vw,24px)] max-w-fit uppercase leading-5 px-0">
            <Link href={tab.href} className="absolute z-10 inset-0">
              {tab.label}
            </Link>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
