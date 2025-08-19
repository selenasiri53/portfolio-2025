"use client"

// import { AppleCardsCarouselDemo } from "./aceternity/AppleCards";
import Hero from "./components/sections/Hero";
import Contact from "./components/sections/Contact";
import { TimelineDemo } from "./components/sections/Story";
import { LanguageSlider } from "./components/Slider";
import useCustomCursor from "./useCustomCursor";
import CustomCursor from "./useCustomCursor";
import { AppleCardsCarouselDemo } from "./aceternity/AppleCards";

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
        <AppleCardsCarouselDemo />
      </div>
      <div id="Contact">
         <Contact />
      </div>
    </div>
  );
}
