import DesilightDetail from '@/components/works/slug/desilightDetail';
import ModularHomeDetail from '@/components/works/slug/modularHomeDetail';
import RivaDetail from '@/components/works/slug/rivaDetail';
import ViberonDetail from '@/components/works/slug/viberonDetail';
import { notFound } from 'next/navigation';
import React from 'react'

const detailPages = {
    "the-modular-home": ModularHomeDetail,
    "riva-937": RivaDetail,
    "desilight": DesilightDetail,
    "viberon": ViberonDetail
};


export default async function WorksSlugPage({ params }) {
    const { slug } = await params;
    const DetailComponent = detailPages[slug];

    if (!DetailComponent) return notFound();

    return (
        <DetailComponent />
    )
}
