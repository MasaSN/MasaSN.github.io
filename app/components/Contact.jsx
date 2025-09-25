"use client";
import React from "react";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { PiStarFourFill } from "react-icons/pi";
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cff0a354-895f-468b-828d-d25ae0a23d5a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section className="mt-12 pb-8" id="contact">
      <div className="text-center">
        <p className="text-content font-semibold inline-flex item-center grap-1 border-1 border-outer py-1.5 px-3 rounded-2xl mb-4">
          <PiStarFourFill className="text-lg" />
          Contact
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8">
          Want to collaborate? <br />
          Let's get in touch!
        </h2>
      </div>
      {/* contact form */}
      <form
        onSubmit={onSubmit}
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 text-xl fornt-semibold"
      >
        {/* lets side */}
        <div className="flex flex-col space-y-6">
          <input
            type="text"
            name="name"
            id=""
            placeholder="Your Name*"
            required
            className="border-b-2 border-outer bg-transparent focus:outline-none focus:border-primary py-3"
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Your Email*"
            required
            className="border-b-2 border-outer bg-transparent focus:outline-none focus:border-primary py-3"
          />
        </div>
        {/* right side */}
        <div className="flex flex-col space-y-6">
          <input
            type="text"
            name="Company"
            id=""
            placeholder="Company or Association*"
            required
            className="border-b-2 border-outer bg-transparent focus:outline-none focus:border-primary py-3"
          />
          <input
            type="tel"
            name="Phone"
            id=""
            placeholder="Phone Number*"
            required
            className="border-b-2 border-outer bg-transparent focus:outline-none focus:border-primary py-3"
          />

          {/* Button */}
        </div>
        {/* text area */}
        <div className="md:col-span-2">
          <textarea
            name="Message"
            id=""
            placeholder="A Few Words*"
            required
            className="w-full border-b-2 border-outer bg-transparent focus:outline-none focus:border-primary py-2 h-24 resize-none "
          ></textarea>
        </div>
        <div className="md:col-span-2">
          <button
            type="submit"
            className="mt-6 custom-gradient text-white text-[1rem] font-semibold py-3 px-6 rounded-2xl flex item-center gap-2 hover:opacity-90 transition-opacity cursor-pointer "
          >
            Send Message <FaPaperPlane />
          </button>
        </div>
        <span className="max-w-4xl mx-auto">{result}</span>
      </form>
    </section>
  );
};

export default Contact;
