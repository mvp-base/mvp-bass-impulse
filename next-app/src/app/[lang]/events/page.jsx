import Events from '@/components/events/Events';
import Body from '@/utils/Body';
import Image from 'next/image';
import Hdivider from 'public/icons/divider-h.svg';
import Vdivider from 'public/icons/divider-v.svg';
import { getDictionary } from 'src/dictionaries';

export async function generateMetadata({ params }) {
  return {
    title: 'Events | Basss Impulse',
    description: 'Upcoming and past Bass Impulse events',
    alternates: {
      canonical: `/${params.lang}/events`,
      languages: {
        en: '/en/events',
        cs: '/cs/events',
      },
    },
  };
}

export default async function EventsPage({ params }) {
  const dict = await getDictionary(params.lang);
  return (
    <Body
      className="md:px-8"
      headline={dict.events.heading.toUpperCase()}
      color1Hex="#228697"
      color2Hex="#2A5057"
    >
      <div className="flex flex-1 flex-col place-items-center">
        <div className="flex flex-col md:flex-row gap-8 text-3xl md:text-5xl w-full text-white font-display md:place-items-start place-items-center justify-center">
          <div className="flex flex-col md:items-end text-left mx-8 md:mx-0 gap-2">
            <p className="uppercase text-4xl md:text-5xl">UPCOMING</p>
            <Events type="upcoming" lang={params.lang} />
          </div>
          <Image src={Hdivider} alt="divider" className="md:hidden" />
          <Image
            src={Vdivider}
            alt="divider"
            height=""
            className="hidden md:block"
          />
          <div className="flex flex-col justify-start text-left mx-8 md:mx-0 gap-2">
            <p
              className="uppercase text-4xl md:text-5xl text-transparent"
              style={{ WebkitTextStroke: '1px #fff' }}
            >
              PAST
            </p>
            <Events type="past" lang={params.lang} />
          </div>
        </div>
      </div>
    </Body>
  );
}
