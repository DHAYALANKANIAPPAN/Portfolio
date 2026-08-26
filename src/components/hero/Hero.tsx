"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, FileDown, Terminal, Sparkles, Server, Layers } from "lucide-react";
import { profile } from "@/lib/data";
import AuroraBackground from "./AuroraBackground";
import MagneticButton from "@/components/ui/MagneticButton";
import { useTypewriter } from "@/hooks/useTypewriter";

const ParticleField = dynamic(() => import("./ParticleField"), {
  ssr: false,
});

const roles = [
  "DevOps Specialist",
  "Full-Stack MERN Developer",
  "Java & Systems Engineer",
  "Python Automation Builder",
];

const nameLetters = "Dhayalan".split("");

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden pt-12 pb-16"
    >
      <AuroraBackground />
      <div className="absolute inset-0">
        <ParticleField />
      </div>

      <div className="container-px relative z-10 mx-auto w-full max-w-7xl pt-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-mono text-primary mb-6 backdrop-blur-md"
        >
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span>DevOps Specialist · Full-Stack MERN · {profile.location}</span>
        </motion.div>

        <h1 className="font-display text-5xl font-bold leading-[0.95] sm:text-7xl md:text-8xl lg:text-[7.2rem] text-white">
          <span className="sr-only">{profile.name}</span>
          <span aria-hidden="true" className="block overflow-hidden">
            {nameLetters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%", rotate: 6 }}
                animate={{ y: "0%", rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + i * 0.045,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block text-gradient"
              >
                {letter}
              </motion.span>
            ))}
          </span>
          <span aria-hidden="true" className="mt-1 block overflow-hidden">
            {"Kaniappan".split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%", rotate: 6 }}
                animate={{ y: "0%", rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5 + i * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block text-white"
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-6 flex h-8 items-center font-mono text-base text-white/80 sm:text-xl"
        >
          <span className="mr-2 text-primary">{">"}</span>
          <span>{typed}</span>
          <span className="ml-1 inline-block h-6 w-[2px] animate-pulse-glow bg-primary" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.25 }}
          className="mt-6 max-w-2xl text-base text-white/70 sm:text-lg leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="#projects" variant="primary">
            Explore Projects
          </MagneticButton>
          <MagneticButton href="#resume" variant="ghost">
            <FileDown size={16} className="text-primary" /> Resume &amp; Certs
          </MagneticButton>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="rounded-full border border-white/10 p-3 text-white/70 transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-full border border-white/10 p-3 text-white/70 transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
          >
            <Linkedin size={18} />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5 text-white/40 hover:text-primary transition-colors"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.25em]">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}
