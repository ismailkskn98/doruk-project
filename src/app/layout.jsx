import './globals.css';
import localFont from 'next/font/local';
import { siteConfig } from '@/lib/seo';

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.name,
  referrer: 'origin-when-cross-origin',
  creator: 'Studio Bicer',
  publisher: 'Studio Bicer',
  category: 'design',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: siteConfig.favicon, sizes: '48x48' },
      { url: siteConfig.icon48, sizes: '48x48', type: 'image/png' },
    ],
    shortcut: siteConfig.favicon,
    apple: siteConfig.appleIcon,
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.siteName,
    locale: siteConfig.locale,
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1080,
        height: 1080,
        alt: `${siteConfig.name} logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

const formaDJRDisplay = localFont({
  src: [
    { path: '../fonts/FormaDJRDisplay-Thin.woff2', weight: '100', style: 'normal' },
    { path: '../fonts/FormaDJRDisplay-ExtraLight.woff2', weight: '200', style: 'normal' },
    { path: '../fonts/FormaDJRDisplay-Light.woff2', weight: '300', style: 'normal' },
    { path: '../fonts/FormaDJRDisplay-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/FormaDJRDisplay-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/FormaDJRDisplay-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../fonts/FormaDJRDisplay-ExtraBold.woff2', weight: '800', style: 'normal' },
    { path: '../fonts/FormaDJRDisplay-Black.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-forma-djr-display',
});

const helveticaNeue = localFont({
  src: [
    { path: '../fonts/HelveticaNeueLight.woff2', weight: '300', style: 'normal' },
    { path: '../fonts/HelveticaNeueBold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-helvetica-neue',
});

const minionPro = localFont({ src: [{ path: '../fonts/MinionPro-Regular.woff2', weight: '400', style: 'normal' }], variable: '--font-minion-pro' });

export default function RootLayout({ children }) {
  return (
    <html lang={'en'}>
      <body className={`${helveticaNeue.variable} ${minionPro.variable} ${formaDJRDisplay.variable} font-forma-djr-display antialiased w-full overflow-x-hidden`}>{children}</body>
    </html>
  );
}
