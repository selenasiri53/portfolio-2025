"use client"

// import { AppleCardsCarouselDemo } from "./aceternity/AppleCards";
import Hero from "./components/sections/Hero";
import Contact from "./components/sections/Contact";
import { TimelineDemo } from "./components/sections/Story";
import { LanguageSlider } from "./components/Slider";
import useCustomCursor from "./useCustomCursor";
import CustomCursor from "./useCustomCursor";
import ProjectCardGrid, { CardItem } from "./aceternity/AppleCards2";

const data: CardItem[] = [
  {
    category: "Next.js, TypeScript, Aceternity UI",
    title: "Thurgood Industries",
    src: "/projectThumbnails/thurgood-mobile.png",
    content: "",
    link: "https://thurgood.work",
  },
  {
    category: "Next.js, TypeScript, Prisma, PostgreSQL",
    title: "HealthTech Onboarding Platform",
    src: "/projectThumbnails/zealthy.png",
    content: "",
    link: "https://zealthy-selena-siris-projects.vercel.app",
  },
  {
    category: "Next.js, TypeScript, Tailwind",
    title: "Modern Landing Page for The Clonard Bar, BK",
    src: "/projectThumbnails/clonard.png",
    content: "",
    link: "https://www.theclonardbar.com",
  },
  {
    category: "Next.js, TypeScript, Tailwind",
    title: "A Recreation of Disney +",
    src: "/projectThumbnails/disney.png",
    content: "",
    link: "https://disney-clone-selena-siris-projects.vercel.app",
  },
  {
    category: "Next.js, TypeScript, Tailwind",
    title: "Next.js Management & Analytics Dashboard",
    src: "/projectThumbnails/dashboard.png",
    content: "",
    link: "https://next-s-dashboard-selena-siris-projects.vercel.app/dashboard",
  },
];

export default function Home() {
  useCustomCursor();

  return (
    <div>
       <CustomCursor />
      <div id="Home">
        <Hero />
        <LanguageSlider />
      </div>
      <div id="Story">
        <TimelineDemo />
      </div>
      <div id="Projects">
        {/* <AppleCardsCarouselDemo /> */}
        <ProjectCardGrid items={data} heading="My Projects" />
      </div>
      <div id="Contact">
         <Contact />
      </div>
    </div>
  );
}
