'use client';

import { countdownCalc } from '@/helpers/countdown';
import { useState } from 'react';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AnimatedCountdown(props) {
  setInterval(updatetime, 1000);
  const dateRef = useRef(props.date);
  const [time, setTime] = useState(countdownCalc(dateRef));

  function updatetime() {
    const newtime = countdownCalc(props.date);
    setTime(newtime);
  }

  return (
    <div
      className={`${props.className} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black-30`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
      >
        <h1
          className="text-3xl md:text-5xl mb-4"
        >
          {props.upcomingEventData.title_en.toUpperCase()}
        </h1>

        <div className="grid grid-flow-col gap-6 md:gap-12 justify-center auto-cols-max text-white text-xs md:text-sm">
          <div className="flex flex-col text-black-30">
            <span className="countdown font-header text-3xl md:text-5xl">
              <span style={{ '--value': time.days }}></span>
            </span>
            <p className="relative">days</p>
          </div>
          <div className="flex flex-col text-black-30">
            <span className="countdown font-header text-3xl md:text-5xl">
              <span style={{ '--value': time.hours }}></span>
            </span>
            hours
          </div>
          <div className="flex flex-col text-black-30">
            <span className="countdown font-header text-3xl md:text-5xl">
              <span style={{ '--value': time.minutes }}></span>
            </span>
            min
          </div>
          <div className="flex flex-col text-black-30">
            <span className="countdown font-header text-3xl md:text-5xl">
              <span style={{ '--value': time.seconds }}></span>
            </span>
            sec
          </div>
        </div>

        <Link href={`/events/${props.upcomingEventPageId}`}>
          <button
            className="font-header bg-light-blue text-sm md:text-xl hover-effect py-1 md:py-2 px-2 md:px-4 mt-4 border border-black-30 text-black-80"
          >
            SEE MORE
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
