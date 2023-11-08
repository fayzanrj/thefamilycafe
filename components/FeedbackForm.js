"use client";
import React, { useRef, useState } from "react";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [greet, setGreet] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setGreet(true);
    setName("");
    setEmail("");
    setMsg("");
    setTimeout(() => {
      setGreet(false);
    }, 10000);
  };
  return (
    <>
      {/* THANKYOU MESSAGE */}
      {greet && (
        <p className="w-full -top-2 absolute left-1/2 transform -translate-x-1/2 ">
          Thank you, we have received your message
        </p>
      )}

      {/* HEADING */}
      <h3 className="text-xl font-semibold">
        Got some <span className="text-[#ED558E] font-bold">FEEDBACK</span> or{" "}
        <span className="text-[#ED558E] font-bold">SUGGESTIONS</span> for us?
      </h3>

      {/* FORM */}
      <form className="mt-4 w-78" onSubmit={handleSubmit}>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          required
          id="name"
          placeholder="Full Name"
          className="border-2 p-2 w-full rounded-lg my-2 outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email" className="sr-only">
          E-mail
        </label>
        <input
          required
          id="email"
          type="email"
          placeholder="Your Email"
          className="border-2 p-2 w-full rounded-lg my-2 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          required
          id="message"
          placeholder="Message"
          className="border-2 p-2 w-full rounded-lg resize-y h-24 max-h-32 my-2 SCROLL_BAR outline-none"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button
          type="submit"
          className="w-full py-2 bg-[#ED558E] text-white rounded-lg"
        >
          Send Message
        </button>
      </form>
    </>
  );
};

export default FeedbackForm;
