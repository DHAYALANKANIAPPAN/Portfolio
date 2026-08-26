"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  FileText,
  Terminal,
  FolderGit2,
  Cpu,
  Mail,
  Github,
  Linkedin,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Copy,
  Award,
} from "lucide-react";
import { projects, profile } from "@/lib/data";
import { useToast } from "./Toast";

interface ActionItem {
  id: string;
  title: string;
  category: "Navigation" | "Projects" | "Resume & Certs" | "Social";
  icon: any;
  action: () => void;
  shortcut?: string;
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIdx, setSelectedIdx] = useState(0);
  const { showToast } = useToast();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const items: ActionItem[] = useMemo(() => {
    const navItems: ActionItem[] = [
      {
        id: "nav-about",
        title: "About Me & DevOps Journey",
        category: "Navigation",
        icon: Terminal,
        action: () => {
          window.location.hash = "#about";
          setOpen(false);
        },
      },
      {
        id: "nav-projects",
        title: "Explore All Projects & Repositories",
        category: "Navigation",
        icon: FolderGit2,
        action: () => {
          window.location.hash = "#projects";
          setOpen(false);
        },
      },
      {
        id: "nav-skills",
        title: "Skills & Core Competencies",
        category: "Navigation",
        icon: Cpu,
        action: () => {
          window.location.hash = "#skills";
          setOpen(false);
        },
      },
      {
        id: "nav-resume",
        title: "Verified Certifications, CTFs & Resume",
        category: "Resume & Certs",
        icon: Award,
        action: () => {
          window.location.hash = "#resume";
          setOpen(false);
        },
      },
      {
        id: "nav-contact",
        title: "Contact & Direct Email",
        category: "Navigation",
        icon: Mail,
        action: () => {
          window.location.hash = "#contact";
          setOpen(false);
        },
      },
      {
        id: "action-copy-email",
        title: `Copy Email (${profile.email})`,
        category: "Resume & Certs",
        icon: Copy,
        action: () => {
          navigator.clipboard.writeText(profile.email);
          showToast(`Copied ${profile.email} to clipboard!`, "success");
          setOpen(false);
        },
      },
      {
        id: "social-github-projects",
        title: "Open Complete PROJECTS Monorepo on GitHub",
        category: "Projects",
        icon: FolderGit2,
        action: () => {
          window.open(profile.githubProjectsRepo, "_blank");
          setOpen(false);
        },
      },
      {
        id: "social-github",
        title: "Visit GitHub Profile",
        category: "Social",
        icon: Github,
        action: () => {
          window.open(profile.github, "_blank");
          setOpen(false);
        },
      },
      {
        id: "social-linkedin",
        title: "Connect on LinkedIn",
        category: "Social",
        icon: Linkedin,
        action: () => {
          window.open(profile.linkedin, "_blank");
          setOpen(false);
        },
      },
    ];

    const projectItems: ActionItem[] = projects.map((p) => ({
      id: `project-${p.slug}`,
      title: `${p.name} — ${p.tagline}`,
      category: "Projects",
      icon: Sparkles,
      action: () => {
        window.location.hash = "#projects";
        setOpen(false);
      },
    }));

    return [...navItems, ...projectItems];
  }, [showToast]);

  const filtered = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [items, query]);

  useEffect(() => {
    setSelectedIdx(0);
  }, [query]);

  useEffect(() => {
    function handleNavKeys(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIdx((prev) => (prev + 1) % (filtered.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIdx((prev) =>
          prev <= 0 ? (filtered.length || 1) - 1 : prev - 1
        );
      } else if (e.key === "Enter" && filtered[selectedIdx]) {
        e.preventDefault();
        filtered[selectedIdx].action();
      }
    }
    window.addEventListener("keydown", handleNavKeys);
    return () => window.removeEventListener("keydown", handleNavKeys);
  }, [open, filtered, selectedIdx]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl glass-strong border border-white/15 bg-[#070b1e]/90 shadow-[0_0_60px_rgba(0,229,255,0.15)] backdrop-blur-2xl"
            >
              {/* Search bar */}
              <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
                <Search size={20} className="text-primary flex-shrink-0" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects, certificates, skills, or command..."
                  className="w-full bg-transparent text-base text-white placeholder:text-white/40 focus:outline-none"
                />
                <kbd className="hidden sm:inline-block rounded-md border border-white/15 bg-white/5 px-2 py-0.5 text-xs text-white/50 font-mono">
                  ESC
                </kbd>
              </div>

              {/* Action List */}
              <div className="max-h-96 overflow-y-auto p-3 flex flex-col gap-1">
                {filtered.map((item, idx) => {
                  const isSelected = idx === selectedIdx;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIdx(idx)}
                      className={`flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-left transition-all ${
                        isSelected
                          ? "bg-gradient-to-r from-primary/20 to-secondary/20 text-white border border-primary/40 shadow-glow"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`rounded-xl p-2 ${
                            isSelected
                              ? "bg-primary text-black"
                              : "bg-white/5 text-white/60"
                          }`}
                        >
                          <Icon size={16} />
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium">
                            {item.title}
                          </p>
                          <p className="text-[11px] text-white/40 font-mono">
                            {item.category}
                          </p>
                        </div>
                      </div>
                      <ArrowRight
                        size={15}
                        className={`flex-shrink-0 transition-transform ${
                          isSelected
                            ? "translate-x-0 opacity-100 text-primary"
                            : "-translate-x-2 opacity-0"
                        }`}
                      />
                    </button>
                  );
                })}

                {filtered.length === 0 && (
                  <div className="py-12 text-center text-white/40 text-sm">
                    No results found for &ldquo;{query}&rdquo;
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-5 py-3 text-xs text-white/40">
                <div className="flex items-center gap-3">
                  <span>Navigate: <kbd className="font-mono text-white/60">↑</kbd> <kbd className="font-mono text-white/60">↓</kbd></span>
                  <span>Select: <kbd className="font-mono text-white/60">↵</kbd></span>
                </div>
                <span className="font-mono text-primary/80">DevOps &amp; MERN Hub</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
