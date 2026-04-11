"use client";

import { useRef } from "react";
import { projectsData, mySeniorLevelProjects } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { AiOutlineGithub } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";

type ProjectProps = (typeof projectsData)[number] | (typeof mySeniorLevelProjects)[number]

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  projectLinks,
}: ProjectProps) {

  const hasfrontendBackendAndLiveLinks = projectLinks.length === 3;
  const hasFullStackAndLiveLinks = projectLinks.length === 2;


  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);


  let renderProjectLinks =
    <div className="flex flex-1 flex-col justify-center items-center ">
      <a
        href={projectLinks[0]}
        className="flex flex-col items-center rounded-xl  focus:scale-110 hover:scale-110  hover:bg-gray-400 hover:pr-1 hover:pl-1  active:scale-105 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineGithub />
        <span className="">View code</span>
      </a>
    </div>

  if (hasfrontendBackendAndLiveLinks) {
    renderProjectLinks = <div className="flex flex-1 flex-col justify-around items-center sm:flex-row sm:justify-between ">
      <a
        href={projectLinks[0]}
        className="flex flex-col items-center rounded-xl   focus:scale-110 hover:scale-110 hover:bg-gray-400 hover:pr-1 hover:pl-1 active:scale-105 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineGithub />
        <span className="">Frontend code</span>
      </a>
      <a
        href={projectLinks[1]}
        className="flex flex-col items-center rounded-xl  focus:scale-110 hover:scale-110  hover:bg-gray-400 hover:pr-1 hover:pl-1  active:scale-105 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineGithub />
        <span className="">Backend code</span>
      </a>
      <a
        href={projectLinks[2]}
        className="flex flex-col items-center rounded-xl   focus:scale-110 hover:scale-110  hover:bg-gray-400 hover:pr-1 hover:pl-1  active:scale-105 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGlobe />
        <span className="">View live</span>
      </a>
    </div>
  }

  if (hasFullStackAndLiveLinks) {
    renderProjectLinks = <div className="flex flex-1 flex-col justify-around items-center  sm:flex-row sm:justify-between">
      <a
        href={projectLinks[0]}
        className="flex flex-col items-center rounded-xl focus:scale-110 hover:scale-110  hover:bg-gray-400 hover:pr-1 hover:pl-1  active:scale-105 transition "
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineGithub />
        <span className="">FullStack code</span>
      </a>
      <a
        href={projectLinks[1]}
        className="flex flex-col items-center rounded-xl focus:scale-110 hover:scale-110  hover:bg-gray-400 hover:pr-1 hover:pl-1  active:scale-105 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGlobe />
        <span className="">View live</span>
      </a>
    </div>
  }


  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="flex mb-3 sm:mb-3 last:mb-0"
    >
      <section className="flex bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-3 relative sm:h-[20rem] hover:bg-gray-200 transition  dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="flex-1 pt-4 pb-7 px-5 sm:pl-3 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full ">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col flex-1 mt-8 mb-3">
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="flex-grow object-contain hidden sm:block right-2 sm:max-w-[100%] sm:max-h-[100%] shadow-2xl transition mb-2"
          />

          {renderProjectLinks}
        </div>
      </section >
    </motion.div >
  );
}
