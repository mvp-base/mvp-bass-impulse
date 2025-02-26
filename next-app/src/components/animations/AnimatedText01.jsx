import { motion} from 'framer-motion';

export default function AnimatedText01() {
  return (
    <div
      key="ant01"
      className="opacity-90  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[35px] md:text-[60px] font-display text-black-30"
    >
      <motion.p
        key="ant0101"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        SOMETHING
      </motion.p>
      <motion.p
        key="ant0102"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        COMPLETELY
      </motion.p>
      <motion.p
        key="ant0103"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        NEW
      </motion.p>
    </div>
  );
}
