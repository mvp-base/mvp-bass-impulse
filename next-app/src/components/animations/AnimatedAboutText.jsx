'use client';

import { TypeAnimation } from 'react-type-animation';

export default function AnimatedAbooutText() {
  return (
    <p>
      <span
        className="text-transparent"
        style={{ WebkitTextStroke: '1px white' }}
      >
        <TypeAnimation
          sequence={[
            'International.',
            3000,
            'Underground.',
            3000,
            'Bass Impulse.',
            3000,
          ]}
          wrapper="span"
          speed={60}
          repeat={Infinity}
        />
      </span>
    </p>
  );
}
