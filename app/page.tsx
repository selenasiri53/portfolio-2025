"use client"

import { AppleCardsCarouselDemo } from "./aceternity/AppleCards";
import Hero from "./components/sections/Hero";
import Contact from "./components/sections/Contact";
import { TimelineDemo } from "./components/sections/Story";
import { LanguageSlider } from "./components/Slider";
import useCustomCursor from "./useCustomCursor";

export default function Home() {
  useCustomCursor();

  return (
    <div>
      <style>
        {`
          /* Apply custom cursor globally and for all states */
          html, body, *, button, a, input,
          .disabled, a:disabled, input:disabled {
            cursor: url('/pinkcircle.svg'), auto;
          }

          button:hover, a:hover, input:hover, .hover:hover {
            cursor: url('/whitecircle.svg'), auto;
          }

          body.red-cursor * {
            cursor: url('/redcircle.svg'), auto;
          }
        `}
      </style>
      <div id="Home">
        <Hero />
        <LanguageSlider />
      </div>
      <div id="Story">
        <TimelineDemo />
      </div>
      <div id="Projects">
        <AppleCardsCarouselDemo />
      </div>
      <div id="Contact">
         <Contact />
      </div>
     
    </div>
  );
}
