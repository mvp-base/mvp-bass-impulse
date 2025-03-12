import { motion } from 'framer-motion';

export default function AnimatedText03(props) {
  return (
    <div
      key="ant03"
      className="opacity-90 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[35px] md:text-[60px] font-display text-black-30"
    >
      <motion.p
        key="ant0301"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: [0, 1, 1, 0], x: [-100, 0, 0, 0] }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2, times: [0, 0.2, 0.999, 1] }}
      >
        {props.text1}
      </motion.p>
      <motion.p
        key="ant0302"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: [0, 1, 1, 0], x: [100, 0, 0, 0] }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1.75,
          delay: 0.25,
          times: [0, 0.2, 0.999, 1],
        }}
      >
        {props.text2}
      </motion.p>
      <motion.p
        key="ant0303"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: [0, 1, 1, 0], x: [-100, 0, 0, 0] }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1.5,
          delay: 0.5,
          times: [0, 0.2, 0.999, 1],
        }}
      >
        {props.text3}
      </motion.p>
      <motion.p
        key="ant0304"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1.5 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 2 }}
        className="absolute inset-0 flex justify-center items-center text-transparent"
        style={{
          WebkitTextStroke: `1px #fff`,
          '@media (min-width: 768px)': {
            WebkitTextStroke: `5px #fff`,
          },
        }}
      >
        {props.text4}
      </motion.p>
    </div>
  );
}
