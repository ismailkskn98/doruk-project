export const siteConfig = {
  name: 'Studio Bicer',
  siteName: 'Studio Bicer',
  url: 'https://www.dorukbicer.com',
  description:
    'Studio Bicer is the design practice of Doruk Bicer, presenting selected works across art, design, architecture, and graphic disciplines.',
  locale: 'en_US',
  ogImage: '/images/vcard-logo-update.png',
  favicon: '/favicon.ico',
  icon48: '/icon-48.png',
  appleIcon: '/apple-touch-icon.png',
  keywords: ['Studio Bicer', 'Doruk Bicer', 'design studio', 'furniture design', 'art', 'architecture', 'graphic design'],
};

export function buildPageMetadata({ title, description, path = '/', keywords = [], type = 'website' }) {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const pageDescription = description || siteConfig.description;

  return {
    title,
    description: pageDescription,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: path,
      siteName: siteConfig.siteName,
      locale: siteConfig.locale,
      type,
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
      title: pageTitle,
      description: pageDescription,
      images: [siteConfig.ogImage],
    },
  };
}
