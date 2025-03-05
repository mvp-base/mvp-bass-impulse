import ContactForm from '@/components/ContactForm';
import Body from '@/utils/Body';
import { getDictionary } from 'src/dictionaries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
      <div className="flex flex-col place-items-center">
        <a
          className="flex flex-row w-fit place-items-center m-5"
          href="mailto:contact@bassimpulse.com"
        >
          <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
        </a>
        <ContactForm data={dict} />
      </div>
    </Body>
  );
}
