'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import NextJsImage from '@/utils/NextJsImage';
import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import { Thumb } from './CarouselThumbsButton';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

export default function Carousel(props) {
  const { photos, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [index, setIndex] = useState(-1);

  const [emblaRef, emblaMainApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 2000, stopOnMouseEnter: true, stopOnInteraction: true }),
  ]);

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on('select', onSelect);
    emblaMainApi.on('reInit', onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <>
      <div className="flex-1">
        <div className="overflow-hidden rounded-md h-80" ref={emblaRef}>
          <div className="flex">
            {photos.map((slide, index) => (
              <button
                className="flex-none h-80 mr-5"
                key={index}
                onClick={() => setIndex(index)}
              >
                <Image
                  key={index}
                  alt="photo"
                  src={slide}
                  width={40}
                  height={20}
                  className="rounded-md"
                  placeholder={slide.placeholder ? 'blur' : undefined}
                  blurDataURL={slide.placeholder}
                  style={{
                    width: 'auto',
                    height: '100%',
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-md mt-5" ref={emblaThumbsRef}>
          <div className="flex place-content-center">
            {photos.map((slide, index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                photo={slide}
              />
            ))}
          </div>
        </div>
      </div>
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        render={{ slide: NextJsImage }}
      />
    </>
  );
}
