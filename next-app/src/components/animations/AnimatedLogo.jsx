import { motion} from 'framer-motion';
import logoWithSlogan from 'public/icons/bass-impulse-with-slogan.svg';
import Image from 'next/image';

export default function AnimatedLogo(props) {
  return (
    <div
      className={`${props.className} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1], scale: [0, 0.8, 1.1] }}
        transition={{ duration: 4, delay: 0.8, times: [0, 0.1, 1] }}
      >
        <Image
          className="w-[350px] h-auto"
          priority
          src={logoWithSlogan}
          alt="logo"
        />
      </motion.div>
    </div>
  );
}
