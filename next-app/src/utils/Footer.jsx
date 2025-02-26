'use client';

import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTiktok,
  faFacebook,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import pipe from 'public/icons/pipe.svg';

const Footer = React.forwardRef(function Footer(props, ref) {
  return (
    <footer
      ref={ref}
      style={{ paddingBottom: `${props.iconMenuHeight}px` }}
      className="flex flex-col items-center justify-start text-white text-xs md:text-base"
    >
      <div className="self-stretch flex flex-col-reverse md:flex-row items-center justify-between gap-0 md:gap-2 px-2 md:px-8">
        <nav className="flex flex-row items-left m-4 gap-8">
          <a
            href="https://www.instagram.com/bassimpulse/"
            aria-label="Instagram"
            target="_blank"
          >
            <FontAwesomeIcon
              className="hover-effect size-8"
              alt="Instagram"
              icon={faInstagram}
            />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61555682581892"
            aria-label="Facebook"
            target="_blank"
          >
            <FontAwesomeIcon
              className="hover-effect size-8"
              alt="Facebook"
              icon={faFacebook}
            />
          </a>

          <a
            href="https://www.tiktok.com/@_bass_impulse_"
            aria-label="TikTok"
            target="_blank"
          >
            <FontAwesomeIcon
              className="hover-effect size-8"
              alt="Tiktok"
              icon={faTiktok}
            />
          </a>

          <a
            href="https://www.youtube.com/channel/UCzyVg5yESnCVZE5C3tQADGQ"
            aria-label="YouTube"
            target="_blank"
          >
            <FontAwesomeIcon
              className="hover-effect size-8"
              alt="Youtube"
              icon={faYoutube}
            />
          </a>
        </nav>
        <a href="https://www.google.com" target="_blank">
          <p className="font-display hover-effect pt-3 md:pt-0">
            PRESS & MEDIA KIT
          </p>
        </a>
      </div>
      <div className="self-stretch bg-black-80 flex flex-row items-center justify-center gap-2 py-1 md:py-2">
        <p>Providing bass since 2023</p>
        <Image
          height={20}
          width={2}
          alt="Separate"
          src={pipe}
          loading="eager"
        />
        <p>Bass Impulse :)</p>
      </div>
    </footer>
  );
});

export default Footer;
