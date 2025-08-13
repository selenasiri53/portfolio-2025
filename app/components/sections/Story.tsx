import React from "react";
import { Timeline } from "../../aceternity/ui/timeline"
import Link from "next/link";

export function TimelineDemo() {
  const data = [
    {
      title: "Spring of '19",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Graduated Rutgers University with an art degree. Despite scoliosis and the looming possibility of surgery, I was always finding new creative outlets and dreaming up ways to turn passions into business. Created my first <Link href="https://www.selenasiri.com/studio-art"><span className="text-rose-400 underline">artist's website</span></Link> for studio art.
          </p>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          After a 10+ year battle with scoliosis, I had the privilege of receiving treatment and undergoing spinal fusion surgery.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          During recovery, I discovered coding and slowly fell in love with it.
          </p>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Joined NY Singing Teachers Association as a web engineer managing their WordPress site.
          </p>
        </div>
      ),
    },
    {
        title: "2021",
        content: (
          <div>
            <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Started a new role at Digital Assets, as a Junior Backend Engineer. Built blockchain applications using Python and Django. My first deep dive into backend engineering.
            </p>
          </div>
        ),
      },
    {
        title: "2022",
        content: (
          <div>
            <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Took a break to reconnect with myself, my faith, and the people I love.
            </p>
          </div>
        ),
      },
    //   Worked with AI and data cleaning tools using Python and Pandas AI.
    {
        title: "2023",
        content: (
          <div>
            <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Led a new AI business capability at Ernst & Young to automate time-consuming manual labor. Saved the information team time, money and resources, allowing talented tenured employees to focus their attention on less tedious work that brought them greater joy. Worked with new data cleaning tools using Python, Django and Pandas AI.
            </p>
          </div>
        ),
      },
      {
        title: "2024",
        content: (
          <div>
            <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Reignited my passion for art — engraving, painting, and sketching. Worked live engraving events for luxury perfume brands. Joined Cookie Finance as a full-time engineer and moved to Syracuse. Found opportunities to work closer with UX and Figma designs to deliver modern, animated frontend sites. 
            </p>
          </div>
        ),
      },
    {
        title: "2025",
        content: (
          <div>
            <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Moved back to NYC to join Thurgood Industries as a founding engineer and UX designer. Continued working across the stack in end-to-end development, using Next.js, React, Framer motion, Python, Django, PostgreSQL and Docker with Kubernetes.
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
