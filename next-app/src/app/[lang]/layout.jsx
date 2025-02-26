import 'src/app/globals.css';
import MainLayout from '@/utils/MainLayout';

export const metadata = {
  title: 'Bass Impulse',
  description: 'Providing bass since 2023',
  keywords: ['bass', 'impulse', 'rave', 'music', 'dj', 'live', 'edm', 'event'],
  authors: [{ name: 'ViFi' }, { name: 'Matej' }],
  creator: 'ViFi',
  publisher: 'ViFi',
  metadataBase: new URL('https://bassimpulse.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'cs': '/cs',
    },
  },
  openGraph: {
    images: '/opengraph-image.png',
  },
};

export async function generateStaticParams() {
  return [{ lang: 'cs' }, { lang: 'en' }];
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
