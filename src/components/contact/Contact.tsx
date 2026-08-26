"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send, Check, Copy, MapPin, Calendar, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import { profile } from "@/lib/data";
import { useToast } from "@/components/ui/Toast";

const socials = [
  { icon: Github, href: profile.github, label: "GitHub" },
  { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const body = encodeURIComponent(
      `From: ${form.name} (${form.email})\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=Project / Opportunity Discussion with ${form.name}&body=${body}`;
    setStatus("sent");
    showToast("Opening your default mail client...", "info");
  }

  function handleCopyEmail() {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    showToast(`Copied ${profile.email} to clipboard!`, "success");
    setTimeout(() => setCopied(false), 3000);
  }

  return (
    <section id="contact" className="section-pad relative">
      <div className="container-px mx-auto max-w-6xl">
        <div className="gradient-border glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-14 border border-white/15">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-secondary/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-[100px]" />

          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's build resilient systems together"
            description="Available for full-stack engineering roles, DevOps automation, and scalable cloud systems."
            align="left"
          />

          <div className="relative mt-10 grid gap-10 lg:grid-cols-12">
            {/* Contact Form (7 cols) */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-mono text-white/50">
                    Your Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary/60 focus:outline-none"
                    placeholder="e.g. Alex Morgan"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-mono text-white/50">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary/60 focus:outline-none"
                    placeholder="alex@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-mono text-white/50">
                  Project Details / Role Overview
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary/60 focus:outline-none"
                  placeholder="Tell me about the engineering challenges, tech stack, or opportunity..."
                />
              </div>

              <div className="flex items-center gap-4 mt-2">
                <MagneticButton as="button" variant="primary">
                  {status === "sent" ? (
                    <>
                      <Check size={16} /> Opened Email Client
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Direct Message
                    </>
                  )}
                </MagneticButton>
              </div>
            </form>

            {/* Direct Connect & Social Info (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 lg:border-t-0 lg:border-l lg:border-white/10 lg:pl-10 lg:pt-0">
              <div className="space-y-4">
                <span className="eyebrow text-accent text-[10px]">Direct Outreach</span>
                
                {/* One Click Copy Email Button */}
                <div
                  onClick={handleCopyEmail}
                  className="group cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-primary/50 hover:bg-primary/5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Mail size={18} className="text-primary" />
                      <span className="font-mono text-sm text-white font-medium">
                        {profile.email}
                      </span>
                    </div>
                    <span className="rounded-lg border border-white/10 bg-white/10 p-1.5 text-white/60 group-hover:text-primary transition-colors">
                      {copied ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[11px] text-white/40 font-mono">
                    Click to copy address to clipboard
                  </p>
                </div>

                {/* Location & Timezone info */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/70 space-y-1.5">
                  <div className="flex items-center gap-2 text-white/90 font-medium">
                    <MapPin size={14} className="text-primary" />
                    <span>{profile.location}</span>
                  </div>
                  <p className="text-white/50 text-[11px]">
                    Sri Shakthi Institute of Engineering and Technology · Replies within 24 hours.
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div>
                <span className="font-mono text-xs text-white/40 mb-3 block">Profiles &amp; Repositories</span>
                <div className="flex gap-3">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white/80 hover:border-primary/50 hover:text-primary transition-all"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white/80 hover:border-primary/50 hover:text-primary transition-all"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
