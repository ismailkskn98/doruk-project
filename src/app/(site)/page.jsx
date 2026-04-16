import HomeMain from "@/components/home";
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  description:
    'Studio Bicer showcases the work of Doruk Bicer across collectible design, furniture, architecture, and visual explorations.',
  path: '/',
  keywords: ['portfolio', 'collectible design', 'Doruk Bicer portfolio'],
});

export default function HomePage() {
  return <HomeMain />
}
