"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  ChevronDown,
  Layers,
  Clock,
  Trophy,
  Wrench,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Project } from "@/lib/data";
import { useTilt } from "@/hooks/useTilt";

const statusColor: Record<Project["status"], string> = {
  "In Progress": "text-accent border-accent/40 bg-accent/10",
  Live: "text-primary border-primary/40 bg-primary/10",
  Completed: "text-secondary border-secondary/40 bg-secondary/10",
  "Production Ready": "text-accent border-accent/40 bg-accent/10",
};

export default function ProjectCard({
  project,
  index,
  onTagClick,
}: {
  project: Project;
  index: number;
  onTagClick?: (tag: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [activeImage, setActiveImage] = useState(project.cover);
  const { ref, onMouseMove, onMouseLeave } = useTilt(6);

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="gradient-border glass-strong relative overflow-hidden rounded-3xl border border-white/10"
    >
      <div className="grid gap-0 lg:grid-cols-12">
        {/* Preview Graphic / Gallery (7 Cols on desktop) */}
        <div
          ref={ref}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          className="relative col-span-12 lg:col-span-7 aspect-[16/10] overflow-hidden transition-transform duration-300 ease-out bg-[#060a1d]"
        >
          <Image
            src={activeImage}
            alt={`${project.name} preview`}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover transition-opacity duration-300"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-90 lg:opacity-60" />

          {/* Badges on top */}
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <span
              className={`rounded-full border px-3 py-1 text-[11px] font-medium font-mono ${statusColor[project.status]}`}
            >
              {project.status}
            </span>
            {project.featured && (
              <span className="flex items-center gap-1 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-mono text-white/90 backdrop-blur-md">
                <Sparkles size={11} className="text-primary" /> Featured
              </span>
            )}
            <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] font-mono text-white/70 backdrop-blur-md">
              {project.category}
            </span>
          </div>

          {/* Metric Highlights Pill Ribbon (Floating at bottom of preview) */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="absolute bottom-4 left-4 right-4 hidden sm:flex items-center gap-2 overflow-x-auto rounded-2xl border border-white/15 bg-[#050816]/80 p-2.5 backdrop-blur-xl">
              {project.metrics.map((m, mIdx) => (
                <div
                  key={mIdx}
                  className="flex-1 min-w-[90px] rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-center"
                >
                  <p className="font-mono text-[10px] uppercase text-white/50">{m.label}</p>
                  <p className="font-mono text-xs font-bold text-primary">{m.value}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Content (5 Cols on desktop) */}
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-between p-6 sm:p-8">
          <div>
            <div className="flex items-center justify-between">
              <span className="eyebrow text-primary text-[10px]">
                {project.category} Suite
              </span>
              <div className="flex items-center gap-1.5 text-xs text-white/40 font-mono">
                <Clock size={13} />
                <span>{project.timeline}</span>
              </div>
            </div>

            <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl text-white">
              {project.name}
            </h3>

            <p className="mt-2 text-sm text-white/70 leading-relaxed">
              {project.tagline}
            </p>

            {/* Mobile Metric Pill Ribbon */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="mt-4 flex sm:hidden items-center gap-2 overflow-x-auto">
                {project.metrics.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    className="flex-1 min-w-[80px] rounded-xl border border-white/10 bg-white/5 px-2.5 py-1.5 text-center"
                  >
                    <p className="font-mono text-[9px] uppercase text-white/50">{m.label}</p>
                    <p className="font-mono text-xs font-bold text-primary">{m.value}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <button
                  key={tech}
                  onClick={() => onTagClick && onTagClick(tech)}
                  className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-white/70 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all"
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          {/* Action Links & Case Study Toggle */}
          <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-white/10 pt-5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 transition-colors hover:text-primary"
              >
                <Github size={15} /> Source Repo
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-accent transition-colors hover:text-white"
              >
                <ExternalLink size={15} /> Live Demo
              </a>
            )}
            <button
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
            >
              <span>{expanded ? "Hide Details" : "Case Study"}</span>
              <motion.span animate={{ rotate: expanded ? 180 : 0 }}>
                <ChevronDown size={14} />
              </motion.span>
            </button>
          </div>
        </div>
      </div>

      {/* Expandable Case Study Deep Dive */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/10 bg-[#070c22]/90"
          >
            <div className="grid gap-8 p-6 sm:p-10 md:grid-cols-2">
              <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-5">
                <span className="eyebrow text-primary text-[10px]">Architecture Overview</span>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  {project.description}
                </p>
              </div>

              {/* Challenges */}
              <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-5">
                <h4 className="flex items-center gap-2 font-display text-sm font-semibold text-white">
                  <Layers size={16} className="text-secondary" /> Key Challenges &amp; Constraints
                </h4>
                <ul className="mt-3 space-y-2">
                  {project.challenges.map((c) => (
                    <li
                      key={c}
                      className="border-l-2 border-secondary/50 pl-3 text-xs sm:text-sm text-white/70"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <h4 className="flex items-center gap-2 font-display text-sm font-semibold text-white">
                  <Wrench size={16} className="text-primary" /> Engineering Solutions
                </h4>
                <ul className="mt-3 space-y-2">
                  {project.solutions.map((s) => (
                    <li
                      key={s}
                      className="border-l-2 border-primary/50 pl-3 text-xs sm:text-sm text-white/70"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div className="rounded-2xl border border-accent/20 bg-accent/5 p-5">
                <h4 className="flex items-center gap-2 font-display text-sm font-semibold text-white">
                  <Trophy size={16} className="text-accent" /> Verified Achievements
                </h4>
                <ul className="mt-3 space-y-2">
                  {project.achievements.map((a) => (
                    <li
                      key={a}
                      className="border-l-2 border-accent/50 pl-3 text-xs sm:text-sm text-white/70"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Features */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="flex items-center gap-2 font-display text-sm font-semibold text-white">
                  <Zap size={16} className="text-primary" /> Core Capabilities
                </h4>
                <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-xs text-white/80"
                    >
                      ✓ {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
