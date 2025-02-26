'use client';

import { motion } from 'framer-motion';

function SolidTextAnimated(props) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{
        times: [0, 0.2, 1],
        delay: props.delay,
        duration: 0.3,
      }}
      className="lg:-mb-10"
    >
      {props.text}
    </motion.p>
  );
}

function StrokeTextAnimated(props) {
  const textStyle = {
    WebkitTextStroke: '2px #A6ADBA',
    color: 'rgba(255, 255, 255, 0)',
  };
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: props.delay,
        duration: props.duration,
      }}
      className="lg:-mb-10"
      style={textStyle}
    >
      {props.text}
    </motion.p>
  );
}

export default function InitialAnimation({ text }) {
  const animationTime = 2.5;

  return (
    <motion.div
      animate={{
        opacity: [1, 0],
        transitionEnd: {
          display: 'none',
        },
      }}
      transition={{
        delay: animationTime,
      }}
      className="flex absolute w-full h-full top-0 z-50 items-center justify-center text-center font-display overflow-hidden whitespace-nowrap"
    >
      <motion.div
        animate={{ scale: [0.8, 1.1, 1, 1], opacity: [1, 1, 1, 0] }}
        transition={{
          times: [0, 0.8, 0.999, 1],
          duration: animationTime * 0.7,
        }}
        className="text-[35px] lg:text-[60px] absolute text-black-30"
      >
        <StrokeTextAnimated text={text} delay="0.8" duration="0.3" />
        <StrokeTextAnimated text={text} delay="0.5" duration="0.5" />
        <StrokeTextAnimated text={text} delay="0.5" duration="0.5" />

        <StrokeTextAnimated text={text} delay="0" duration="0.5" />

        <StrokeTextAnimated text={text} delay="0.3" duration="0.5" />
        <StrokeTextAnimated text={text} delay="0.5" duration="0.3" />
        <StrokeTextAnimated text={text} delay="0.5" duration="0.5" />
      </motion.div>

      <motion.div
        animate={{ opacity: [0, 1, 1], scale: [1, 1, 0.8] }}
        transition={{
          times: [0, 0.01, 1],
          delay: animationTime * 0.7 - 0.05,
          duration: animationTime * 0.4,
        }}
        className="text-[35px] lg:text-[60px] absolute"
      >
        <SolidTextAnimated text={text} delay={animationTime * 0.7 + 0.2} />
        <SolidTextAnimated text={text} delay={animationTime * 0.7 + 0.15} />
        <SolidTextAnimated text={text} delay={animationTime * 0.7 + 0.1} />

        <SolidTextAnimated text={text} delay={animationTime * 0.7} />

        <SolidTextAnimated text={text} delay={animationTime * 0.7 + 0.1} />
        <SolidTextAnimated text={text} delay={animationTime * 0.7 + 0.15} />
        <SolidTextAnimated text={text} delay={animationTime * 0.7 + 0.2} />
      </motion.div>
    </motion.div>
  );
}
