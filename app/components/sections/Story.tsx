import React from "react";
import { Timeline } from "../../aceternity/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2019 🎓 Graduated Rutgers University & Learned to Code",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I started my software development journey after graduating Rutgers University in 2019, inspired by several coders in my family. With an arts background, I sought opportunities to be creative in the digital space while helping companies succeed.
          </p>
        </div>
      ),
    },
    {
      title: "2020 - 2022 👩🏻‍💻 Freelancing to My First Tech Role",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I built websites for local shops and businesses, then joined Digital Assets as a backend Python engineer. I contributed to real-time stock applications and supported new FinTech features.
          </p>
        </div>
      ),
    },
    {
      title: "2023 🤖 Machine Learning Integration at Ernst & Young",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Worked with AI and data-cleaning tools using Python, Django, and Pandas AI. Automated 3,000 employee data logs in under 1.8 seconds—36,000 logs annually—reducing manual labor and improving data accuracy.
          </p>
        </div>
      ),
    },
    {
      title: "2024 🍪 Cookie Finance & Moving to Syracuse, NY",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built dashboards for Cookie Finance, creating both user-facing and admin tools for accounting software. Focused on improving workflow efficiency, data visibility, and turning complex financial information into intuitive insights.
          </p>
        </div>
      ),
    },
    {
      title: "2025 🏗️ New Chapter in NYC",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Joined Thurgood Industries as a founding engineer and UX designer. Developed their enterprise landing page within 3 weeks, advocating for careers in skilled trades for underserved communities and implementing a Spanish-language feature for accessibility.
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
