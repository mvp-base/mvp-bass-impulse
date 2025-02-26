import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import hamburger from 'public/icons/hamburger.svg';
import close from 'public/icons/close.svg';
import logo from 'public/icons/bass-impulse.svg';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

import { getPages } from '@/utils/Navbar.jsx';

export default function Menu(props) {
  const [menuType, setMenuType] = useState(2);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { setIconMenuHeight } = props;
  const iconMenuRef = useRef(null);

  const buttons = Object.entries(getPages());
  const pageNames = Object.keys(getPages());


  useEffect(() => {
    if (iconMenuRef.current) {
      setIconMenuHeight(iconMenuRef.current.offsetHeight);
    }
  }, [iconMenuRef, setIconMenuHeight]);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  function DropdownMenu() {
    return (
      <div
        style={{ touchAction: 'none' }}
        className="z-0 fixed bottom-4 left-8 right-8 font-display text-white md:hidden overflow-hidden"
      >
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="menu"
              animate={{ y: [600, 0] }}
              exit={{ y: [0, 600] }}
              transition={{ type: 'ease' }}
              className="flex flex-col items-center justify-center gap-2 py-4 text-lg bg-black md:hidden w-full border-t-2 border-r-2 border-l-2 border-solid border-white"
            >
              <Link key={0} href="/" onClick={closeMenu}>
                <Image
                  className="m-1"
                  height={200}
                  width={90}
                  alt="Bass Impulse"
                  src={logo}
                />
              </Link>
              {pageNames.map((item, index) => (
                <>
                  <Link
                    key={index + 1}
                    href={`/${item.toLowerCase()}`}
                    onClick={closeMenu}
                  >
                    <button className="font-display text-lg p-1 inline-flex items-center justify-center relative">
                      {item}
                    </button>
                  </Link>
                </>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <button
          id="menuButton"
          className="relative flex items-center justify-center z-1 w-full h-14 bg-black gap-2 border-2 border-solid border-white"
          onClick={toggleMenu}
        >
          <div
            className={`flex items-center gap-2 ${
              isMenuOpen ? 'hidden' : 'block'
            }`}
          >
            <Image alt="Open" src={hamburger} width={32} height={32} />
            <p className="text-xl">MENU</p>
          </div>
          <div
            className={`flex items-center ${isMenuOpen ? 'block' : 'hidden'}`}
          >
            <Image alt="Close" src={close} width={32} height={32} />
          </div>
        </button>
      </div>
    );
  }

  function IconMenu() {
    return (
      <div
        ref={iconMenuRef}
        style={{ touchAction: 'none' }}
        className=" z-0 fixed bottom-0 flex flex-row items-center justify-center gap-6 py-2 font-display text-white text-lg bg-black md:hidden w-full border-t-2 border-solid border-white md:hidden overflow-hidden"
      >
        <Link key={0} href="/">
          <button className="flex flex-col font-header text-xs inline-flex items-center justify-center relative">
            <FontAwesomeIcon alt="Home" icon={faHouse} size="2x" />
            <span>HOME</span>
          </button>
        </Link>
        {buttons.map(([item, icon], index) => (
          <Link key={index + 1} href={`/${item.toLowerCase()}`}>
            <button className="flex flex-col font-header text-xs inline-flex items-center justify-center relative">
              <FontAwesomeIcon alt={item} icon={icon} size="2x" />
              <span>{item}</span>
            </button>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <>
      {menuType === 1 && <DropdownMenu />}
      {menuType === 2 && <IconMenu />}
    </>
  );
}
