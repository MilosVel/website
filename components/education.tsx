"use client"

import React from "react";
import SectionHeading from "./section-heading";
import "react-vertical-timeline-component/style.min.css";
import { educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Education() {
  const { ref } = useSectionInView("Education");
  const { theme } = useTheme();

  return (
    <section id="education" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My education</SectionHeading>

      <div className="flex bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <ol>
          {educationData.map((item, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row justify-between"
              style={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "0.5rem 2rem",
              }}
            >
              <div className="flex-1 font-normal !mt-0 p-2 border-b border-gray-300 dark:border-gray-600">
                <p className="mb-1 text-lg">
                  {item.title} at {item.faculty}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {item.data}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
