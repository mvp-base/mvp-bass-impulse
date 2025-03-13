'use client';

import { TypeAnimation } from 'react-type-animation';

export default function AnimatedAbooutText(props) {
  const dict = props.dict;
  const DELAY = 3000;
  const textArray = dict.about.aboutTextArray.flatMap(word => [word, DELAY]);

  return (
    <p>
      <span
        className="text-transparent"
        style={{ WebkitTextStroke: '1px white' }}
      >
        <TypeAnimation
          sequence={textArray}
          wrapper="span"
          speed={60}
          repeat={Infinity}
        />
      </span>
    </p>
  );
}
