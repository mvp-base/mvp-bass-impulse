'use client';

export default function ContactForm({ data }) {

  return (
    <form
      id="contact"
      className="flex flex-col gap-5 items-center w-full"
    >
      <div className="flex flex-col w-full gap-5">
        <div>
          <label className="font-semibold" htmlFor="form-name">
            {data.contact.name}
          </label>
          <input
            id="form-name"
            autoComplete="name"
            placeholder={data.contact.namePlaceholder}
            maxLength={50}
            size="lg"
            name="name"
            className="input border-red w-full mt-2"
          />
        </div>

        <div>
          <label className="font-semibold" htmlFor="form-email">
            {data.contact.email}
          </label>
          <input
            id="form-email"
            required
            autoComplete="email"
            placeholder={data.contact.emailPlaceholder}
            maxLength={80}
            name="email"
            type="email"
            className="input border-red w-full mt-2"
          />
        </div>

        <div>
          <label className="font-semibold" htmlFor="form-message">
            {data.contact.message}
          </label>
          <textarea
            id="form-message"
            placeholder={data.contact.messagePlaceholder}
            required
            name="message"
            className="textarea border-red textarea-lg w-full mt-2"
          />
        </div>
      </div>
      <div className="form-control">
        <label className="label flex-row gap-5 cursor-pointer">
          <span className="label-text">{data.contact.copy}</span>
          <input
            id="sendCopy"
            type="checkbox"
            className="checkbox accent-red"
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={true}
        className="btn btn-primary w-full">{data.contact.send}</button>
    </form>
  );
}
