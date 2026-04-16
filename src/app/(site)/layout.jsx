import Header from '@/components/header';
import Footer from '@/components/footer';
import SideBar from '@/components/sidebar';
import { ScrollToTop } from '@/components/scrollToTop';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  description:
    'Explore Studio Bicer, the portfolio site of Doruk Bicer featuring selected projects, studio information, and contact details.',
  path: '/',
});

export default function SiteLayout({ children }) {
  return (
    <>
      <ScrollToTop />
      <main className="w-full min-h-screen gridContainer overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </main>
      <SideBar />
    </>
  );
}
