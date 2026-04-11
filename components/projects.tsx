"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData, mySeniorLevelProjects } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">

      <SectionHeading>My recent - senior level projects</SectionHeading>
      <div>
        {mySeniorLevelProjects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>

      <div className="mt-[110px]"></div>

      <SectionHeading>My older projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
