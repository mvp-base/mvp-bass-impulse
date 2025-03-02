import 'src/app/globals.css';
import MainLayout from '@/utils/MainLayout';

export const metadata = {
  title: 'Bass Impulse',
  description: 'Providing bass since 2023',
  keywords: ['bass', 'impulse', 'rave', 'music', 'dj', 'live', 'edm', 'event'],
  authors: [{ name: 'ViFi' }, { name: 'Matej' }],
  creator: 'MatejV',
  publisher: 'MatejV',
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'cs': '/cs',
    },
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
