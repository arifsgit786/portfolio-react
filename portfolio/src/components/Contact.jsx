import { useState } from "react";
import { CONTACT } from "../constants";

const Contact = () => {
  const emailAddress = CONTACT.email;
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/mpwrrdaq", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      form.reset();
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>

      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href={`mailto:${emailAddress}`} className="border-b">
          {CONTACT.email}
        </a>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-10 max-w-xl mx-auto text-left space-y-6"
      >
        <div>
          <label htmlFor="name" className="block mb-1 text-sm text-neutral-400">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            className="w-full rounded-md bg-neutral-800 border border-neutral-700 px-4 py-2 text-white"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-1 text-sm text-neutral-400"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your@email.com"
            className="w-full rounded-md bg-neutral-800 border border-neutral-700 px-4 py-2 text-white"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-1 text-sm text-neutral-400"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Type your message here..."
            className="w-full rounded-md bg-neutral-800 border border-neutral-700 px-4 py-2 text-white"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md shadow-md transition duration-300"
        >
          Send Message
        </button>

        {status && <p className="text-center text-green-400 pt-4">{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
