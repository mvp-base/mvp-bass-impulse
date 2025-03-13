'use client';

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { GetNavbarContent } from './Navbar';

//extends Navbar.jsx
export default function StickyNavbar({ mainRef, dict }) {
  const [belowOffset, setBelowOffset] = useState(false);
  const navbarAnimation = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = mainRef.current.scrollTop;
      setBelowOffset(offset > 250);
    };

    mainRef.current.addEventListener('scroll', handleScroll);
  }, [mainRef]);

  useEffect(() => {
    if (belowOffset) {
      navbarAnimation.start({ y: [-100, 0] });
    }
  }, [belowOffset, navbarAnimation]);

  return (
    <motion.div
      className={`${belowOffset
          ? 'sticky z-50 top-0 w-full flex flex-row items-center justify-between py-4 px-8 hidden md:block'
          : 'hidden'
        }`}
      animate={navbarAnimation}
    >
      <div className="flex items-center justify-between bg-black border-2 border-white py-2 px-4 w-full relative">
        <GetNavbarContent dict={dict} />
      </div>
    </motion.div>
  );
}
