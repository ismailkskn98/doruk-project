'use client';

import { motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const DEFAULT_MODULE_ID = 'bathroom';
const PLAN_RATIO = '2086 / 2085';
const PLAN_VIEWBOX = '0 0 2086 2085';
const CONTENT_FADE = 0.4;
const FADE_EASE = [0.4, 0, 0.2, 1];

const MODULES = [
  {
    id: 'custom-2',
    title: 'Custom 2',
    description: 'This configurable module expands the home with a flexible setup that can adapt to different daily routines without interrupting the open central volume.',
    planImage: '/images/the-modular-home-animate/custom-2.jpg',
    detailImage: '/images/the-modular-home-animate/custom-2.jpg',
    media: {
      type: 'gif',
      src: '/images/the-modular-home-animate/custom-2.gif',
      alt: 'Custom 2 module animation',
    },
    hotspotPath: 'M 60 60 H 620 V 335 H 335 V 620 H 60 Z',
  },
  {
    id: 'custom-1',
    title: 'Custom 1',
    description: 'Custom 1 acts as a reprogrammable perimeter zone that can support changing functions while keeping the core living area visually calm and unobstructed.',
    planImage: '/images/the-modular-home-animate/custom-1.jpg',
    detailImage: '/images/the-modular-home-animate/custom-1.jpg',
    media: {
      type: 'gif',
      src: '/images/the-modular-home-animate/custom-1.gif',
      alt: 'Custom 1 module animation',
    },
    hotspotPath: 'M 620 60 H 1470 V 335 H 620 Z',
  },
  {
    id: 'custom-3',
    title: 'Custom 3',
    description: 'Custom 3 introduces another adaptable edge condition, allowing the home to shift between practical support space and a more open, lightweight boundary.',
    planImage: '/images/the-modular-home-animate/custom-3.jpg',
    detailImage: '/images/the-modular-home-animate/custom-3.jpg',
    media: {
      type: 'gif',
      src: '/images/the-modular-home-animate/custom-3.gif',
      alt: 'Custom 3 module animation',
    },
    hotspotPath: 'M 1460 60 H 1400 V 60 H 2030 V 610 H 1750 V 340 H 1460 Z',
  },
  {
    id: 'bedroom',
    title: 'Bedroom',
    description: 'The bedroom module transforms the perimeter into a compact resting zone, giving privacy and comfort while using as little dedicated footprint as possible.',
    planImage: '/images/the-modular-home-animate/bedroom.jpg',
    detailImage: '/images/the-modular-home-animate/bedroom.jpg',
    media: {
      type: 'gif',
      src: '/images/the-modular-home-animate/bedroom.gif',
      alt: 'Bedroom module animation',
    },
    hotspotPath: 'M 60 620 H 340 V 1470 H 60 Z',
  },
  {
    id: 'living-office',
    title: 'Living & Office',
    description: 'This module supports both focused work and everyday living, switching the edge of the apartment into a productive yet comfortable hybrid environment.',
    planImage: '/images/the-modular-home-animate/living-office.png',
    detailImage: '/images/the-modular-home-animate/living-office.png',
    media: {
      type: 'gif',
      src: '/images/the-modular-home-animate/living-office.gif',
      alt: 'Living and office module animation',
    },
    hotspotPath: 'M 1750 610 H 2030 V 1460 H 1750 Z',
  },
  {
    id: 'kitchen',
    title: 'Kitchen',
    description:
      'The kitchen module functions in two modes: fully open as a traditional kitchen, or closed for basic use. It supports users by ordering food based on health data, with deliveries stored in a temperature-controlled cabinet.',
    planImage: '/images/the-modular-home-animate/kitchen.jpg',
    detailImage: '/images/the-modular-home-animate/kitchen.jpg',
    media: {
      type: 'gif',
      src: '/images/the-modular-home-animate/kitchen.gif',
      alt: 'Kitchen module animation',
    },
    hotspotPath: 'M 60 1460 H 340 V 1750 H 900 V 2030 H 60 Z',
  },
  {
    id: 'bathroom',
    title: 'Bathroom',
    description: 'The bathroom module concentrates service functions into a compact zone, helping the home stay organized while still keeping the surrounding area flexible.',
    planImage: '/images/the-modular-home-animate/bathroom.jpg',
    detailImage: '/images/the-modular-home-animate/bathroom.jpg',
    media: {
      type: 'gif',
      src: '/images/the-modular-home-animate/bathroom.gif',
      alt: 'Bathroom module animation',
    },
    hotspotPath: 'M 1340 1750 L 1470 1750 L 1770 1460 L 2030 1460 L 2030 2030 L 1340 2030 Z',
  },
];

function useCrossfadeUnderlay(activeId, reduceMotion) {
  const [underlayId, setUnderlayId] = useState(null);
  const prevActiveRef = useRef(activeId);

  useEffect(() => {
    if (reduceMotion) {
      prevActiveRef.current = activeId;
      setUnderlayId(null);
      return;
    }

    if (prevActiveRef.current !== activeId) {
      setUnderlayId(prevActiveRef.current);
      prevActiveRef.current = activeId;
    }
  }, [activeId, reduceMotion]);

  return { underlayId, finishTransition: () => setUnderlayId(null) };
}

function CrossfadeStack({ activeId, reduceMotion, duration, className, mode = 'overlay', renderLayer }) {
  const { underlayId, finishTransition } = useCrossfadeUnderlay(activeId, reduceMotion);
  const isTransitioning = Boolean(underlayId) && !reduceMotion;

  return MODULES.map((module) => {
    const isActive = module.id === activeId;
    const isUnderlay = module.id === underlayId;
    const targetOpacity = mode === 'overlay' ? (isActive || isUnderlay ? 1 : 0) : isActive ? 1 : 0;
    const shouldAnimate = isTransitioning && (mode === 'overlay' ? isActive : isActive || isUnderlay);

    return (
      <motion.div
        key={module.id}
        className={`absolute inset-0 ${className ?? ''}`}
        style={{
          zIndex: isActive ? 2 : isUnderlay ? 1 : 0,
          pointerEvents: 'none',
        }}
        initial={false}
        animate={{ opacity: targetOpacity }}
        transition={shouldAnimate ? { duration, ease: FADE_EASE } : { duration: 0 }}
        onAnimationComplete={() => {
          if (isActive && underlayId) finishTransition();
        }}
        aria-hidden={!isActive}
      >
        {renderLayer(module)}
      </motion.div>
    );
  });
}

function Hotspot({ module, isActive, isHovered, isFocused, onSelect, onHoverStart, onHoverEnd, onFocus, onBlur }) {
  const overlayOpacity = isFocused ? 0.1 : isHovered ? 0.1 : isActive ? 0.02 : 0;

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect(module.id);
    }
  };

  return (
    <>
      <path d={module.hotspotPath} pointerEvents="none" fill={`rgba(0, 0, 0, ${overlayOpacity})`} className={isActive ? undefined : 'transition-all duration-200 ease-out'} />

      <path
        d={module.hotspotPath}
        role="button"
        tabIndex={0}
        aria-label={`${module.title} module`}
        aria-pressed={isActive}
        onClick={() => onSelect(module.id)}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => onHoverStart(module.id)}
        onMouseLeave={onHoverEnd}
        onFocus={() => onFocus(module.id)}
        onBlur={onBlur}
        fill="transparent"
        stroke="transparent"
        strokeWidth={1}
        className="cursor-pointer outline-none"
      >
        <title>{module.title}</title>
      </path>
    </>
  );
}

