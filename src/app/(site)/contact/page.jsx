import ContactMain from '@/components/contact'
import React from 'react'
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
    title: 'Contact',
    description:
        'Get in touch with Studio Bicer for collaborations, project inquiries, and design-related conversations.',
    path: '/contact',
    keywords: ['contact Studio Bicer', 'design inquiry', 'Doruk Bicer contact'],
});

export default function ContactPage() {
    return (
        <ContactMain />
    )
}
