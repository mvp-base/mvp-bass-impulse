'use client';

import Link from 'next/link';
import Image from 'next/image';
import photo from 'public/images/1-photo.png';

export default function EventCard(props) {
  const { event, lang } = props;
  const title = lang === 'en' ? event.titleEn : event.titleCs;
  const description = lang === 'en' ? event.descriptionEn : event.descriptionCs;
  const eventPageId = event.id;

  return (
    <div className="relative group flex flex-col w-80 h-96 text-left border-2 overflow-hidden border-solid border-white bg-black group rounded-md">
      <Link href={`/events/${eventPageId}`}>
        <div className="flex flex-col items-start justify-start p-4">
          <div className="flex-shrink-0 w-full">
            <h2 className="uppercase text-white text-3xl">Spring Art Festival</h2>
          </div>
          <p className="font-body text-light text-lg">{description}</p>
        </div>
        <div id="line" className="h-1 bg-white" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
        <Image src={photo} alt={title} className="object-cover rounded-t-md" />
      </Link>
    </div>
  );
}
