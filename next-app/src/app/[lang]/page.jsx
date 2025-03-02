import Image from 'next/image';
import Body from '@/utils/Body';
import SpotifyFrame from '@/components/SpotifyFrame';
import HomeAnimation from '@/utils/HomeAnimation';
import BassImpulseEvent from 'src/models/BassImpulseEvent';
import { Suspense } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import bg from 'public/images/home-bg.webp';
import dash from 'public/icons/dash.svg';
import diveinto from 'public/images/diveinto.png';

export async function generateMetadata({ params }, parent) {
  const languages = (await parent).alternates?.languages || [];

  return {
    alternates: {
      canonical: `/${params.lang}`,
      languages: languages,
    },
  };
}

export default async function Home({ params }) {
  const upcomingEventData = {
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
    cover: "cover_image.jpg",
    aws_folder: "events/spring-art-festival-2025"
  }
  let upcomingEvent = new BassImpulseEvent(upcomingEventData);
  const upcomingEventPageId = upcomingEvent.getPageId(params.lang);

  const test = process.env.APP_ENV;
  console.log(test);
  return (
    <>
      <div className="relative -top-[92.8px] left-0 w-full h-full overflow-y-auto overflow-x-hidden">
        <Suspense
          fallback={<Image src={bg} fill alt="" priority placeholder="blur" className='pointer-events-none' />}
        >
          <video
            className="relative top-0 left-0 w-full h-screen object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          >
            <source
              src="https://bassimpulse.s3.eu-north-1.amazonaws.com/bass-impulse-welcome-video.mp4"
              type="video/mp4"
            />
          </video>
        </Suspense>

        <HomeAnimation
          upcomingEventData={upcomingEventData}
          upcomingEventPageId={upcomingEventPageId}
        />
      </div>

      <div className="relative -top-[92.8px] flex flex-row gap-8 md:gap-16 justify-center">
        <Body
          className="md:py-28"
          headline="LISTEN ON SPOTIFY"
          color1Hex="#96405F"
          color2Hex="#007b83"
        >
          <div className="grow flex flex-col-reverse md:flex-row items-center justify-center bg-cover bg-center gap-16">
            <Image src={diveinto} alt="dive into" className="size-[400px]" loading="eager" />
            <div className="flex flex-col flex-none items-center md:items-start text-center md:text-left font-display gap-8">
              <p className="uppercase text-5xl md:text-7xl text-black [text-shadow:0px_0px_25px_#f96167]  [-webkit-text-stroke:2px_#f96167] md:[-webkit-text-stroke:4px_#f96167]">
                Dive Into <br /> Our Sound
              </p>
              <div className="flex flex-col gap-2 items-center">
                <p className="text-[#A6ADBA] text-3xl md:text-4xl">LISTEN NOW</p>
                <div className="flex flex-row justify-center gap-4">
                  <Image src={dash} loading="eager" alt="dash" />
                  <a
                    href="https://open.spotify.com/playlist/0jHbQMs3VVIVkd80y7nmM4?si=ad6839ea24354be2"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      className="hover-effect size-8 text-[#A6ADBA]"
                      alt="Spotify"
                      icon={faSpotify}
                    />
                  </a>
                  <Image src={dash} loading="eager" alt="dash" />
                </div>
              </div>
            </div>
          </div>
        </Body>
      </div>
    </>
  );
}
