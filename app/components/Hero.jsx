"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineViewGrid, HiDownload } from "react-icons/hi";
const Hero = () => {
  const icons = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "assets/langchain-color.svg",
    "assets/pytorch-2.svg",
    "assets/tensorflow-2.svg",
    "assets/opencv-svgrepo-com.svg",
    "assets/next-js.svg",
    "assets/react-2.svg",
    "assets/github-icon-2.svg",
    "assets/mysql-logo-pure.svg",
  ];
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  return (
    <section>
      <div className="max-w-2xl m-auto flex flex-col items-center justify-center text-center pt-24 md:pt-36 px-4 md:px-0 pb-8 overflow-hidden">
        <div>
          <img
            src="assets/profile2.png"
            alt="profile"
            className="rounded-full mb-4"
            width={150}
            height={150}
            priority="true"
          />
        </div>
        <h3 className="text-lg md:text-xl font-semibold flex items-center justify-center gap-2">
          I'm Masa Soudan
          <span className="inline-block">👋</span>
        </h3>
        <h1 className="text-3xl md:text-5xl font-semibold mt-3 leading-tight">
          AI Research Assistant <br className="md:hidden" />
          and Software developer
        </h1>
        <div className="relative my-6 md:my-8 w-full mask-r-from-50% mask-l-from-50% overflow-hidden">
          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear",
            }}
          >
            {icons.concat(icons).map((icon, index) => (
              <Image
                className="md:w-[50px] md:h-[50px]"
                src={icon}
                width={40}
                height={40}
                key={index}
                alt={`icon-${index + 1}`}
              />
            ))}
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <a
            href="#projects"
            className="custom-gradient  w-full md:w-auto py-3 px-8 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300"
          >
            My Projects <HiOutlineViewGrid className="text-lg" />
          </a>
          <a
            href="/assets/Masa_soudan_CV.pdf"
            download
            className=" w-full md:w-auto py-3 px-8 rounded-full font-semibold border border-content/20 hover:border-content/40 hover:shadow-sm transition-colors duration-300 flex items-center justify-center gap-2"
          >
            My Resume <HiDownload className="text-lg" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
