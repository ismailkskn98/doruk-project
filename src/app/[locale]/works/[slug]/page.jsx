import ModularHomeDetail from '@/components/works/slug/ModularHomeDetail';
import { notFound } from 'next/navigation';
import React from 'react'

const detailPages = {
    "the-modular-home": ModularHomeDetail,
    //   "desilight": DesilightDetail,
    //   "riva-937": RivaDetail,
};


export default async function WorksSlugPage({ params }) {
    const { slug } = await params;
    const DetailComponent = detailPages[slug];

    if (!DetailComponent) return notFound();

    return (
        <DetailComponent />
    )
}
