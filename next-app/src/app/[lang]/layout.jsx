import 'src/app/globals.css';
import MainLayout from '@/utils/MainLayout';
import { getDictionary } from 'src/dictionaries';
export const metadata = {
  title: 'Bass Impulse',
  description: 'Providing bass since 2023',
  keywords: ['bass', 'impulse', 'rave', 'music', 'dj', 'live', 'edm', 'event'],
  authors: [{ name: 'ViFi' }, { name: 'Matej' }],
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

export default async function RootLayout({ children, params }) {
  const dict = await getDictionary(params.lang);
  return (
    <html lang={params.lang}>
      <body>
        <MainLayout dict={dict}>{children}</MainLayout>
      </body>
    </html>
  );
}
