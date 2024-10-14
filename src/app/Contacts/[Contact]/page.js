"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function ContactPage({ params }) {
  const [formState, setFormState] = useState("input"); // "input", "loading", "success"
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState("loading");

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
        setFormState("success");
        setNameValue("");
        setEmailValue("");
        setMessageValue("");
      } else {
        setFormState("input");
        alert("Oops! There was a problem sending the message.");
      }
    } catch (error) {
      setFormState("input");
      alert("Oops! There was a problem sending the message.");
    }
  };

  const renderFormContent = () => {
    switch (formState) {
      case "loading":
        return (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#DE2A4A]"></div>
          </div>
        );
      case "success":
        return (
          <div className=" p-8  flex flex-col items-center">
            <svg
              className="w-16 h-16 text-black mb-4 bg-[#DE2A4A] rounded-full"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            {/* <p className="text-xl font-semibold text-white">
              Message Sent Successfully!
            </p> */}
          </div>
        );
      default:
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="md:flex w-full md:space-x-4 md:space-y-0 space-y-2">
              <div className="md:w-[50%]">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)}
                  required
                  placeholder="Name"
                  className="w-full px-3 py-2 border rounded-md placeholder-[#808080]  text-black text-[16px]"
                />
              </div>
              <div className="md:w-[50%]">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  required
                  placeholder="Email"
                  className="w-full px-3 py-2 border rounded-md placeholder-[#808080]  text-black  text-[16px]"
                />
              </div>
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                value={messageValue}
                onChange={(e) => setMessageValue(e.target.value)}
                required
                placeholder="Message"
                className="w-full px-3 py-2 border rounded-md placeholder-[#808080]  text-black  text-[16px]"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full text-[20px] bg-[#DE2A4A] text-black font-bold py-4 px-4 rounded-md hover:bg-opacity-80"
            >
              SEND
            </button>
          </form>
        );
    }
  };

  return (
    <div className="relative">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="w-full max-w-[960px] mx-auto">
          <div className="pt-[80px]">
            <Link
              href="/"
              className="text-[#DE2A4A] text-[22px] font-mono hover:opacity-[0.6]"
            >
              <span>&lt;</span> BACK
            </Link>
          </div>

          <h1 className="font-mono md:text-[150px] text-[90px] lg:text-[220px] text-[white]">
            CONTACT
          </h1>

          <div className="md:space-y-4 space-y-2 max-w-[60%] md:pb-[200px] pb-[90px]">
            {renderFormContent()}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
