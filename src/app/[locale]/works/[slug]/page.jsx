import { notFound } from 'next/navigation';
import React from 'react'

const detailPages = {
    //   desilight: DesilightDetail,
    //   "riva-937": RivaDetail,
    //   "the-modular-home": ModularHomeDetail,
};


export default async function WorksSlugPage({ params }) {
    const { slug } = await params;
    const DetailComponent = detailPages[slug];

    if (!DetailComponent) return notFound();

    return (
        <DetailComponent />
    )
}
