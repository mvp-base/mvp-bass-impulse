import { motion } from 'framer-motion';

export default function AnimatedText02(props) {
  return (
    <div
      key="ant02"
      className="opacity-90 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[35px] md:text-[60px] font-display text-black-30"
    >
      <motion.p
        key="ant0201"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {props.text1}
      </motion.p>
      <motion.p
        key="ant0202"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {props.text2}
      </motion.p>
      <motion.p
        key="ant0203"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {props.text3}
      </motion.p>
    </div>
  );
}
