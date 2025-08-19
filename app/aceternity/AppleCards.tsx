"use client";

import React from "react";
import { Carousel, Card, CardItem } from "./ui/apple-cards-carousel";
import Image from "next/image";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 bg-black">
      <h2 className="max-w-7xl pl-4 mx-auto text-3xl md:text-5xl font-bold text-rose-300 dark:text-neutral-200 font-sans">
        Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...Array(3)].map((_, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              The first rule of Apple club is that you boast about Apple club.
            </span>{" "}
            Keep a journal, jot down a grocery list, and take amazing notes.
          </p>
          <Image
            src="https://assets.aceternity.com/macbook.png"
            alt="Macbook mockup from Aceternity UI"
            height={500}
            width={500}
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
          />
        </div>
      ))}
    </>
  );
};

const data: CardItem[] = [
  {
    category: "Next.js, TypeScript, Aceternity UI",
    title: "Thurgood Industries",
    src: "/projectThumbnails/thurgood-mobile.png",
    content: <DummyContent />,
    link: "https://thurgood.work",
  },
  {
    category: "Next.js, TypeScript, Prisma, PostgreSQL",
    title: "HealthTech Onboarding Platform",
    src: "/projectThumbnails/zealthy.png",
    content: <DummyContent />,
    link: "https://zealthy-selena-siris-projects.vercel.app",
  },
  {
    category: "Next.js, TypeScript, Tailwind",
    title: "Modern Landing Page for The Clonard Bar, BK",
    src: "/projectThumbnails/clonard.png",
    content: <DummyContent />,
    link: "https://www.theclonardbar.com",
  },
  {
    category: "Next.js, TypeScript, Tailwind",
    title: "A Recreation of Disney+",
    src: "/projectThumbnails/disney.png",
    content: <DummyContent />,
    link: "https://disney-clone-selena-siris-projects.vercel.app",
  },
  {
    category: "Next.js, TypeScript, Tailwind",
    title: "Next.js Management & Analytics Dashboard",
    src: "/projectThumbnails/dashboard.png",
    content: <DummyContent />,
    link: "https://next-s-dashboard-selena-siris-projects.vercel.app/dashboard",
  },
];
