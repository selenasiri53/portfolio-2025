"use client"

import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    year: '2019',
    title: 'Graduated Rutgers University & Learned to Code',
    description:
      'I started my software development journey after graduating Rutgers University in 2019, after being inspired by several coders in my family. With an arts background I was looking for opportunities to be creative in the digital space while helping companies succeed.',
    icon: '🎓',
  },
  {
    year: '2020 - 2022',
    title: 'Freelancing to My First Tech Role',
    description:
      'I started to build websites for local shops and businesses in my neighborhood, and later found the opportunity to work as a backend Python engineer at Digital Assets. From there I have had the chance to contribute to real-time stock applications, and support new features in the FinTech spaces.',
    icon: '👩🏻‍💻',
  },
  {
    year: '2023',
    title: 'Machine Learning Integration at Ernst & Young',
    description:
      'From there, I worked with AI and data-cleaning tools at EY, leveraging Python, Pandas AI, and machine learning technologies to streamline workflows. I implemented automated processes that formatted 3,000 employee data logs in under 1.8 seconds—36,000 logs annually—dramatically reducing manual labor and improving data accuracy.',
    icon: '🤖',
  },
  {
    year: '2024',
    title: 'Cookie Finance & Moving to Syracuse, NY',
    description:
      'From there, I had the chance to build dashboards for Cookie Finance, creating both user-facing and admin tools for their accounting software. I focused on streamlining workflows, improving data visibility, and turning complex financial information into intuitive, actionable insights.',
    icon: '🍪',
  },
  {
    year: '2025',
    title: 'New Chapter in NYC',
    description:
      'Moved back to NYC to join Thurgood Industries as a founding engineer and UX designer. Developed my first enterprise landing page within my first 3 weeks to establish the companys brand identity and advocate for careers in the skilled trades for underserved communities. Encouraged a Spanish language feature on the website, to support the demographic and create greater accessibility amongst students and employers in the industry.',
    icon: '🏗️',
  },
];

export default function AboutMeTimeline() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">My Journey</h2>
      <div className="relative border-l-4 border-amber-300 ml-4">
        {timelineData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="mb-10 ml-4 relative"
          >
            <div className="absolute -left-6 top-1 text-2xl">{item.icon}</div>
            <h3 className="text-xl font-semibold text-teal-950">{item.year} – {item.title}</h3>
            <p className="text-gray-700 mt-1">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
