"use client";

import React from "react";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="h-auto py-16 flex flex-col justify-center items-center max-w-7xl mx-auto px-4 bg-indigo-100 rounded-4xl mb-24">
      <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-8">
        Contact
      </h2>

      <div className="flex flex-col space-y-4 text-lg md:text-xl text-neutral-800 hover:text-neutral-600">
        <p>Email: 
          <a
            href="mailto:selenasiri53@gmail.com"
            className="ml-2 underline hover:text-amber-300 transition-colors"
          >
            selenasiri53@gmail.com
          </a>
        </p>

        <div className="flex space-x-6 mt-2">
          <a
            href="https://www.linkedin.com/in/selena-siri-0a5532121/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-300 transition-colors"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://www.github.com/selenasiri53"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-300 transition-colors"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.selenasiri.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-300 transition-colors"
          >
            <FaGlobe size={28} />
          </a>
        </div>
      </div>
    </div>
  );
}
