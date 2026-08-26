"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail, FileText } from "lucide-react";
import { profile, nav } from "@/lib/data";

const socials = [
  { icon: Github, href: profile.github, label: "GitHub" },
  { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#040612] py-12">
      <div className="container-px mx-auto max-w-7xl flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a
              href="#hero"
              className="font-display text-xl font-bold tracking-tight text-white"
            >
              <span>{profile.name.split(" ")[0]}</span>
            </a>
            <p className="mt-1 font-mono text-xs text-white/50">
              DevOps Specialist · MERN Stack Developer · Sri Shakthi Institute
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-white/60 font-mono">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-white/40">
          <p className="font-mono">
            © {new Date().getFullYear()} {profile.fullName}. Built with Next.js &amp; Tailwind CSS.
          </p>

          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="text-white/50 transition-colors hover:text-primary"
              >
                <s.icon size={16} />
              </a>
            ))}

            <motion.a
              href="#hero"
              whileHover={{ y: -3 }}
              aria-label="Back to top"
              className="ml-4 flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-mono text-[11px] text-white/60 hover:border-primary/40 hover:text-primary transition-all"
            >
              Top <ArrowUp size={12} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
