"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import Link from "next/link";

export default function About() {
  const { ref } = useSectionInView("About");
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Full-Stack Developer with 6+ years of experience building modern, scalable web applications using
        JavaScript, TypeScript, React, Next.js, Node.js, Express.js, Python, and FastAPI. Proven track record
        of delivering production systems for US-based companies, used by 10+ enterprise clients.
      </p>
      <p className="mb-3">
        I enjoy working across the entire stack, from responsive UIs to designing robust backend architectures
        and efficient database systems, delivering end-to-end solutions that are performant, maintainable, and user-focused.
      </p>
      <p className="mb-3">
        Beyond traditional web development, I build AI-powered backend services such as chat agents,
        web search agents, RAG and MCP applications — designing APIs that connect LLMs with structured data sources
        to deliver accurate, context-aware responses.
      </p>

      <p className="mb-3">
        Throughout my career, I've contributed to projects across various domains:
        fintech, SaaS platforms, mobile development, and data-driven business applications — always translating complex requirements into
        clean, maintainable solutions.
        My portfolio is showcased in {' '}
        <Link
          href="#projects"
          className="underline font-medium"
          onClick={() => {
            setActiveSection("Projects");
            setTimeOfLastClick(Date.now());
          }}
        ><b>project section</b>  </Link> {' '}  below.
      </p>

      <p className="mb-3">Tech I work with: JavaScript, TypeScript, React, Next.js, Node.js, Express/Fastify,
        Python, FastAPI, PostgreSQL, MySQL, MongoDB, Docker, and more.</p>

      <p className="mb-3"> I care about clean architecture, performance, and building products that actually solve problems.</p>

      <p className="mb-3">
        🚀 Open to remote B2B, freelance, contract, full-time, or part-time opportunities. <Link
          href="#contact"
          className="underline font-medium"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >Feel free to reach out anytime</Link> — let's work together to bring your ideas to life. </p>

    </motion.section>
  );
}
