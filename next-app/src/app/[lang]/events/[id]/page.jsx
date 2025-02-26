import Image from 'next/image';
import Body from '@/utils/Body';
import Countdown from '@/components/Countdown';
import Carousel from '@/components/carousel/Carousel';
import BassImpulseEvent from 'src/models/BassImpulseEvent';
import { Suspense } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import photo from 'public/images/1-photo.png';


const ICONS = {
  instagram: faInstagram,
  tiktok: faTiktok,
  youtube: faYoutube,
  soundcloud: faSoundcloud,
  facebook: faFacebook,
};

const CAROUSEL_OPTIONS = {
  loop: true,
  skipSnaps: 'true',
};

export default async function EventPage({ params }) {
  const eventData = {
    id: 1,
    date: "2025-03-15",
    venue: "Prague Exhibition Center",
    links: ["https://example.com/event-details"],
    title_en: "Spring Art Festival",
    title_cs: "Jarní umělecký festival",
    description_en: "A vibrant celebration of contemporary art and culture.",
    description_cs: "Živá oslava současného umění a kultury.",
    content_en: "This event features renowned artists from around the world...",
    content_cs: "Tato událost představuje renomované umělce z celého světa...",
    createdAt: "2025-02-24T12:00:00Z",
    photos: ["photo1.jpg", "photo2.jpg"],
    video: "event_highlight.mp4",
    cover: "/public/images/1-photo.jpg",
    aws_folder: "events/spring-art-festival-2025"
  }
  let event = new BassImpulseEvent(eventData);
  const content = params.lang == 'en' ? event.contentEn : event.contentCs;
  const title = params.lang == 'en' ? event.titleEn : event.titleCs;
  const showCountdown = event.date > new Date();

  return (
    <Body
      className="p-8 md:px-16 lg:w-4/5"
      headline={title.toUpperCase()}
      color1Hex="#228697"
      color2Hex="#2A5057"
    >
      <div className="flex flex-col place-items-center">
        <div className="flex flex-col items-center gap-5">
          <div className="flex lg:flex-row flex-col gap-5 items-center">
            <div className="flex max-w-2xl basis-1/2 h-[250px] overflow-hidden">
              <Image
                alt={title}
                src={photo}
                priority
                width={40}
                height={20}
                blur={event.cover.placeholder ? 'blur' : undefined}
                blurDataURL={event.cover.placeholder}
                className="rounded-md object-cover"
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>

            <div className="flex flex-col flex-1 gap-5 h-full">
              <h1 className="text-center lg:text-start lg:text-2xl text-xl">
                {title}
              </h1>
              <div className="flex flex-row place-items-center gap-5">
                <div>
                  <div className="flex flex-row gap-2">
                  </div>
                  <p className="text-light-blue">{event.venue}</p>
                </div>
                {event.links && (
                  <div className="flex justify-start gap-5">
                    {event.links.map((link, index) => {
                      if (link.type !== 'spotify')
                        return (
                          <a href={link.url} key={index} target="_blank">
                            <FontAwesomeIcon
                              className="hover-effect size-10"
                              icon={ICONS[link.type]}
                            />
                          </a>
                        );
                    })}
                  </div>
                )}
              </div>
              {showCountdown && <Countdown date={event.date} />}
              <p className="text-justify whitespace-pre-line overflow-auto">
                {content}
              </p>
            </div>
          </div>
          {(event.video || event.photos) && (
            <div className="flex lg:flex-row flex-wrap flex-col gap-5 justify-center">
            </div>
          )}
        </div>
      </div>
    </Body>
  );
}
