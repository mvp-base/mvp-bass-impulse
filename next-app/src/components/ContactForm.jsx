'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';

export default function ContactForm({ data }) {
  const [loading, setLoading] = useState(false);
  let checked = false;

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append('checked', checked);

    try {
      const response = await fetch('/api/send-mail', {
        method: 'post',
        body: formData,
      });
      setLoading(false);
      if (!response.ok) {
        console.log('falling over');
        throw new Error(`response status: ${response.status}`);
      }
      document.forms['contact'].reset();

      const responseData = await response.json();
      console.log(responseData['message']);

      toast('Message sent successfully', {
        hideProgressBar: false,
        autoClose: 2000,
        type: 'success',
        position: 'bottom-right',
      });
    } catch (err) {
      console.error(err);
      alert('Error, please try resubmitting the form');
    }
  }

  function handleChecked() {
    checked = checked ? false : true;
  }

  return (
    <form
      id="contact"
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 items-center"
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
            onClick={handleChecked}
            type="checkbox"
            className="checkbox accent-red"
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={true}
        className="btn btn-primary w-full">Send</button>
    </form>
  );
}
