"use client";

import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";

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
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

// Next.js, TypeScript, Framer Motion
// Thurgood Enterprise App for Workers
const data = [
  {
    category: "",
    title: "",
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
    link: "https://www.theclonardbar.com"
  },
// https://disney-clone-selena-siris-projects.vercel.app
{
  category: "Next.js, TypeScript, Tailwind",
  title: "A Recreation of Disney +",
  src: "/projectThumbnails/disney.png",
  content: <DummyContent />,
  link: "https://disney-clone-selena-siris-projects.vercel.app"
},
{
  category: "Next.js, TypeScript, Tailwind",
  title: "Next.js Management & Analytics Dashboard",
  src: "/projectThumbnails/dashboard.png",
  content: <DummyContent />,
  link: "https://next-s-dashboard-selena-siris-projects.vercel.app/dashboard"
},
  // {
  //   category: "Hiring",
  //   title: "Hiring for a Staff Software Engineer",
  //   src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   content: <DummyContent />,
  // },
];
