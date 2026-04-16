'use client';

import { motion } from 'motion/react';
import Logo from '../Logo';
import { useIntroStore } from '@/store/introStore';
import SidebarOpenButton from '../common/sidebarOpenButton';
import { useHeaderStore } from '@/store/headerStore';
import Link from 'next/link';

export default function Header() {
  const introComplete = useIntroStore((state) => state.introComplete);
  const title = useHeaderStore((state) => state.title);
  const lightTitle = useHeaderStore((state) => state.lightTitle);

  return (
    <div className="flex flex-col">
      <header className="relative z-40 flex items-center justify-between py-10 lg:py-0 lg:min-h-30 max-h-16 lg:max-h-30 overflow-hidden">
        <Link href="/" id="logo-container">
          <motion.div
            className="flex flex-row gap-1.5 leading-[0.9] font-bold text-[24px] sm:text-[20px] lg:text-[36px] -mb-1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: introComplete ? 1 : 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <Logo />
          </motion.div>
        </Link>
        <article className="flex items-center gap-2.5">
          <p className="hidden sm:block text-xl md:text-2xl font-bold uppercase -mb-1">
            <span className="font-light">{lightTitle && `${lightTitle} `}</span>
            {title && `${title}`}
          </p>
          <SidebarOpenButton />
        </article>
      </header>
      {/* <p className="block md:hidden text-base sm:text-lg lg:text-2xl font-bold uppercase -mb-1">
        <span className="font-light">{lightTitle && `${lightTitle} `}</span>
        {title && `${title}`}
      </p> */}
    </div>
  );
}