function ModuleMediaLayer({ module, reduceMotion }) {
  const src = reduceMotion || module.media.type !== 'gif' ? module.detailImage : module.media.src;
  const alt = reduceMotion || module.media.type !== 'gif' ? `${module.title} module detail` : module.media.alt;
  const unoptimized = module.media.type === 'gif';

  return (
    <div className="relative size-full">
      <Image src={src} alt={alt} fill unoptimized={unoptimized} className="object-contain" sizes="(min-width: 1024px) 40vw, 100vw" />
    </div>
  );
}

export default function ModuleExplorer() {
  const reduceMotion = useReducedMotion();
  const [selectedId, setSelectedId] = useState(DEFAULT_MODULE_ID);
  const [hoveredId, setHoveredId] = useState(null);
  const [focusedId, setFocusedId] = useState(null);

  return (
    <section className="w-full grid lg:grid-cols-2 place-content-stretch justify-items-stretch gap-12.5">
      <article className="relative overflow-hidden bg-white" style={{ aspectRatio: PLAN_RATIO }}>
        {MODULES.map((module) => (
          <div
            key={module.id}
            className="absolute inset-0"
            style={{
              opacity: module.id === selectedId ? 1 : 0,
              zIndex: module.id === selectedId ? 1 : 0,
              pointerEvents: 'none',
            }}
            aria-hidden={module.id !== selectedId}
          >
            <div className="relative size-full">
              <Image src={module.planImage} alt={`${module.title} module plan view`} fill priority={module.id === DEFAULT_MODULE_ID} className="object-cover w-full h-full" unoptimized />
            </div>
          </div>
        ))}

        <svg viewBox={PLAN_VIEWBOX} preserveAspectRatio="xMidYMid meet" className="absolute inset-0 z-10 h-full w-full" aria-label="Interactive modular home plan map">
          {MODULES.map((module) => (
            <Hotspot
              key={module.id}
              module={module}
              isActive={selectedId === module.id}
              isHovered={hoveredId === module.id}
              isFocused={focusedId === module.id}
              onSelect={setSelectedId}
              onHoverStart={setHoveredId}
              onHoverEnd={() => setHoveredId(null)}
              onFocus={setFocusedId}
              onBlur={() => setFocusedId(null)}
            />
          ))}
        </svg>
      </article>

      <article className="flex h-full flex-col items-start gap-5 min-[86.25rem]:gap-10" aria-live="polite">
        <div className="relative block aspect-725/472 w-full overflow-hidden bg-white">
          {MODULES.map((module) => (
            <div
              key={module.id}
              className="absolute inset-0"
              style={{
                opacity: module.id === selectedId ? 1 : 0,
                zIndex: module.id === selectedId ? 1 : 0,
                pointerEvents: 'none',
              }}
              aria-hidden={module.id !== selectedId}
            >
              <ModuleMediaLayer module={module} reduceMotion={reduceMotion} />
            </div>
          ))}
        </div>

        <div className="relative w-full min-h-38 sm:min-h-32 xl:min-h-40">
          <CrossfadeStack
            activeId={selectedId}
            reduceMotion={reduceMotion}
            duration={CONTENT_FADE}
            mode="crossfade"
            className="flex flex-col items-start gap-2 xl:gap-5 min-[86.25rem]:gap-10"
            renderLayer={(module) => (
              <>
                <h3 className="text-xl sm:text-2xl lg:text-[32px] font-helvetica-neue font-light">{module.title}</h3>
                <p className="font-minion-pro text-base sm:text-lg xl:text-[20px] sm:leading-5 xl:leading-7">{module.description}</p>
              </>
            )}
          />
        </div>
      </article>
    </section>
  );
}
