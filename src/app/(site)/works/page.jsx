import WorksMain from "@/components/works";
import React, { Suspense } from "react";
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Works',
  description:
    'Browse selected works by Studio Bicer across art, design, architecture, and graphic projects.',
  path: '/works',
  keywords: ['Studio Bicer works', 'design projects', 'art and architecture portfolio'],
});

export default function WorksPage() {
  return (
    <Suspense fallback={<div></div>}>
      <WorksMain />
    </Suspense>
  );
}
