import { AppleCardsCarouselDemo } from "./aceternity/AppleCards";
import Hero from "./components/sections/Hero";
import Contact from "./components/sections/Contact";
import { TimelineDemo } from "./components/sections/Story";

export default function Home() {
  return (
    <div>
      <div id="Home">
        <Hero />
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
