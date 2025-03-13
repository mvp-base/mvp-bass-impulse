'use client';

import Footer from './Footer';
import Navbar from './Navbar';
import StickyNavbar from './StickyNavbar';
import Menu from './Menu';
import Providers from './Providers';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { usePathname } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bg from 'public/images/bg-exposure.webp';
import filter from 'public/images/filter.webp';

export function getContentHeight() {
  const windowHeight = window.innerHeight;
  const navbarHeight = 90;
  const footerHeight = 90;
  return windowHeight - navbarHeight - footerHeight;
}

export default function MainLayout({ children, dict }) {
  const mainRef = useRef();
  const navbarRef = useRef();
  const footerRef = useRef();
  const location = usePathname();

  const [iconMenuHeight, setIconMenuHeight] = useState(0);

  useEffect(() => {
    mainRef.current.scrollTo(0, 0);
  }, [location]);

  return (
    <main
      ref={mainRef}
      className="flex flex-col h-screen overflow-auto scrollbar-hide overflow-x-hidden bg-black bg-cover bg-fixed text-white"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Providers>
        <Navbar ref={navbarRef} className={'navbar'} dict={dict} />
        <StickyNavbar mainRef={mainRef} dict={dict} />
        <div
          id="content"
          className="flex flex-col grow justify-center justify-items-center"
        >
          {children}
        </div>
        <Footer iconMenuHeight={iconMenuHeight} ref={footerRef} dict={dict} />
        <Menu setIconMenuHeight={setIconMenuHeight} dict={dict} />
        <div
          id="filter"
          className="absolute inset-0 bg-cover bg-fixed"
          style={{
            backgroundImage: `url(${filter.src})`,
            pointerEvents: 'none',
            zIndex: '99',
          }}
        />
        <ToastContainer />
      </Providers>
    </main>
  );
}
