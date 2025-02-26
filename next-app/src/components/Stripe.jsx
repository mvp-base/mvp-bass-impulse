'use client';

import { motion } from 'framer-motion';

export default function Stripe(props) {
  const { type, color1Hex, color2Hex, headline } = props;
  const color1 = type === 'top' ? color2Hex : color1Hex;
  const color2 = type === 'top' ? color1Hex : color2Hex;

  return (
    <div
      className="flex flex-row w-screen items-center justify-between self-stretch"
      style={{
        background: `linear-gradient(90deg, ${color1}, ${color2})`,
        height: '52px',
      }}
    >
      <motion.div
        className="flex flex-row font-display text-hard-white text-2xl md:text-3xl overflow-visible whitespace-nowrap gap-8 mx-auto text-center"
        initial={{ x: '0%' }}
        animate={{ x: '-45%' }}
        transition={{
          duration: 240,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      >
        {[...Array(50)].map((_, index) => (
          <span key={index}> {headline}</span>
        ))}
      </motion.div>
    </div>
  );
}
