"use client";

import { useMemo, useState } from "react";
import { Search, Sparkles, Filter, X, Cpu, Shield, Server, Globe, FolderGit2, ExternalLink, Github } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects, Project, profile } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import clsx from "clsx";

const categories: (Project["category"] | "All")[] = [
  "All",
  "DevOps",
  "Full-Stack",
  "Python & Automation",
  "Java & Systems",
  "Security & Research",
];

export default function Projects() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  function handleTagClick(tag: string) {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }
  }

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        category === "All" || p.category === category;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        q.length === 0 ||
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.stack.some((s) => s.toLowerCase().includes(q));
      const matchesTag =
        !selectedTag ||
        p.stack.some((s) => s.toLowerCase() === selectedTag.toLowerCase());
      return matchesCategory && matchesQuery && matchesTag;
    });
  }, [query, category, selectedTag]);

  return (
    <section id="projects" className="section-pad relative">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Software &amp; Systems Showcase"
            title="Projects, codebases &amp; systems"
            description="All codebases from my official GitHub repositories — featuring DevOps automation, Java OOP systems, MERN full-stack apps, and Python tools."
            align="left"
          />

          {/* Direct Monorepo CTA Button */}
          <a
            href={profile.githubProjectsRepo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-primary/40 bg-primary/10 px-5 py-3 text-xs font-mono text-primary hover:bg-primary/20 hover:border-primary transition-all shadow-glow flex-shrink-0"
          >
            <FolderGit2 size={16} />
            <span>View Full PROJECTS Repo</span>
            <ExternalLink size={13} className="text-primary/70" />
          </a>
        </div>

        {/* Filter and Search Bar */}
        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between border-y border-white/10 py-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={clsx(
                  "rounded-full border px-4 py-1.5 text-xs font-medium transition-all sm:text-sm",
                  category === cat
                    ? "border-primary bg-primary/10 text-primary shadow-glow"
                    : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="flex items-center gap-3">
            {selectedTag && (
              <div className="flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs text-primary font-mono">
                <span>Tag: {selectedTag}</span>
                <button
                  onClick={() => setSelectedTag(null)}
                  className="hover:text-white"
                  aria-label="Clear tag filter"
                >
                  <X size={13} />
                </button>
              </div>
            )}

            <div className="relative w-full sm:w-72">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40"
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Java, Python, React, Ansible..."
                className="w-full rounded-full border border-white/10 bg-white/5 py-2 pl-9 pr-4 text-xs sm:text-sm text-white placeholder:text-white/30 focus:border-primary/60 focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Project Cards List */}
        <div className="mt-12 flex flex-col gap-10">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              onTagClick={handleTagClick}
            />
          ))}

          {filtered.length === 0 && (
            <div className="rounded-3xl border border-white/10 bg-white/5 py-20 text-center">
              <p className="text-base text-white/60 font-medium">
                No projects matched your search criteria.
              </p>
              <button
                onClick={() => {
                  setCategory("All");
                  setQuery("");
                  setSelectedTag(null);
                }}
                className="mt-4 rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-xs text-primary hover:bg-primary/20 transition-all font-mono"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
