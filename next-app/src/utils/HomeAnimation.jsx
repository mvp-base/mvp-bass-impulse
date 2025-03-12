'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import AnimatedBurstText from '@/components/animations/AnimatedBurstText';
import AnimatedLogo from '@/components/animations/AnimatedLogo';
import AnimatedText01 from '@/components/animations/AnimatedText01';
import AnimatedText02 from '@/components/animations/AnimatedText02';
import AnimatedText03 from '@/components/animations/AnimatedText03';
import AnimatedCountdown from '@/components/animations/AnimatedCountdown';

export default function HomeAnimation(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dict = props.dict;
  const items = useMemo(
    () => [
      {
        content: <AnimatedLogo />,
        delay: 4000,
      },
      {
        content: <AnimatedText01 text1={dict.home.slogan1[0]} text2={dict.home.slogan1[1]} text3={dict.home.slogan1[2]} />,
        delay: 3000,
      },
      {
        content: <AnimatedText02 text1={dict.home.slogan2[0]} text2={dict.home.slogan2[1]} text3={dict.home.slogan3[2]} />,
        delay: 3000,
      },
      {
        content: <AnimatedText03 text1={dict.home.slogan3[0]} text2={dict.home.slogan3[1]} text3={dict.home.slogan3[2]} text4={dict.home.slogan3[3]} />,
        delay: 4000,
      },
      {
        content: <AnimatedBurstText text={'BASS IMPULSE'} />,
        delay: 2500,
      },
      {
        content: (
          <AnimatedCountdown
            upcomingEventData={props.upcomingEventData}
            upcomingEventPageId={props.upcomingEventPageId}
            date={props.upcomingEventData.date}
          />
        ),
        delay: 90000,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % items.length;
      setCurrentIndex(nextIndex);
    }, items[currentIndex].delay);

    return () => clearTimeout(timer);
  }, [currentIndex, items]);

  return (
    <div className="absolute flex flex-col justify-between inset-0 overflow-hidden text-center pt-20 pb-12 h-screen">
      <AnimatePresence>
        {items.map(
          (item, index) => index === currentIndex && <>{item.content}</>
        )}
      </AnimatePresence>
    </div>
  );
}
