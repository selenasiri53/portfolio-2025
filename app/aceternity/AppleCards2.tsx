"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// ---- Types ----
export type CardItem = {
  title: string;
  src: string;
  link?: string;
};

// ---- Carousel ----
export default function ProjectCardCarousel({ items }: { items: CardItem[] }) {
  return (
    <section className="w-full py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <header className="mb-6 md:mb-16 flex items-center justify-between">
          <h2 className="text-2xl md:text-5xl font-semibold tracking-tight text-neutral-600">
            Projects
          </h2>
        </header>

        {/* Scrollable carousel */}
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
          {items.map((card, idx) => (
            <motion.div
              key={`${card.title}-${idx}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative snap-center shrink-0 w-[300px] sm:w-[360px] md:w-[420px] rounded-3xl overflow-hidden shadow-xl group"
              style={{ height: "650px" }} // 👈 2.5x taller cards
            >
              {/* Image */}
              <Image
                src={card.src}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 80vw, (max-width: 1280px) 40vw, 30vw"
                priority={idx < 2}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 transition group-hover:opacity-100 flex items-center justify-center">
                {card.link && (
                  <Link
                    href={card.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black shadow-lg transition hover:bg-gray-100"
                  >
                    Visit site
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Example Home Page ----
export function HomePage() {
  const data: CardItem[] = [
    {
      title: "Thurgood Industries",
      src: "/projectThumbnails/thurgood-mobile.png",
      link: "https://thurgood.work",
    },
    {
      title: "HealthTech Onboarding Platform",
      src: "/projectThumbnails/zealthy.png",
      link: "https://zealthy-selena-siris-projects.vercel.app",
    },
    {
      title: "The Clonard Bar",
      src: "/projectThumbnails/clonard.png",
      link: "https://www.theclonardbar.com",
    },
    {
      title: "Disney+ Recreation",
      src: "/projectThumbnails/disney.png",
      link: "https://disney-clone-selena-siris-projects.vercel.app",
    },
    {
      title: "Analytics Dashboard",
      src: "/projectThumbnails/dashboard.png",
      link: "https://next-s-dashboard-selena-siris-projects.vercel.app/dashboard",
    },
  ];

  return <ProjectCardCarousel items={data} />;
}
