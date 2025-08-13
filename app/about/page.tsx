"use client"

import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    year: '2015',
    title: 'Started at Rutgers University',
    description:
      'Studied Vocal Performance with dreams of becoming an opera singer. Despite scoliosis and the looming possibility of surgery, I was always finding new creative outlets and dreaming up ways to turn passions into business.',
    icon: '🎶',
  },
  {
    year: '2019',
    title: 'Graduated & Underwent Surgery',
    description:
      'Graduated from Rutgers and had spinal fusion surgery. During recovery, I discovered coding and slowly fell in love with it.',
    icon: '🎓',
  },
  {
    year: '2020',
    title: 'First Tech Role',
    description:
      'Joined NY Singing Teachers Association as a web engineer managing their WordPress site.',
    icon: '💻',
  },
  {
    year: '2021',
    title: 'Joined Digital Assets',
    description:
      'Built blockchain applications using Python and Django. My first deep dive into backend engineering.',
    icon: '🔗',
  },
  {
    year: '2022',
    title: 'Year of Reflection',
    description:
      'Took a break to reconnect with myself, my faith, and the people I love.',
    icon: '🧘‍♀️',
  },
  {
    year: '2023',
    title: 'EY Contract Role',
    description:
      'Worked with AI and data cleaning tools using Python and Pandas AI.',
    icon: '🤖',
  },
  {
    year: '2024',
    title: 'Art + Engineering',
    description:
      'Reignited my passion for art — engraving, painting, and sketching. Worked live engraving events for luxury brands. Joined Cookie Finance as a full-time engineer and moved to Syracuse.',
    icon: '🎨',
  },
  {
    year: '2025',
    title: 'New Chapter in NYC',
    description:
      'Became a dog mom and moved back to NYC to join Thurgood Industries as a founding engineer and UX designer.',
    icon: '🐾',
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
