import React from "react";
import { Timeline } from "../../aceternity/ui/timeline"
import Link from "next/link";

export function TimelineDemo() {
  const data = [
    {
      title: "2019",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Graduated Rutgers University. I had the privilege of undergoing spinal fusion surgery. During recovery, I discovered coding and gradually fell in love with it.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          I enrolled in an HTML, CSS and JavaScript course at Middlesex County college and continued completing online certifications in JavaScript, React/Redux, React Hooks, and Three.js. I also familiarized myself with architecting data models, and end-to-end development for full stack development. 
          </p>
        </div>
      ),
    },
    {
        title: "2020 - 2021",
        content: (
          <div>
            <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I joined the NY Singing Teachers Association as a web engineer managing their WordPress website. Following this, I led real-time blockchain applications using Python and Django at Digital Assets. As a result, it supported trust within the company by empowering banks with an easy to navigate, analytics system for their clients. 
            </p>
          </div>
        ),
      },
    {
        title: "2023",
        content: (
          <div>
            <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Led a new AI business capability at Ernst & Young to automate time-consuming manual labor. Allowed team talent to focus on more impactful, purpose-filled work. Delivered new data cleaning tools using Python, Django and Pandas AI.
            </p>
          </div>
        ),
      },
      {
        title: "2024",
        content: (
          <div>
            <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Upskilled my frontend abilities using Three.js, Framer Motion, and Spline for RWD. Joined Cookie Finance as a full-time engineer and moved to Syracuse. Found opportunities to work closer with UX and Figma designs to deliver modern, animated frontend sites. 
            </p>
          </div>
        ),
      },
    {
        title: "2025",
        content: (
          <div>
            <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Moved back to NYC to join Thurgood Industries as a founding engineer and UX designer. Continued end-to-end development across the stack, using Next.js, React, Framer motion, Python, Django, PostgreSQL and Docker with Kubernetes.
            </p>
          </div>
        ),
      },
];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

// Photo grid of 4
{/* <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div> */}
