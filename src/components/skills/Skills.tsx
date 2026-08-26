"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills, SkillCategory } from "@/lib/data";
import clsx from "clsx";
import {
  Server,
  Layers,
  Code2,
  Shield,
  Wrench,
  Search,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const categories: { label: SkillCategory; icon: any }[] = [
  { label: "DevOps", icon: Server },
  { label: "Full-Stack", icon: Layers },
  { label: "Programming", icon: Code2 },
  { label: "Security & CTF", icon: Shield },
  { label: "Tools", icon: Wrench },
];

export default function Skills() {
  const [active, setActive] = useState<SkillCategory | "All">("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return skills.filter((s) => {
      const matchesCategory = active === "All" || s.category === active;
      const q = search.trim().toLowerCase();
      const matchesSearch =
        q.length === 0 ||
        s.name.toLowerCase().includes(q) ||
        s.highlight.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [active, search]);

  return (
    <section id="skills" className="section-pad relative">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Core Competencies"
            title="Skills &amp; Technology Stack"
            description="Languages, cloud tools, frameworks, and security analyzers I actively build and deploy with."
            align="left"
          />

          {/* Quick Skill Search */}
          <div className="relative w-full md:w-72">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40"
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search skill (e.g. Docker, Java, React)..."
              className="w-full rounded-full border border-white/10 bg-white/5 py-2.5 pl-9 pr-4 text-xs sm:text-sm text-white placeholder:text-white/30 focus:border-primary/60 focus:outline-none"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="mt-10 flex flex-wrap gap-2.5">
          <button
            onClick={() => setActive("All")}
            className={clsx(
              "rounded-full border px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-300",
              active === "All"
                ? "border-primary bg-primary/10 text-primary shadow-glow"
                : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"
            )}
          >
            All Skills ({skills.length})
          </button>

          {categories.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => setActive(label)}
              className={clsx(
                "inline-flex items-center gap-2 rounded-full border px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-300",
                active === label
                  ? "border-primary bg-primary/10 text-primary shadow-glow"
                  : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"
              )}
            >
              <Icon size={14} />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Skill Matrix Cards Grid */}
        <div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: i * 0.02 }}
                whileHover={{ y: -3 }}
                className="gradient-border glass-strong rounded-2xl p-5 flex flex-col justify-between hover:shadow-glow transition-all border border-white/10"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                      {skill.category}
                    </span>
                    <span className="font-mono text-xs font-bold text-primary">
                      {skill.level}%
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mt-2">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-white/60 mt-1.5 leading-relaxed">
                    {skill.highlight}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="mt-4 pt-3 border-t border-white/5">
                  <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
