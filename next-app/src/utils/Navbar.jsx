'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/icons/bass-impulse.svg';

export function GetNavbarContent({ dict }) {
  if (!dict) return null;
  const pages = dict.general?.pages || [];

  return (
    <div className="w-full overflow-hidden flex flex-row items-center justify-between text-center gap-4 py-1 px-3 font-display text-white text-md lg:text-lg">
      <div className="flex-1 flex flex-row items-center justify-start py-1">
        <Link href="/" aria-current="page">
          <Image
            className="hover-effect"
            height={220}
            width={120}
            alt="Bass Impulse"
            src={logo}
            loading="eager"
          />
        </Link>
      </div>
      <div className="flex flex-row items-center justify-center gap-1 lg:gap-6">
        {pages.map((item, index) => (
          <div key={index} className="flex">
            <Link
              href={
                item === 'home' ? '/' : `${item.link}`
              }
              aria-current="page"
            >
              <button className="relative p-2 uppercase hover-effect">
                {item.name}
              </button>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex-1" />
    </div>
  );
}

const Navbar = React.forwardRef(function Navbar(props, ref) {
  const dict = props.dict;
  return (
    <nav>
      <div
        id="desktop-navbar"
        ref={ref}
        className="py-4 px-12 w-full self-stretch items-center relative justify-between hidden md:block z-10"
      >
        <div className="items-center justify-between w-full relative hidden md:flex">
          <GetNavbarContent dict={dict} />
        </div>
      </div>
      <div
        id="mobile-navbar"
        className="p-6 w-full flex self-stretch items-center relative justify-center md:hidden z-20"
      >
        <Link href="/" aria-current="page">
          <Image
            className="hover-effect"
            height={220}
            width={120}
            alt="Bass Impulse"
            src={logo}
            loading="eager"
          />
        </Link>
      </div>
    </nav>
  );
});

export default Navbar;
