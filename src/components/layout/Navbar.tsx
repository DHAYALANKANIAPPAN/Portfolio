"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, Search, Sparkles } from "lucide-react";
import { nav, profile } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function triggerCommandPalette() {
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", ctrlKey: true }));
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-primary via-secondary to-accent"
      />
      <div
        className={`transition-all duration-500 ${
          scrolled ? "glass-strong border-b border-white/10 bg-[#050816]/90 backdrop-blur-2xl" : "bg-transparent"
        }`}
      >
        <nav className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between sm:h-20">
          <a
            href="#hero"
            className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-white group"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 border border-primary/40 text-primary font-mono text-xs font-bold group-hover:shadow-glow transition-all">
              DK
            </span>
            <span>
              {profile.name.split(" ")[0]}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-xs font-medium uppercase tracking-wider text-white/70 transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Cmd+K Search trigger */}
            <button
              onClick={triggerCommandPalette}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-white/50 hover:border-primary/40 hover:text-white transition-all"
            >
              <Search size={13} className="text-primary" />
              <span className="font-mono text-[11px]">Quick Find</span>
              <kbd className="rounded border border-white/15 bg-white/10 px-1.5 py-0.5 text-[10px] font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Resume & Certs Button */}
            <a
              href="#resume"
              className="flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/20 hover:shadow-glow"
            >
              <FileText size={13} />
              <span>Resume &amp; Certs</span>
            </a>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-1.5 text-xs font-bold text-[#050816] transition-all hover:shadow-glow-secondary"
            >
              Let&apos;s talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={triggerCommandPalette}
              className="rounded-full border border-white/10 p-2 text-white/70"
              aria-label="Quick search"
            >
              <Search size={18} />
            </button>

            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
              className="rounded-full p-2 text-white/80"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-strong overflow-hidden border-b border-white/10 bg-[#050816]/95 backdrop-blur-2xl lg:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10 flex gap-2">
                <a
                  href="#resume"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-xl border border-primary/40 bg-primary/10 py-2.5 text-center text-xs font-semibold text-primary"
                >
                  Resume &amp; Certs
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-xl bg-gradient-to-r from-primary to-secondary py-2.5 text-center text-xs font-bold text-[#050816]"
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
