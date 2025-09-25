import { section } from "framer-motion/client";
import React from "react";
import { HiDownload } from "react-icons/hi";
import { PiStarFourFill } from "react-icons/pi";
const About = () => {
  return (
    <section className="mt-12 pb-8" id="about">
      <div className="text-center">
        <p className="text-content font-semibold inline-flex item-center grap-1 border-1 border-outer py-1.5 px-3 rounded-2xl mb-4">
          <PiStarFourFill className="text-lg" />
          About
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8">
          Automating solutions through vision.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 ">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-outer">
          <h3 className="text-5xl md:text-6xl font-bold text-gradient mb-2">
            7<span className="align-super text-xl">th</span>
          </h3>
          <p className="text-gray-700 font-medium text-lg">
            TEKNOFEST 2025 NLP Hackathon
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-outer">
          <h3 className="text-5xl md:text-6xl font-bold text-gradient mb-2">
            1
          </h3>
          <p className="text-gray-700 font-medium text-lg">
            Conference Publication
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-outer">
          <h3 className="text-5xl md:text-6xl font-bold text-gradient mb-2">
            89%
          </h3>
          <p className="text-gray-700 font-medium text-lg">
            Accuracy on Feature Extractor
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2 flex flex-col space-y-6">
          <p className="text-gray-600 text-lg leading-relaxed">
            A curious and ambitious student, I believe the best learning happens
            by doing. This motivates me to push my limits through challenging
            projects, hackathons, and competitions. I am particularly passionate
            about computer vision and research, which is where most of my
            projects are focused.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            I thrive in communities and social activities, and I enjoy both
            learning from others and helping them, which inspires me to
            volunteer and take part in leadership roles.
          </p>
          <a
            href="/assets/Masa_soudan_CV.pdf"
            download
            className="custom-gradient py-4 px-8 text-white rounded-full font-semibold flex items-center justify-center gap-2 w-max hover:opacity-90 transition-opacity duration-300"
          >
            Download CV
            <HiDownload className="text-lg" />
          </a>
        </div>

        <div className="lg:col-span-1 space-y-4">
          <div>
            <p className="text-gray-500 text-sm font-medium mb-1">Name</p>
            <p className="text-gray-800 text-xl font-semibold ">Masa Soudan</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium mb-1">Phone</p>
            <p className="text-gray-800 text-xl font-semibold ">
              +09 552 318 8311
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium mb-1">Email</p>
            <p className="text-gray-800 text-xl font-semibold ">
              masa.swdan@gmail.com
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium mb-1">Location</p>
            <p className="text-gray-800 text-xl font-semibold ">
              Istanbul, Turkey
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
