import ModularHomeDetail from '@/components/works/slug/deney';
import RivaDetail from '@/components/works/slug/rivaDetail';
import { notFound } from 'next/navigation';
import React from 'react'

const detailPages = {
    "the-modular-home": ModularHomeDetail,
    "riva-937": RivaDetail,
    //   "desilight": DesilightDetail,
};


export default async function WorksSlugPage({ params }) {
    const { slug } = await params;
    const DetailComponent = detailPages[slug];

    if (!DetailComponent) return notFound();

    return (
        <DetailComponent />
    )
}
