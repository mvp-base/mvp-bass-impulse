'use client';

import { countdownCalc } from '@/helpers/countdown';
import { useState } from 'react';
import { useRef } from 'react';

export default function Countdown(props) {
  const dateRef = useRef(props.date);
  const [time, setTime] = useState(countdownCalc(dateRef));

  setInterval(updatetime, 1000);

  function updatetime() {
    const newtime = countdownCalc(props.date);
    setTime(newtime);
  }

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ '--value': time.days }}></span>
        </span>
        days
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ '--value': time.hours }}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ '--value': time.minutes }}></span>
        </span>
        min
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ '--value': time.seconds }}></span>
        </span>
        sec
      </div>
    </div>
  );
}
