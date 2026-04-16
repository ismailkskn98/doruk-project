import ColosseumNameDetail from '@/components/works/slug/colosseumNameDetail';
import DesilightDetail from '@/components/works/slug/desilightDetail';
import ExtreamityDetail from '@/components/works/slug/extreamityDetail';
import FuanteiDetail from '@/components/works/slug/FuanteiDetail';
import ModularHomeDetail from '@/components/works/slug/modularHomeDetail';
import RivaDetail from '@/components/works/slug/rivaDetail';
import ViberonDetail from '@/components/works/slug/viberonDetail';
import { buildPageMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';
import React from 'react'

const detailPages = {
    "the-modular-home": ModularHomeDetail,
    "riva-937": RivaDetail,
    "desilight": DesilightDetail,
    "viberon": ViberonDetail,
    "fuantei": FuanteiDetail,
    "colosseum-name": ColosseumNameDetail,
    "extreamity": ExtreamityDetail,
};

const projectMetadata = {
    'the-modular-home': {
        title: 'The Modular Home',
        description: 'Discover The Modular Home, a selected Studio Bicer project presented within the works archive.',
    },
    'riva-937': {
        title: 'Riva 937',
        description: 'Explore Riva 937, one of the featured design works from Studio Bicer.',
    },
    desilight: {
        title: 'DesiLight',
        description: 'View DesiLight, a featured Studio Bicer work spanning design and spatial thinking.',
    },
    viberon: {
        title: 'Viberon',
        description: 'See Viberon, a selected Studio Bicer project from the works collection.',
    },
    fuantei: {
        title: 'Fuantei',
        description: 'Explore Fuantei, a featured Studio Bicer work from the design archive.',
    },
    'colosseum-name': {
        title: 'Colosseum Name',
        description: 'Discover Colosseum Name, a Studio Bicer project from the selected works portfolio.',
    },
    extreamity: {
        title: 'Extreamity',
        description: 'View Extreamity, a Studio Bicer project presented in the selected works archive.',
    },
};

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = projectMetadata[slug];

    if (!project) {
        return {};
    }

    return buildPageMetadata({
        title: project.title,
        description: project.description,
        path: `/works/${slug}`,
        keywords: [project.title, 'Studio Bicer works', 'design project'],
    });
}


export default async function WorksSlugPage({ params }) {
    const { slug } = await params;
    const DetailComponent = detailPages[slug];

    if (!DetailComponent) return notFound();

    return (
        <DetailComponent />
    )
}
