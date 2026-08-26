"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { journey, profile } from "@/lib/data";
import {
  GraduationCap,
  MapPin,
  Clock,
  Server,
  Cpu,
  Layers,
  Sparkles,
  Terminal as TerminalIcon,
  Code2,
  GitBranch,
} from "lucide-react";
import Terminal from "./Terminal";

export default function About() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    function updateClock() {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    }
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="section-pad relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About Me &amp; Journey"
          title="The builder behind the code"
          description="Known as 'The Code Whisperer' — a Python developer and DevOps builder crafting software, automating server fleets, and building remote systems."
        />

        {/* Bento Grid: Terminal + Key Highlights */}
        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {/* Interactive Terminal (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 min-h-[380px] flex flex-col"
          >
            <Terminal />
          </motion.div>

          {/* Key Facts & Status Bento (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {/* Education Card */}
            <div className="gradient-border glass-strong rounded-3xl p-6 flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-primary/10 border border-primary/30 p-3 text-primary">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <span className="eyebrow text-[10px]">Academic Foundation</span>
                  <h4 className="text-base font-semibold text-white mt-0.5">
                    {profile.degree}
                  </h4>
                </div>
              </div>
              <p className="mt-3 text-sm text-white/80">
                {profile.education}
              </p>
              <p className="mt-1 text-xs text-white/40 font-mono">
                Coimbatore, Tamil Nadu · Computer Science &amp; Engineering
              </p>
            </div>

            {/* Live Location & Timezone Card */}
            <div className="gradient-border glass-strong rounded-3xl p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <MapPin size={15} className="text-accent" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[11px] font-mono text-accent">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  <span>Available for Hire</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-primary" />
                  <span className="font-mono text-xs text-white/50">Local Clock (IST)</span>
                </div>
                <span className="font-mono text-sm font-semibold text-primary">
                  {time || "Loading..."}
                </span>
              </div>
            </div>

            {/* Engineering Pillars Card */}
            <div className="gradient-border glass-strong rounded-3xl p-6 sm:col-span-2 lg:col-span-1">
              <span className="eyebrow text-[10px]">Core Engineering Pillars</span>
              <h4 className="text-sm font-semibold text-white mt-1">
                Python Systems · Ansible Automation · MERN Web Platforms
              </h4>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-white/70">
                <div className="flex items-center gap-1.5">
                  <Code2 size={14} className="text-primary" /> Python (Primary)
                </div>
                <div className="flex items-center gap-1.5">
                  <Server size={14} className="text-accent" /> Ansible Fleet
                </div>
                <div className="flex items-center gap-1.5">
                  <Layers size={14} className="text-secondary" /> MERN &amp; Java
                </div>
                <div className="flex items-center gap-1.5">
                  <GitBranch size={14} className="text-primary" /> Docker &amp; CI/CD
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline Journey Section: From Code to DevOps */}
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow">The Evolution</span>
            <h3 className="font-display text-3xl sm:text-4xl font-bold mt-2 text-white">
              From Code to DevOps
            </h3>
            <p className="text-sm text-white/60 mt-2 leading-relaxed">
              How building software in Python, Java OOP, and MERN evolved into automating server fleets, engineering remote systems (ONey), and competing in national 24-hour CTFs.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-secondary to-transparent sm:left-1/2" />

            <div className="flex flex-col gap-12">
              {journey.map((item, i) => {
                const isEven = i % 2 === 0;
                return (
                  <div
                    key={item.title}
                    className={`relative flex flex-col gap-6 sm:flex-row sm:items-center ${
                      isEven ? "" : "sm:flex-row-reverse"
                    }`}
                  >
                    <div className="absolute left-4 top-2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-primary bg-[#050816] shadow-glow sm:left-1/2" />

                    <div className="w-full pl-12 sm:w-1/2 sm:px-10">
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -50 : 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ y: -4 }}
                        className="gradient-border glass-strong rounded-3xl p-6 sm:p-8 border border-white/10"
                      >
                        <div className="flex items-center justify-between">
                          <span className="eyebrow text-primary">{item.year}</span>
                          <span className="font-mono text-xs text-white/30">0{i + 1}</span>
                        </div>
                        <h4 className="mt-2 font-display text-xl font-bold sm:text-2xl text-white">
                          {item.title}
                        </h4>
                        <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                          {item.body}
                        </p>
                      </motion.div>
                    </div>

                    <div className="hidden sm:block sm:w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
