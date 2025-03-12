import Image from 'next/image';
import Body from '@/utils/Body';
import bg from 'public/images/about-bg.webp';
import filler from 'public/images/filler-large.svg';
import AnimatedAboutText from '@/components/animations/AnimatedAboutText';
import { getDictionary } from 'src/dictionaries';

export async function generateMetadata({ params }) {
  return {
    title: 'About | Bass Impulse',
    description: 'About Bass Impulse',
    alternates: {
      canonical: `/${params.lang}/about`,
      languages: {
        en: '/en/about',
        cs: '/cs/about',
      },
    },
  };
}

export default async function About({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <Body headline={dict.about.title} color1Hex="#718BE9" color2Hex="#2A5057">
      <div className="z-0 flex justify-center relative w-full h-full ">
        <Image className="z-0" src={bg} fill alt="" priority />
        <div className="z-10 flex flex-col w-full gap-4 text-justify items-center justify-center text-[28px] md:text-5xl font-display px-4">
          <div className="flex gap-2 md:gap-4">
            <h1>{dict.about.heading}</h1>
            <h2>
              <AnimatedAboutText dict={dict} />
            </h2>
          </div>
          <div className="px-4 max-w-[450px] min-h-[160px]">
            <p className="text-sm md:text-lg font-body inline-block whitespace-normal mt-2">
              {dict.about.bio}
            </p>
          </div>
          <div className="flex px-4 min-h-[160px] items-center">
            <Image
              alt="About Us"
              src={filler}
              loading="eager"
              priority
              sizes="25vw"
            />
          </div>
        </div>
      </div>
    </Body>
  );
}
