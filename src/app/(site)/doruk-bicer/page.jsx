import DorukBicerMain from '@/components/dorukBicer'
import React from 'react'
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
    title: 'Doruk Bicer',
    description:
        'Read the profile of Doruk Bicer and discover the background, approach, and design perspective behind Studio Bicer.',
    path: '/doruk-bicer',
    keywords: ['Doruk Bicer', 'designer profile', 'Studio Bicer founder'],
});

export default function DorukBicerPage() {
    return (
        <DorukBicerMain />
    )
}
