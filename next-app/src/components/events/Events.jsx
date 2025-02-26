'use client';

import { useEffect, useState } from 'react';
import EventCard from './EventCard';
import BassImpulseEvent from 'src/models/BassImpulseEvent';
import EventCarousel from './EventCarousel';


const CAROUSEL_OPTIONS = {
  loop: true,
  align: 'start',
  skipSnaps: 'true',
  slidesToScroll: 'auto',
};

export default function Events(props) {
  const { lang, type } = props;

  const [upcomingEvents, setUpcomingEvents] = useState([
    {
      id: 1,
      date: "2025-06-10",
      venue: "Berlin Art Hall",
      links: ["https://example.com/upcoming-event"],
      title_en: "Summer Art Expo",
      title_cs: "Letní umělecká výstava",
      description_en: "A showcase of modern and experimental art.",
      description_cs: "Přehlídka moderního a experimentálního umění.",
      content_en: "Join artists and art lovers for a unique experience...",
      content_cs: "Připojte se k umělcům a milovníkům umění...",
      createdAt: "2025-02-24T12:00:00Z",
      photos: ["upcoming1.jpg"],
      video: "upcoming_video.mp4",
      cover: "photo.jpg",
      aws_folder: "events/summer-art-expo-2025"
    }
  ]);

  const [pastEvents, setPastEvents] = useState([
    {
      id: 2,
      date: "2024-11-20",
      venue: "Vienna Cultural Center",
      links: ["https://example.com/past-event-1"],
      title_en: "Autumn Music Fest",
      title_cs: "Podzimní hudební festival",
      description_en: "A celebration of classical and contemporary music.",
      description_cs: "Oslava klasické a současné hudby.",
      content_en: "Featuring world-renowned musicians...",
      content_cs: "Vystoupení světově uznávaných hudebníků...",
      createdAt: "2024-09-15T10:00:00Z",
      photos: ["past1.jpg"],
      video: "past_video1.mp4",
      cover: "past_cover1.jpg",
      aws_folder: "events/autumn-music-fest-2024"
    },
    {
      id: 3,
      date: "2023-07-05",
      venue: "London Exhibition Hall",
      links: ["https://example.com/past-event-2"],
      title_en: "Global Science Fair",
      title_cs: "Globální vědecký veletrh",
      description_en: "Exploring the latest innovations in science and technology.",
      description_cs: "Objevování nejnovějších inovací ve vědě a technologiích.",
      content_en: "Bringing together scientists and researchers...",
      content_cs: "Setkání vědců a výzkumníků...",
      createdAt: "2023-05-01T14:30:00Z",
      photos: ["past2.jpg"],
      video: "past_video2.mp4",
      cover: "past_cover2.jpg",
      aws_folder: "events/global-science-fair-2023"
    }
  ]);


  switch (type) {
    case 'upcoming':
      return (
        upcomingEvents &&
        upcomingEvents.map((event, index) => (
          <EventCard
            key={index}
            event={event}
            lang={lang}
          />
        ))
      );
    case 'past':
      return (
        pastEvents && (
          <EventCarousel
            slides={pastEvents.map((event, index) => (
              <EventCard
                key={index}
                event={event}
                lang={lang}
              />
            ))}
            options={CAROUSEL_OPTIONS}
          />
        )
      );
    default:
      return (
        <div className="flex gap-16 flex-wrap">
          {events &&
            events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                lang={lang}
              />
            ))}
        </div>
      );
  }
}
