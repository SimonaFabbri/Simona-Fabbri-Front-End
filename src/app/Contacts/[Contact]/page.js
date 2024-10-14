"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage({ params }) {
  const [status, setStatus] = useState("");
  const [nameValue, setNameValue] = useState("Name");
  const [emailValue, setEmailValue] = useState("Email");
  const [messageValue, setMessageValue] = useState("Message");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    // Aggiungi la tua chiave API di Web3Forms
    data.append("access_key", "07cd9679-6542-4804-b9be-c65ee2dde967");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Grazie! Il tuo messaggio è stato inviato.");
        form.reset();
      } else {
        setStatus("Oops! C'è stato un problema nell'invio del messaggio.");
      }
    } catch (error) {
      setStatus("Oops! C'è stato un problema nell'invio del messaggio.");
    }
  };

  const handleNameFocus = (e) => {
    if (e.target.value === "Name") {
      setNameValue("");
    }
  };

  const handleNameBlur = (e) => {
    if (e.target.value === "") {
      setNameValue("Name");
    }
  };

  const handleEmailFocus = (e) => {
    if (e.target.value === "Email") {
      setEmailValue("");
    }
  };

  const handleEmailBlur = (e) => {
    if (e.target.value === "") {
      setEmailValue("Email");
    }
  };

  const handleMessageFocus = () => {
    if (messageValue === "Message") {
      setMessageValue("");
    }
  };

  const handleMessageBlur = () => {
    if (messageValue.trim() === "") {
      setMessageValue("Message");
    }
  };

  return (
    <div className=" max-w-[1200px] mx-auto px-4 ">
      <div className="w-full max-w-[960px] mx-auto">
        <div className="pt-[80px]">
          <Link
            href="/"
            className="text-[#DE2A4A] text-[22px] font-mono hover:opacity-[0.6]"
          >
            <span>&lt;</span> BACK
          </Link>
        </div>

        <h1 className="font-mono  md:text-[150px] text-[90px] lg:text-[220px] text-[white] ">
          CONTACT
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              onFocus={handleNameFocus}
              onBlur={handleNameBlur}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              value={messageValue}
              onChange={(e) => setMessageValue(e.target.value)}
              onFocus={handleMessageFocus}
              onBlur={handleMessageBlur}
              required
              className="w-full px-3 py-2 border rounded-md"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-center">{status}</p>}
      </div>
    </div>
  );
}
