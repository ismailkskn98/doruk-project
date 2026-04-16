import StudioMain from '@/components/studio'
import React from 'react'
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
    title: 'Studio',
    description:
        'Learn more about Studio Bicer and Doruk Bicer, a multidisciplinary designer working across furniture, exhibition, and collectible design.',
    path: '/studio',
    keywords: ['about Studio Bicer', 'Doruk Bicer biography', 'multidisciplinary designer'],
});

export default function StudioPage() {
    return (
        <StudioMain />
    )
}
