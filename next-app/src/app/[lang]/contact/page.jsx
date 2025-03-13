import ContactForm from '@/components/ContactForm';
import Body from '@/utils/Body';
import { getDictionary } from 'src/dictionaries';

export async function generateMetadata({ params }) {
  return {
    title: 'Contact | Bass Impulse',
    description: 'Send a message',
    alternates: {
      canonical: `/${params.lang}/contact`,
      languages: {
        en: '/en/contact',
        cs: '/cs/contact',
      },
    },
  };
}

export default async function Contact({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <Body
      headline={dict.contact.title.toUpperCase()}
      color1Hex="#8777A5"
      color2Hex="#CE7492"
    >
      <div className="flex flex-col place-items-center w-[85%] md:w-[35%]">
        <ContactForm data={dict} />
      </div>
    </Body>
  );
}
